'use strict';

/**
 * @ngdoc service
 * @name zabbixRelatorioApp.hosts
 * @description
 * # hosts
 * Service in the zabbixRelatorioApp.
 */
angular.module('zabbixRelatorioApp')
  .service('HostsService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
        getHosts : _getHosts
    };
    return service;
    
    function _getHosts(){
        var hosts =
        [{"hostid":"10472","name":"NVLPROXY - QUALIREDE","host":"192.168.1.12"},{"hostid":"10498","name":"RDS01 - RDS - MYSQL","host":"RDS01"},{"hostid":"10499","name":"RDS02 - RDS - MYSQL","host":"RDS02"},{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR","host":"192.168.1.11"}];
        return hosts;
    }
  });
