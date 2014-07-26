var socket = io();

socket.on('connect', function () {
	var count = 0;

	var addUser = function(username){
		var yo = $('#template').clone();
		$('.chat-box').append(yo);
		yo.addClass('yo').removeAttr('id');

		yo.find('span').replaceWith("<span>"+username+"</span>");;
	}

	socket.on('newyo', function(data) {
		addUser(data.username);
	});

});