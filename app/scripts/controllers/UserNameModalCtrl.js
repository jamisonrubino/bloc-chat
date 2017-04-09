(function() {
	function UserNameModalCtrl(BlocChatCookies) {
		this.BlocChatCookies = BlocChatCookies;	
		this.BlocChatCookies.close = function () {
			this.BlocChatCookies.modalInstance.dismiss();
		};
		this.BlocChatCookies.submit = function(value){
			this.BlocChatCookies.userNameValue = $("#username-value").val();

			if (this.BlocChatCookies.userNameValue.length > 0) {
				$cookies.put("username", this.BlocChatCookies.userNameValue);
			}
			this.BlocChatCookies.close();
		};
	}
	
	angular
	   .module('blocChat')
	   .controller('UserNameModalCtrl', ['BlocChatCookies', UserNameModalCtrl]);
})();