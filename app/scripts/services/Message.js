(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		Message.messageArr = [];

		return {
      		getByRoomId: function (roomId) {
				ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
					for (var i=1; i<=messages.length; i++) {
						Message.messageArr.push({ 
							username: snapshot.child(i).child("username").val(),
							sentAt: snapshot.child(i).child("sentAt").val(),
							content: snapshot.child(i).child("content").val()
						});
					}
				});
				console.log(Message.messageArr[0]);
			}
		}
	}
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();