(function() {
	function Message($firebaseArray) {
		var ref = firebase.database().ref().child("messages");
	  	
	  
	 
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();