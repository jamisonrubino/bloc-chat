(function() {
	function Room($firebaseArray) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		Room.rooms = $firebaseArray(ref);
		
// NEXT: HOW TO CHANGE OBJECT ID
		Room.newRoom = function (roomName) {
			ref.child(roomName).set({ "value": roomName });
			console.log("Added room " + roomName);
		}
		
//		console.log(Room.rooms);

		return Room;
	}
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();