var socket = io();

socket.on('connect', function () {
	var count = 0;

	var dataUser = function(username){
		var yo = $('#template').clone();
		$('.chat-box').append(yo);
		yo.addClass('yo').removeAttr('id');

	}


	socket.on('newyo', function(data) {
		console.log(data.username)
		addUser(data.username);
	});

});