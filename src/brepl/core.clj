(ns brepl.core
  (:refer-clojure :exclude [munge load-file loaded-libs macroexpand-1])
  (:use cljs.compiler)
  (:require [brepl.server :as server]
            [clojure.java.io :as io]
            [clojure.string :as string]))

(declare ^:dynamic *cljs-classpath*)
(def dbg (atom nil))

(defmulti browser-emit :sym)
(defmethod browser-emit :default [_]
  false)

(declare browser-require)
(defmethod browser-emit 'require [{:keys [form]}]
  (let [req (second form)
        req (if (vector? req)
              req
              (second req))]
    (with-out-str 
      (browser-require req))))

(defmethod browser-emit 'ns [{:keys [env form]}]
  (with-out-str
    (let [{:keys [name requires]} (analyze env form)]
      (println (str "goog.provide('" (munge name) "');"))
      (when-not (= name 'cljs.core)
        (println (str "goog.require('cljs.core');")))
      (doseq [[ns-alias ns-sym] requires]
        (browser-require [ns-sym :as ns-alias])))))


(defn browser-handles? [env form]
  (let [result (browser-emit {:sym (first form)
                              :form form
                              :env env})]
    (when-not (false? result)
      (when result
        (println result)
        (server/send-js result))
      true)))

(defn browser-eval1
  [repl-env env form]
  (try
    (when-not (browser-handles? env form)
      (let [ast (analyze env form)]
        (server/send-js (emits ast))))
    (catch Throwable ex
      (.printStackTrace ex)
      (println (str ex)))))

(defn browser-load-stream [repl-env stream]
  (with-open [r (io/reader stream)]
    (let [env {:ns (@namespaces *cljs-ns*) :context :statement :locals {}}
          pbr (clojure.lang.LineNumberingPushbackReader. r)
          eof (Object.)]
      (loop [r (read pbr false eof false)]
        (let [env (assoc env :ns (@namespaces *cljs-ns*))]
          (when-not (identical? eof r)
            (browser-eval1 repl-env env r)
            (recur (read pbr false eof false))))))))

(defn browser-load-file
  [repl-env f]
  (binding [*cljs-ns* 'cljs.user]
    (let [res (if-not (string? f) f (io/resource f))]
      (assert res (str "Can't find " f " in classpath"))
      (browser-load-stream repl-env res))))

(defn ns->path [ns-sym]
  (let [ns-str (name ns-sym)
        parts (string/split ns-str #"\.")]
    (str (string/join #"/"  parts) ".cljs")))

(defn local-require [ns-sym]
  (let [f (when *cljs-classpath*
            (io/file *cljs-classpath* (ns->path ns-sym)))
        exists? (. f exists)]
    (when exists?
      (browser-load-file repl-env f))))

(defn browser-require [[ns-sym _ ns-alias]]
  (let [prev-ns *cljs-ns*
        local? (local-require ns-sym)]
    (swap! namespaces assoc-in [*cljs-ns* :requires ns-alias] ns-sym)
    (set! *cljs-ns* prev-ns)
    (when-not local?
      (println (str "goog.require(\"" (name ns-sym) "\")")))))

(defn handle-form [repl-env env form]
          (cond
            (nil? form) nil

            (= form :cljs/quit) (do 
                                  (server/stop-repl-server)
                                  :quit)

            (and (seq? form) (= (first form) 'in-ns))
            (do (set! *cljs-ns* (second (second form))) (newline))

            (and (seq? form) (= (first form) 'list-ns))
            (do (println @namespaces) (newline))

            (and (seq? form) ('#{load-file clojure.core/load-file} (first form)))
            (do (load-file repl-env (second form)) (newline))

            :else
            (let [ret (browser-eval1 repl-env
                                     (assoc env :ns (@namespaces *cljs-ns*))
                                     form)])))

(defn execute-repl [{:keys [classpath]} verbose warn-on-undeclared]
  (println "Repl connected. Let's do this.")
  (binding [*cljs-ns* 'cljs.user
            *cljs-verbose* verbose
            *cljs-warn-on-undeclared* warn-on-undeclared
            *cljs-classpath* classpath]
    (let [env {:context :statement :locals {}}]
      (browser-load-file repl-env "cljs/core.cljs")
      (browser-eval1 repl-env (assoc env :ns (@namespaces *cljs-ns*))
                     '(ns cljs.user))
      (loop []
        (print (str "brepl :: " *cljs-ns* " :: "))
        (flush)
        (try
          (let [form (read)]
            (handle-form repl-env env form))
          (catch Throwable ex
            (.printStackTrace ex)
            (println (str ex))))
        (recur)))))

(defn browser-repl
  "Note - repl will reload core.cljs every time, even if supplied old repl-env"
  [repl-env & {:keys [verbose warn-on-undeclared]}]
  (prn "Starting repl server...")
  (server/start-repl-server println)
  (server/on-ready #(execute-repl repl-env verbose warn-on-undeclared)))
