(function() {
	function LandingCtrl(Room) {
		this.rooms = Room;
		console.log("LandingCtrl working...?");
	}
 
   angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();