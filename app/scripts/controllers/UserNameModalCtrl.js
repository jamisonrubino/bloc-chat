(function() {
	function UserNameModalCtrl(BlocChatCookies) {

		this.cookies = BlocChatCookies;

		this.submit = function (value) {
			$uibModalInstance.close();
			if (this.cookies.userNameValue.length > 0) {
				$cookies.put("username", this.cookies.userNameValue);
			}
			this.cookies.userNameValue = $("#username-value").val();
		};

		this.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
	};

		// this.close = function () {
		// 	this.cookies.modal.dismiss();
		// };
		// this.submit = function(value) {
		// 	this.cookies.userNameValue = $("#username-value").val();
		//
		// 	if (this.cookies.userNameValue.length > 0) {
		// 		$cookies.put("username", this.cookies.userNameValue);
		// 	}
		// 	this.cookies.close();
		// };

	angular
	   .module('blocChat')
	   .controller('UserNameModalCtrl', ['BlocChatCookies', UserNameModalCtrl]);
})();
