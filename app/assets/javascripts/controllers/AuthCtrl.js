//This controller allows us to call Devise/Auth module to login and register to devise backend
angular
  .module('ecommApp')
  .controller('AuthCtrl', function($scope, $rootScope, Auth, $state){
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}

    $scope.register = function(){
      Auth.register($scope.user, config).then(function(user){
        $rootScope.user = user
        alert("Thanks for signing up, " + user.username);
        $state.go('home');
      }, function(errorResponse){
        alert(JSON.stringify(errorResponse.data.errors))
       });
    };

    $scope.login = function(){
      Auth.login($scope.user, config).then(function(user){
        $rootScope.user = user
        alert("You are now signed in, " + user.username);
        $state.go('home');
      }, function(errorResponse){
        alert(JSON.stringify(errorResponse.data.error))
      });
    }
  })
