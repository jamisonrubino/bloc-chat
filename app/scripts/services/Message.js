(function() {
	function Message($firebaseArray, $cookies, BlocChatCookies) {
		var cookies = BlocChatCookies;
		var Message = {};

			Message.ref = firebase.database().ref().child("messages");
			Message.messages = $firebaseArray(Message.ref);
			// ID OF NEXT SENT MESSAGE
			Message.messageId = Message.messages.length + 1;
			console.log(Message.messages);
			console.log("Downloaded message array.");

    Message.getByRoomId = function (roomId) {
			Message.messageArr = [];
			Message.roomId = roomId;
			// $("#message-input").removeAttr("display");
			Message.ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
				for (var i = 1; i<Message.messages.length+1; i++) {
					if (snapshot.child(i).child("roomId").val() == roomId) {
						Message.messageArr.push({
							username: snapshot.child(i).child("username").val(),
							sentAt: snapshot.child(i).child("sentAt").val(),
							content: snapshot.child(i).child("content").val(),
							roomId: snapshot.child(i).child("roomId").val(),
						});
					}
				}
			});
			return Message.messageArr;
		}

		Message.send = function() {
			var today = new Date;
			var date = today.getMonth()+1+'/'+today.getDate()+'/'+today.getFullYear();
			var time = today.getHours()+":"+today.getMinutes();
			var dateTime = date+' '+time;

			if ($("#message-text").val().length > 0) {
				var content = $("#message-text").val();
				Message.ref.child(Message.messages.length+1).set({
					"username": $cookies.get('blocChatCurrentUser'),
					"sentAt": dateTime,
					"content": content,
					"roomId": Message.roomId
			 	});
				$("#message-text").val('');
				Message.getByRoomId(Message.roomId);
				Message.messageArr.push({
					"username": $cookies.get('blocChatCurrentUser'),
					"sentAt": dateTime,
					"content": content,
					"roomId": Message.roomId
				});
		 	}
		};

		return Message;
	}
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', 'BlocChatCookies', Message]);
})();
