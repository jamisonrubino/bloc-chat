(function() {
	function LandingCtrl($scope, Room) {
		console.log("LandingCtrl working...?");
		this.rooms = Room;
		console.log(this.rooms.all);
	}
 
   angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();