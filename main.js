var socket = io();

socket.on('connect', function () {

	socket.on('newyo', function(data) {
		console.log(data.username)
	});
	
});