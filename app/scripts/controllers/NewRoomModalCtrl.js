(function() {
	function NewRoomModalCtrl(Room, $uibModalInstance) {

		var Room = Room;
		var modal = this;

		modal.modalValue = null;

		modal.submit = function(value){
			modal.modalValue = $("#modal-value").val();
			console.log(modal.modalValue);
			if (modal.modalValue.length > 0) {
				Room.newRoom(modal.modalValue);
			}
		};

		modal.close = function() {
			modal.$uibModalInstance.dismiss();
		};


	}

	angular
	   .module('blocChat')
	   .controller('NewRoomModalCtrl', ['Room', '$uibModalInstance', NewRoomModalCtrl]);
})();
