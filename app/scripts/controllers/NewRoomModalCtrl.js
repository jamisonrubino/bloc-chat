(function() {
	function NewRoomModalCtrl(Room) {

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
	}
	
	angular
	   .module('blocChat')
	   .controller('NewRoomModalCtrl', ['Room', NewRoomModalCtrl]);
})();