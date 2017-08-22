//This is our Service to post products and our json to rails backend to intialize products
angular
  .module('ecommApp')
  .service('AddProductsService', function($http) {
    this.addProduct = function(data) {

      productJson = {
        "products": [data]
      }

      return $http({
        method: 'POST',
        url: '/products',
        data: productJson,
        headers: {
          'Content-Type': 'application/json',
          'X-USER-EMAIL' : localStorage.getItem("email_token"),
          'X-USER-TOKEN' : localStorage.getItem("auth_token")
        }
      }).then(function successCallback(response) {
        return JSON.stringify(response.data.message)
      }, function errorCallback(response) {
        return JSON.stringify(response.data.message)
      });

    }


    this.initializeProducts = function(data) {

      return $http({
        method: 'POST',
        url: '/products',
        data: data,
        headers: {
          'Content-Type': 'application/json',
          'X-USER-EMAIL' : localStorage.getItem("email_token"),
          'X-USER-TOKEN' : localStorage.getItem("auth_token")
        }
      }).then(function successCallback(response) {
        return JSON.stringify(response.data.message)
      }, function errorCallback(response) {
        return JSON.stringify(response.data.message)
      });

    }

  });
