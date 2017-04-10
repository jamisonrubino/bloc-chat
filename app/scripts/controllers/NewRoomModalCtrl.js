(function() {
	function NewRoomModalCtrl(Room) {
		this.modalValue = null;
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