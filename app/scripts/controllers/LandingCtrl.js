(function() {
	function LandingCtrl(Room) {
		this.rooms = Room.rooms;
		console.log(this.rooms);
	}
 
	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();