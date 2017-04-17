(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var cookies = {};

		cookies.modal = function() {
			var modalInstance = $uibModal.open({
				// animation: true,
				templateUrl: '/templates/usernamemodal.html',
				controller: 'UserNameModalCtrl',
				// ariaLabelledBy: 'un-modal-title',
	      // ariaDescribedBy: 'un-modal-body'
				size: 'sm'
			});
		};

		cookies.currentUser = $cookies.get('blocChatCurrentUser');

		if (!cookies.currentUser || cookies.currentUser === '') {
			cookies.modal();
			console.log("Opening username modal");
		}

		return cookies;
	}

	angular
		.module('blocChat')
		.factory('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies])
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();
