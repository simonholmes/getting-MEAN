(function () {

  angular
    .module('loc8rApp')
    .controller('navigationCtrl', navigationCtrl);

  navigationCtrl.$inject = ['$location', 'authentication'];
  function navigationCtrl($location, authentication) {
    var vm = this;

    vm.currentPath = $location.path();

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    vm.logout = function() {
      authentication.logout();
      // When a user is logging out at home page, it won't refresh logon status right away. 
      // So, we need to update it manually 
      // or simply location to any un-routed page so that it will be back to homepage with update logon status. 
      $location.path('/logout');
    };

  }
})();
