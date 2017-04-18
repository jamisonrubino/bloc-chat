(function() {
	function NewUserNameModalCtrl(BlocChatCookies, $uibModalInstance) {
		this.cookies = BlocChatCookies;
		var modal = this;
		modal.modalValue = null;
		modal.submit = function(){
			modal.modalValue = $("#un-modal-value").val();
			console.log(modal.modalValue);
			if (modal.modalValue.length > 0) {
				this.cookies.put(modal.modalValue);
			}
			$uibModalInstance.close();
			this.cookies.checkUsername();
		};

		modal.close = function() {
			$uibModalInstance.dismiss('Cancel');
			this.cookies.checkUsername();
		};


	}

	angular
	   .module('blocChat')
	   .controller('NewUserNameModalCtrl', ['BlocChatCookies', '$uibModalInstance', NewUserNameModalCtrl]);
})();
