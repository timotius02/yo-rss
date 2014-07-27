var socket = io();

socket.on('connect', function () {
	var count = 0;

	var addUser = function(username){
		if(count >= 5){
			$('.yo').first().remove();
		}
		var yo = $('#template').clone();
		$('.chat-box').append(yo);
		yo.addClass('yo').removeAttr('id');

		yo.find('span').replaceWith("<span>"+username+"</span>");
		count++;
	}

	socket.on('newyo', function(data) {
		addUser(data.username);
	});

});