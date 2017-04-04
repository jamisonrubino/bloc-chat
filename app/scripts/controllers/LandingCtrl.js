(function() {
	function LandingCtrl(Room) {
		this.rooms = Room.all;
		this.newRoom = function (roomName) {
			
		}
	}
 
	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();