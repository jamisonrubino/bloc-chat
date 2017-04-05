(function() {
	function Room($firebaseArray) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		Room.rooms = $firebaseArray(ref);
		
// NEXT: HOW TO CHANGE OBJECT ID
		Room.newRoom = function (roomName) {
			Room.rooms.$add({ $value: roomName }).then(function(ref) {
				ref.key = roomName;
//				Room.rooms.$indexFor(id);
			});
		}
		
		console.log(Room.rooms);

		return Room;
	}
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();