(ns brepl.server
  (:use clj-socketio.core))

(def server (atom (create 9090)))
(def clients (atom #{}))

(defn send-js [msg]
  (send-to @clients msg))

(defn ready? []
  (boolean (seq @clients)))

(defn on-ready [func]
  (when (not (ready?))
    (println "Waiting for a client connection... Open the included html file.")
    (while (not (ready?)) 
      (Thread/sleep 10))
    (func)))

(defn start-repl-server [on-response]
  (reset! server (-> @server
                   (on-connect (fn [client]
                                 (swap! clients conj client)))
                   (on-disconnect (fn [client]
                                    (swap! clients disj client)))
                   (on-message (fn [client msg]
                                 (on-response msg)))
                   (init)))

  (start @server))

(defn stop-repl-server []
  (stop @server))
