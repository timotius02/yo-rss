var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 8000, function(){
	console.log('Server initialized')
});

app.get('/users', function(req, res){

	if(req.query.username){
		var data = { username: req.query.username};
		io.emit('newyo',data);
	}
});

app.use("/", express.static(__dirname + '/app'));

io.on('connection', function (socket) {
	console.log('New RSS');
});