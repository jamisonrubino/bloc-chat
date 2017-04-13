(function() {
	function LandingCtrl(Room, Message) {
		this.Message = Message;
		this.Room = Room;
	}
 
	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
 })();