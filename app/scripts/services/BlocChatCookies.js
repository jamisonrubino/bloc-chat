(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var BlocChatCookies = {};
		BlocChatCookies.openModal = function () {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: 'usernamemodal.html',
				controller: 'UserNameModalCtrl',
				size: sm
//				resolve: {
//					items: function () {
//						return this.items;
//					}
//				}
			});
		}
		BlocChatCookies.currentUser = $cookies.get('blocChatCurrentUser');		
		if (!BlocChatCookies.currentUser || BlocChatCookies.currentUser === '') {
			BlocChatCookies.openModal();
		}
		return BlocChatCookies;
	}
	
	angular
		.module('blocChat')
		.run([BlocChatCookies]);	
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