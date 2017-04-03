(function() {
	function Room($firebaseArray) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		Room = {all: $firebaseArray(ref)};

		return Room;
	}
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();