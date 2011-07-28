(ns brepl.server
  (:use clj-socketio.core))

(def server (create 9090))
(def clients (atom #{}))

(defn send-js [msg]
  (doseq [c @clients]
    (send-to c msg)))

(defn ready? []
  (boolean (seq @clients)))

(defn on-ready [func]
  (when (not (ready?))
    (println "Waiting for a client connection... Open the included html file.")
    (while (not (ready?)) 
      (Thread/sleep 5))
    (func)))

(defn start-repl-server [on-response]
  (on-connect server (fn [client]
                         (swap! clients conj client)))

  (on-disconnect server (fn [client]
                          (swap! clients disj client)))

  (on-message server (fn [client msg]
                       (on-response msg)))

  (start server))

(defn stop-repl-server []
  (stop server))
