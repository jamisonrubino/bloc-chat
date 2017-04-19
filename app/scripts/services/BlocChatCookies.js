(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var cookies = {};
		cookies.openNewUserNameModal = function () {
			var modalInstance = $uibModal.open({
				size: 'sm',
				animation: true,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/templates/newusernamemodal.html',
				controller: 'NewUserNameModalCtrl',
				controllerAs: 'newUserNameModalCtrl'
			});
		};
		cookies.put = function(value) {
			$cookies.put("blocChatCurrentUser", value);
		};

		cookies.checkUsername = function () {
			cookies.currentUser = $cookies.get('blocChatCurrentUser');
			if (!cookies.currentUser || cookies.currentUser === '') {
				cookies.openNewUserNameModal();
			}
		};

		return cookies;
	}

	angular
		.module('blocChat')
		.factory('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies])
		.run(['$cookies', '$uibModal', function($cookies, $uibModal) {
			var currentUser = $cookies.get('blocChatCurrentUser');
			if (!currentUser || currentUser === '') {
				var modalInstance = $uibModal.open({
					size: 'sm',
					animation: true,
					ariaLabelledBy: 'modal-title',
					ariaDescribedBy: 'modal-body',
					templateUrl: '/templates/newusernamemodal.html',
					controller: 'NewUserNameModalCtrl',
					controllerAs: 'newUserNameModalCtrl'
				});
				console.log("Opening username modal");
			}
		}]);
})();
