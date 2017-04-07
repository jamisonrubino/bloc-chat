(function() {
	function Message($firebaseArray) {
		var Message = {};
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);

      	Message.getByRoomId = function (roomId) {
			ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
				Message.messageArr = [];
				for (var i=1; i<=messages.length; i++) {
					Message.messageArr.push({ 
						username: snapshot.child(i).child("username").val(),
						sentAt: snapshot.child(i).child("sentAt").val(),
						content: snapshot.child(i).child("content").val()
					});
				}
			});
			return Message.messageArr;
			console.log(Message.messageArr[0]);
		}
	return Message;
	}
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();