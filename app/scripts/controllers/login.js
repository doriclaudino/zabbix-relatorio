(function() {
'use strict';

/**
 * @ngdoc function
 * @name zabbixRelatorioApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the zabbixRelatorioApp
 */
angular.module('zabbixRelatorioApp')
  .controller('LoginCtrl', ['$auth', '$state', 'LoginService', function ($auth, $state, LoginService) {
    var vm = this;
      
    vm.authenticate = authenticate;
    vm.isAuthenticated = isAuthenticated;
    vm.logout = logout;

	function isAuthenticated() {
      return LoginService.isAuthenticated();
    }

    function logout() {
      return LoginService.logout();      
    }
      
    function authenticate() {
        LoginService.authenticate(vm.user, vm.password);
    }
      
  }]);
})();