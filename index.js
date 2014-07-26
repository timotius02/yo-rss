var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 8000, function(){
	console.log('Server initialized')
});

app.get('/users', function(req, res){
	console.log(req);
	// if(req.username){
	// 	console.log(req.username);
	// 	io.emit('newyo',{username: req.username});

	// }
});

app.use("/", express.static(__dirname + '/app'));

io.on('connection', function (socket) {
	console.log('New RSS');
});