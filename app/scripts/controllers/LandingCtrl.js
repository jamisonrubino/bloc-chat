(function() {
	function LandingCtrl(Room) {
		this.rooms = Room.rooms;
		
		// Temporary code / replaced by modal
//		var myRoom = "room5";
//		Room.newRoom(myRoom);
	}
 
	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();