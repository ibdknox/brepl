(function(window) {

    // We have to override the way google's base library writes script tags
    // currently it uses document.write, which will remove the content of the
    // document every time it is called. This is unacceptable when using requires
    // from the REPL
    goog.writeScriptTag_ = function(src) {
        if (goog.inHtmlDocument_()) {
            var doc = goog.global.document;
            var scriptTag = document.createElement("script");
            scriptTag.setAttribute("type", "text/javascript")
            scriptTag.setAttribute("src", src);
            doc.head.appendChild(scriptTag);
            return true;
        } else {
            return false;
        }
    }

    var socket = new io.Socket("localhost", {port: "9090", transports: ['websocket','xhr-polling'], rememberTransport: true, connectTimeout: false });
    socket.on("message", function(data) {
        var retVal = eval(data);
        if(cljs.core.pr_str) {
            retVal = cljs.core.pr_str(retVal);
        }
        console.log(retVal);
    });
    socket.on('connect', function() {
    });
    socket.on("disconnect", function() {
    });
    socket.connect();

    window.socket = socket;


})(window)
