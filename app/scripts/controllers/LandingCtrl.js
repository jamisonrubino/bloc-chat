(function() {
	function LandingCtrl(Room, Message) {
		this.Room = Room;
		this.Message = Message;
//		this.BlocChatCookies = BlocChatCookies;
	}
 
	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
 })();