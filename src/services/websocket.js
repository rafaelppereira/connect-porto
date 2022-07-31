
var ws;
var wsUri = "wss:";
var loc = window.location;
wsUri += "//" + "pcs-portohack.herokuapp.com/ws/dashboard-updates"

function wsConnect() {
    console.log("connect",wsUri);
    ws = new WebSocket(wsUri);
    ws.onmessage = function(msg) {
        var line = "";  // or uncomment this to overwrite the existing message
        var data = msg.data;
        line += "<p>"+data+"</p>";
    }
    ws.onopen = function() {
        console.log("connected");
    }
    ws.onclose = function() {
        setTimeout(wsConnect,3000);
    }
}

function doit(m) {
    if (ws) { ws.send(m); }
}

window.onload = () => {
    wsConnect();
}