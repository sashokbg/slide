var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat-message', function(message){
        console.log('message: '+message);
        io.emit('chat-message', message);
    });

    socket.on('createRoom', function(message){
        console.log('Creating room: '+message);
    });
})

http.listen(8000, function(){
    console.log('listening on *:8000');
});