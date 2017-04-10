(function() {
	function BlocChatCookies($cookies, $uibModal, UserNameModalCtrl) {
		var BlocChatCookies = {};
//		BlocChatCookies.openModal = function() {
//			$uibModal.open({
//				animation: true,
//				templateUrl: '/templates/usernamemodal.html',
//				ariaLabelledBy: 'un-modal-title',
//				ariaDescribedBy: 'un-modal-body',
//				size: 'sm'
//			});
//		};
		BlocChatCookies.currentUser = $cookies.get('blocChatCurrentUser');		
		if (!BlocChatCookies.currentUser || BlocChatCookies.currentUser === '') {
//			BlocChatCookies.openModal();
		}
		return BlocChatCookies;
	}
	
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);	
})();


/*		
		var Cookies = {};
		
		Cookies.currentUser = $cookies.get('blocChatCurrentUser');
		console.log(currentUser);
		
		
		/*
		
		Cookies.openModal = function () {
			$uibModal.open({
				size: sm,
				animation: true,
				ariaLabelledBy: 'username-modal-title',
				ariaDescribedBy: 'username-modal-body',
				templateUrl: 'usernamemodal.html'
			});				
		};
			
		Cookies.close = function () {
			Cookies.openModal.dismiss();
		};
			
		Cookies.submit = function(value){
			Cookies.currentUser = $("#username-value").val();
			console.log(Cookies.currentUser);
			if (Cookies.currentUser.length > 0) {
				$cookies.put("username", Cookies.currentUser);	
			}
		};
		
		if (!Cookies.currentUser || Cookies.currentUser === '') {
			Cookies.openModal();
		}
		
		return Cookies;
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})(); */