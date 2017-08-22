//This controller feeds our admin panel list of users
angular
  .module('ecommApp')
  .service('UserLookupService', function($http) {
    this.UsersLookup = function() {
      var productLookup = "/users"

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
