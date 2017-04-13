(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var cookies = {};
		cookies.openModal = function() {
			$uibModal.open({
				animation: true,
				templateUrl: '/templates/usernamemodal.html',
				size: 'sm'
			});
		};
		
		cookies.currentUser = $cookies.get('blocChatCurrentUser');	
		
		if (!cookies.currentUser || cookies.currentUser === '') {
			cookies.openModal();
			console.log("Opening username modal");
		}
		
		return cookies;
	}
	
	angular
		.module('blocChat')
		.factory('BlocChatCookies', ['$cookies', '$uibModal', BlocChatCookies])
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();