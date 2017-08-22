angular
  .module('ecommApp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function( user){
            if (user.isadmin) {
              $state.go('admin');
            }
            else {
              $state.go('home');
            }
          })
          .catch(function() {
            $state.go('home');
          });
        }
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'HomeCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function( user){
              $state.go('cart');
          })
          .catch(function() {
            $state.go('home');
          });
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl',
        onEnter: function(Auth, $state){
          Auth.currentUser().then(function(){
            $state.go('home')
          })
        }
      })
    $urlRouterProvider.otherwise('/home')
  })
