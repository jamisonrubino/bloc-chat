(function() {
	function LandingCtrl(Room) {
		this.rooms = Room.rooms;
		this.openModal = function () {
			NewRoom.modalInstance = $uibModal.open({
				size: sm,
				animation: true,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'newroommodal.html'
			});
		};
		this.close = function () {
			this.modalInstance.dismiss();
		};

		this.submit = function(value){
			if (value.length > 0) {
				Room.newRoom(value);
			}
			console.log("Do Something");
		};

// Temporary code / replaced by modal
//		var myRoom = "room5";
//		Room.newRoom(myRoom);
	}
 
	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();