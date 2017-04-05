(function() {

  dialogService.$inject = ["$uibModal"];
  app.factory('dialogService', dialogService);

  function dialogService($modal) {
    // Generic wrapper around modal opening
    function openDialog(template, controller, size) {
      var modalResult = $modal.open({
        templateUrl: template,
        controller: controller,
        size: size
      });
      return modalResult;
    }

    function openDialogWithModel(templateUrl, controller, model, windowClass, isInlineHtml, size) {
      size = size ? size : 'sm';

      var modalResult = null;

      if (isInlineHtml) {
        modalResult = $modal.open({
                        controller: controller,
                        template: templateUrl,
                        resolve: {
                          dialogModel: function() {
                            return model;
                          }
                        },
                        windowClass: windowClass,
                        size: size
                      });
      } else {
        modalResult = $modal.open({
                        controller: controller,
                        templateUrl: templateUrl,
                        resolve: {
                          dialogModel: function() {
                            return model;
                          }
                        },
                        windowClass: windowClass,
                        size: size
                      });
      }
      
      return modalResult;
    };

    return {
      openDialog: openDialog,
      openDialogWithModel: openDialogWithModel
    };
  };

  app.controller("mainController", mainController);
  mainController.$inject = ["$log", "dialogService"];

  function mainController($log, ds) {
    var vm = this;
    vm.modalFormModel = {
      firstname: 'original',
      lastname: 'original'
    };

    vm.openSimpleModal = function() {
      ds.openDialog("modalSimple.html", ["$scope", "$modalInstance", function($scope, $modalInstance) {
        $scope.ok = function() {
            $modalInstance.close();
            $log.log("User clicked ok.");
          },
          $scope.cancel = function() {
            $modalInstance.close();
            $log.log("User clicked cancel.");
          };
      }]);
    }

    vm.openFormModal = function() {
      ds.openDialogWithModel('modalForm.html', 'modalFormCtrl as mf', vm.modalFormModel, '', false, 'lg');
    }
  };

  app.controller("modalFormController", modalFormController);
  modalFormController.$inject = ["$modalInstance"];

  function modalFormController($modalInstance, dialogModel) {
    var vm = this;
    // Clone so we can cancel our edit
    vm.dialogModel = ng.copy(dialogModel);
    vm.ok = function() {
        for (var p in vm.dialogModel) {
          if (dialogModel.hasOwnProperty(p)) {
            dialogModel[p] = vm.dialogModel[p];
          }
        }
        $modalInstance.close();
        $log.log("User clicked submit - saving changes");
      },
      vm.cancel = function() {
        $modalInstance.close();
        $log.log("User clicked cancel.");
      };
  };

  app.config(['$modalProvider', '$locationProvider',
    function($modalProvider, $locationProvider) {
      $modalProvider.options = {
        dialogFade: true,
        backdrop: 'static',
        keyboard: false
      };
      $locationProvider.html5Mode(false);
    }
  ]);

  app.run(function() {});
})(angular)



	   .module('blocChat')
	   .controller('LandingCtrl', ['Room', LandingCtrl]);