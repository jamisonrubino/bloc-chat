(function() {
	function Room($firebaseArray, $uibModal) {
		var Room = {};
		var ref = firebase.database().ref().child("rooms");
		Room.rooms = $firebaseArray(ref);
		
// NEXT: HOW TO CHANGE OBJECT ID
		Room.newRoom = function (roomName) {
			ref.child(roomName).set({ "value": roomName });
			console.log("Added room " + roomName);
		}
		
		Room.openModal = function() {
			$uibModal.open({
				animation: true,
				templateUrl: '/templates/newroommodal.html',
				controller: 'NewRoomModalCtrl',
				size: 'sm'
			});
		};
		
		return Room;
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', '$uibModal', Room]);
})();