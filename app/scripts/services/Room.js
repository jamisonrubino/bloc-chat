(function() {
  function Room($firebaseArray) {
	var firebaseObj = new Firebase("https://bloc-chat-76c94.firebaseio.com/"); 
    var rooms = $firebaseArray(firebaseObj.database().ref().child("rooms"));
//	console.log(ref);
//    var rooms = $firebaseArray(ref);
//	console.log("Room.js: \n" + rooms);
    return {all: rooms};
  }
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();