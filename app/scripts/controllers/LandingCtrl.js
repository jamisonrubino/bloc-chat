(function() {
	function LandingCtrl(Room, Message) {
		this.Room = Room;
		this.Message = Message;
		console.log(Message);
	}
 
	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
 })();