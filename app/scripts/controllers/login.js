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
  .controller('LoginCtrl', ['$auth', '$state', function ($auth, $state) {
    var vm = this;
      
    vm.authenticate = authenticate;
    vm.isAuthenticated = isAuthenticated;
    vm.logout = logout;

	function isAuthenticated() {
      return $auth.isAuthenticated();
    }

    function logout() {
      return $auth.logout();      
    }
      
    function authenticate() {
        vm.lastError = '';
        var x$auth = $auth;
        $auth.login({
            "jsonrpc": "2.0",
            "method": "user.login",
            "params": {
                "user": vm.user,
                "password": vm.password
            },
            "id": 1,
            "auth": null
        }).then(function (response) {            
            if(response.data.error)
                vm.lastError = response.data.error.data;
            $state.go('/');
        }).catch(function (response) {
            //console.log(response);
            //response.error.data mensagem de erro
            vm.lastError = response;
            $state.go('/');
        });
      };
	
      /*
      {
            "jsonrpc": "2.0",
            "method": "user.login",
            "params": {
                "user": "Admin",
                "password": "builder2014#"
            },
            "id": 1,
            "auth": null
        }
      */
      
        
        /*
    function authenticate() {
        var x$auth = $auth;
        $auth.login({
            "jsonrpc": "2.0",
            "method": "user.login",
            "params": {
                "user": vm.user,
                "password": vm.password
            },
            "id": 1,
            "auth": null
        }).then(function (response) {
          console.log(response);
            $auth.setToken(response.data.result);
            $state.go('/');
        }).catch(function (response) {
            //response.error.data mensagem de erro
          $state.go('login');
        });
      };  */
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
})();