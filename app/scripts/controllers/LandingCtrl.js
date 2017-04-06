(function() {
	function LandingCtrl(Room) {
		this.Room = Room;
		
		// MODAL CODE
		this.modalValue = null;
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
			this.modalValue = $("#modal-value").val();
			console.log(this.modalValue);
			if (this.modalValue.length > 0) {
				Room.newRoom(this.modalValue);
			}		
		};

// Temporary code / replaced by modal
//		var myRoom = "room5";
//		Room.newRoom(myRoom);
	}
 
	angular
	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', LandingCtrl]);
 })();