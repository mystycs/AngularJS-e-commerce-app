//This controller allows us to get all products
angular
  .module('ecommApp')
  .service('ProductLookupService', function($http) {
    this.ProductLookup = function() {
      var productLookup = "/products"

      return $http({
        method: 'GET',
        url: productLookup,
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
          'X-USER-EMAIL' : localStorage.getItem("email_token"),
          'X-USER-TOKEN' : localStorage.getItem("auth_token")
        }

      }).then(function successCallback(response) {
        return response.data
      }, function errorCallback(response) {
        alert(response.data.message)
      });
    }
  });
