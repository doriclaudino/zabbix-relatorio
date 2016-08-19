(function() {
'use strict';

/**
 * @ngdoc service
 * @name zabbixRelatorioApp.login
 * @description
 * # login
 * Service in the zabbixRelatorioApp.
 */
angular.module('zabbixRelatorioApp')
  .service('LoginService', ['$auth',function ($auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function;
      
    var service = {
        authenticate : _authenticate,
        logout : _logout,
        isAuthenticated : _isAuthenticated
    };
    return service;
    
    function _authenticate(user, password){
        var xauth = $auth;
        $auth.login({
            "jsonrpc": "2.0",
            "method": "user.login",
            "params": {
                "user": user,
                "password": password
            },
            "id": 1,
            "auth": null
        }).then(function (response) {
            return response;
        }).catch(function (response) {
            return response;
        });
    }
      
    function _logout(){
        return $auth.logout();
    }
      
    function _isAuthenticated(){
        return $auth.isAuthenticated();
    }      
  }]);
})();
