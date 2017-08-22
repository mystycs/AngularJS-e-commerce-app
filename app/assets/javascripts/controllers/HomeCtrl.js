// This is our home controller and loads all products via grid and allows us to display modals of product data
angular
  .module('ecommApp')
  .controller('HomeCtrl', function($scope, $rootScope, Auth, $http, ProductLookupService, ModalService, ngCart) {

    ProductLookupService
      .ProductLookup()
      .then(function(response) {
        $scope.products = response
      });

      $scope.show = function(data) {
        ModalService.showModal({
          templateUrl: 'modal.html',
          controller: "ModalCtrl",
          inputs: {
              product: data,
          }
        }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
            //
          });
        });
      };

  })
