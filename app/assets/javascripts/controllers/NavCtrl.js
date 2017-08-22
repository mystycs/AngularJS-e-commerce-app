//This is our nav controller and allows us to pass localstorage sessions to ngcart to save cart sessions
angular
  .module('ecommApp')
  .controller('NavCtrl', function($scope, Auth, $rootScope, $window, $state){
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;

    Auth.currentUser().then(function (user){
      $rootScope.user = user
    });

    $scope.$on('devise:new-registration', function (e, user){
      localStorage.setItem("authenticated", true);
      localStorage.setItem("userid", Auth._currentUser.id);
      localStorage.setItem("email_token", Auth._currentUser.email);
      localStorage.setItem("auth_token", Auth._currentUser.authentication_token);
      $rootScope.user = user
      $window.location.reload();
    });

    $scope.$on('devise:login', function (e, user){
      localStorage.setItem("authenticated", true);
      localStorage.setItem("userid", Auth._currentUser.id);
      localStorage.setItem("email_token", Auth._currentUser.email);
      localStorage.setItem("auth_token", Auth._currentUser.authentication_token);
      $rootScope.user = user
    });

    $scope.$on('devise:logout', function (e, user){
      localStorage.setItem("authenticated", false);
      localStorage.setItem("userid", 'cart');
      localStorage.removeItem("email_token");
      localStorage.removeItem("auth_token");
      $rootScope.user = undefined
      alert("You have been logged out.")
      $state.go('home');
    });


  })
