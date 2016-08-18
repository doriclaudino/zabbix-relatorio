'use strict';

/**
 * @ngdoc service
 * @name zabbixRelatorioApp.application
 * @description
 * # application
 * Service in the zabbixRelatorioApp.
 */
angular.module('zabbixRelatorioApp')
  .service('ApplicationService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
        getApplicationById : _getApplicationById
    };
    return service;
    
    function _getApplicationById(id){
        var application =
            {
                "applicationid":"3716",
                "name":"SENIOR - Aplicativos"
            }
        return application;
    }    
  });
