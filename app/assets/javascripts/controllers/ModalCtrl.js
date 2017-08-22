//This is our modal controller
angular
  .module('ecommApp')
  .controller('ModalCtrl', function($scope, close, product) {

    $scope.product = product;

    $scope.close = function(result) {
      close(result, 500);
    };

  });
