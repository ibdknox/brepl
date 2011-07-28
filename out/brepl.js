(function(window) {

    var socket = new io.Socket("localhost", {port: "9090", transports: ['websocket','xhr-polling'], rememberTransport: true, connectTimeout: false });
    socket.on("message", function(data) {
        var retVal = eval(data);
        console.log(retVal);
        //if(retVal) retVal = retVal.toString();
        //if(retVal && retVal.length > 100) retVal = retVal.substring(0, 100);
        //socket.send(retVal);
    });
    socket.on('connect', function() {
    });
    socket.on("disconnect", function() {
    });
    socket.connect();

    window.socket = socket;


})(window)
