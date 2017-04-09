(function() {
	function Message($firebaseArray) {
		var Message = {};
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);

      	Message.getByRoomId = function (roomId) {
			Message.messageArr = [];
			ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
				for (var i = 1; i<messages.length+1; i++) {
					if (snapshot.child(i).child("roomId").val() == roomId) {
						Message.messageArr.push({
							username: snapshot.child(i).child("username").val(),
							sentAt: snapshot.child(i).child("sentAt").val(),
							content: snapshot.child(i).child("content").val(),
							roomId: snapshot.child(i).child("roomId").val()
						});
					}
				}
			});
			return Message.messageArr;
		}
		return Message;
	}
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();