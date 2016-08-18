(function() {
'use strict';

/**
 * @ngdoc service
 * @name zabbixRelatorioApp.HostService
 * @description
 * # HostService
 * Service in the zabbixRelatorioApp.
 */
angular.module('zabbixRelatorioApp')
  .service('HostService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
        getHostById : _getHostById
    };
    return service;
    
    function _getHostById(id){
        var host =
            {
                "hostid": id,
                "name":"NVLPROXY - QUALIREDE",
                "host":"192.168.1.12"
            }
        return host;
    }    
  });
})();