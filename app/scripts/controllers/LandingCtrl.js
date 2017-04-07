(function() {
	function LandingCtrl(Room, Message) {
		this.Room = Room;
		this.Message = Message;
	}
 
	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
 })();