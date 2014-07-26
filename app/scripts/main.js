var socket = io();

socket.on('connect', function () {

  socket.on('newyo', function(username) {
    console.log(username)
});


  socket.on('disconnect',function() {
  });
});