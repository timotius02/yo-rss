var socket = io();

socket.on('connect', function () {
	var count = 0;

	var dataUser = function(username){
		$('#template').clone().removeAttr('id').append('.chat-box').addClass('yo');
	}


	socket.on('newyo', function(data) {
		console.log(data.username)
		addUser(data.username);
	});

});