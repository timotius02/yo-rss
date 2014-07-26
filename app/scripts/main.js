var socket = io();

socket.on('connect', function () {
	var count = 0;

	var addUser = function(username){
		console.log(username);
		var yo = $('#template').clone();
		$('.chat-box').append(yo);
		yo.addClass('yo').removeAttr('id');

	}


	socket.on('newyo', function(data) {
		addUser(data.username);
	});

});