//This Controller allows us to add products/listusers and upload the products JSON to rails backend
angular
  .module('ecommApp')
  .controller('AdminCtrl', function($scope, $rootScope, Auth, $http, AddProductsService, UserLookupService) {

    $scope.addProduct = function() {
      AddProductsService
        .addProduct($scope.product)
        .then(function(response) {
          alert(response)
        });
    }

    $scope.listUsers = function() {
      UserLookupService
        .UsersLookup()
        .then(function(response) {
          $scope.users = response
        });
    }

    $scope.uploadJSON = function() {
      var f = document.getElementById('file').files[0],
      r = new FileReader();
        r.onloadend = function(e) {
          var data = e.target.result;
          AddProductsService
            .initializeProducts(data)
            .then(function(response) {
              alert(response)
            });
        }
        r.readAsBinaryString(f)
      }
  })
