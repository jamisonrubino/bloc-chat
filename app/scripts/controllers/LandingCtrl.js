(function() {
	function LandingCtrl(Room, Message, $uibModal) {
		this.Room = Room;
		this.Message = Message;
		this.openNewRoomModal = function () {
			var modalInstance = $uibModal.open({
				size: 'sm',
				animation: true,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: '/templates/newroommodal.html',
				controller: 'NewRoomModalCtrl',
				controllerAs: 'newRoomModalCtrl'
			});
		};
		console.log(Message);

	}

	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', 'Message', '$uibModal', LandingCtrl]);
 })();
