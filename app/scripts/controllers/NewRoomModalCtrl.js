(function() {
	function NewRoomModalCtrl(Room) {
		
		this.openModal = function () {
			this.modalInstance = $uibModal.open({
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
			console.log("");
		};
	}
	
	angular
	   .module('blocChat')
	   .controller('NewRoomModalCtrl', ['Room', NewRoomModalCtrl]);
})();

//
//$ctrl = this;
//
//$ctrl.open = function (parentSelector) {
//    var parentElem = parentSelector ? 
//      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
//    var modalInstance = $uibModal.open({
//      animation: true,
//      ariaLabelledBy: 'modal-title',
//      ariaDescribedBy: 'modal-body',
//      templateUrl: 'myModalContent.html',
//      controller: 'ModalInstanceCtrl',
//      controllerAs: '$ctrl',
//      size: sm,
//      appendTo: parentElem,
//      resolve: {
//        items: function () {
//          return $ctrl.items;
//        }
//      }
//    });
//
//    modalInstance.result.then(function (selectedItem) {
//      $ctrl.selected = selectedItem;
//    }, function () {
//      $log.info('Modal dismissed at: ' + new Date());
//    });
//  };
//
//  $ctrl.openComponentModal = function () {
//    var modalInstance = $uibModal.open({
//      animation: $ctrl.animationsEnabled,
//      component: 'modalComponent',
//      resolve: {
//        items: function () {
//          return $ctrl.items;
//        }
//      }
//    });
//
//    modalInstance.result.then(function (selectedItem) {
//      $ctrl.selected = selectedItem;
//    }, function () {
//      $log.info('modal-component dismissed at: ' + new Date());
//    });
//  };


















/*angular.module('blocChat').controller('ModalCtrl', function (ModalInstanceCtrl, $uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});


// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('blocChat').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});*/











/*(function() {
	function ModalCtrl(Room, $uibModal, $log, $document) {
		$ctrl = this;
		$ctrl.input = null;
		$ctrl.animationsEnabled = true;

		$ctrl.open = function (size, parentSelector) {
			var parentElem = parentSelector ? 
				angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    
			var modalInstance = $uibModal.open({
				animation: $ctrl.animationsEnabled,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'myModalContent.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: '$ctrl',
				size: size,
				appendTo: parentElem,
				resolve: {
					items: function () {
						return $ctrl.roomName;
					}
				}
			});
			modalInstance.result.then(function (roomName) {
				$ctrl.roomName = roomName;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			}); 
		};

		$ctrl.ok = function () {
			console.log($("#new-room-name").value);
			if($("#new-room-name").value.length > 0) {
				$ctrl.input = $("#new-room-name").value;
			}
			$uibModalInstance.close();
		};
		$ctrl.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
		
		$ctrl.openComponentModal = function () {
			var modalInstance = $uibModal.open({
				animation: $ctrl.animationsEnabled,
				component: 'modalComponent',
				resolve: {
					items: function () {
						return $ctrl.roomName;
					}
				}
			});

			modalInstance.result.then(function (roomName) {
				$ctrl.roomName = roomName;
			}, function () {
				$log.info('modal-component dismissed at: ' + new Date());
			});
		};

		$ctrl.toggleAnimation = function () {
			$ctrl.animationsEnabled = !$ctrl.animationsEnabled;
		};
	}
	angular
		.module('blocChat')
		.controller('ModalCtrl', ModalCtrl);
})();
*/










/*
angular.module('blocChat').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.input = "";



// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance, newRoom) {
  var $ctrl = this;


// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('ui.bootstrap.demo').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});


*/




/*angular.module('blocChat').controller('ModalInstanceCtrl', function ModalInstanceCtrl($uibModal, $log, $document) {	
	$ctrl = this;
	$ctrl.animationsEnabled = true;
	$ctrl.open = function (size, parentSelector) {
		var parentElem = parentSelector ? 
			angular.element($document[0].querySelector('.new-room-modal ' + parentSelector)) : undefined;
		var modalInstance = $uibModal.open({
			animation: $ctrl.animationsEnabled,
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'myModalContent.html',
			controller: 'ModalInstanceCtrl',
			controllerAs: '$ctrl',
			size: size,
			appendTo: parentElem,
			resolve: {
				input: function () {
					return $ctrl.input;
				}
			}
		});
		modalInstance.result.then(function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
	
//	$ctrl.openComponentModal = function () {
//		var modalInstance = $uibModal.open({
//			animation: $ctrl.animationsEnabled,
//			component: 'modalComponent',
//			resolve: {
//				input: function () {
//					return $ctrl.input;
//				}
//			}
//		});

		modalInstance.result.then(function (selectedItem) {
			$ctrl.selected = selectedItem;
		}, function () {
			$log.info('modal-component dismissed at: ' + new Date());
		});
	};
	$ctrl.toggleAnimation = function () {
		$ctrl.animationsEnabled = !$ctrl.animationsEnabled;
	};	
});


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('blocChat').controller('ModalInstanceCtrl', function ($uibModalInstance, input) {
	$ctrl.input = input;
	$ctrl.selected = {
		item: $ctrl.input[0]
	};

	$ctrl.ok = function () {
		$uibModalInstance.close($ctrl.selected.item);
	};

	$ctrl.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('blocChat').component('modalComponent', {
	templateUrl: 'myModalContent.html',
	bindings: {
		resolve: '<',
		close: '&',
		dismiss: '&'
	},
	controller: function () {
		$ctrl.$onInit = function () {
			$ctrl.input = $ctrl.resolve.input;
		};

		$ctrl.ok = function () {
			$ctrl.close({$value: $ctrl.input});
		};

		$ctrl.cancel = function () {
			$ctrl.dismiss({$value: 'cancel'});
		};
	}	

 }); */