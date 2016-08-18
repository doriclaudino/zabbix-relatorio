'use strict';

/**
 * @ngdoc service
 * @name zabbixRelatorioApp.applications
 * @description
 * # applications
 * Service in the zabbixRelatorioApp.
 */
angular.module('zabbixRelatorioApp')
  .service('ApplicationsService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
        getApplications : _getApplications
    };
    return service;
    
    function _getApplications(){
        var applications =
        [{"applicationid":"3716","name":"SENIOR - Aplicativos"},{"applicationid":"3717","name":"SENIOR - Glassfish"},{"applicationid":"3718","name":"SENIOR - Middleware"},{"applicationid":"3719","name":"SENIOR - Servi\u00e7os"},{"applicationid":"3206","name":"SQL SERVER - Backup"},{"applicationid":"3143","name":"SQL SERVER - General Statistics"},{"applicationid":"3144","name":"SQL SERVER - Memory"},{"applicationid":"3145","name":"SQL SERVER - Physical Disk"},{"applicationid":"3146","name":"SQL SERVER - Processor"},{"applicationid":"3147","name":"SQL SERVER - Server"},{"applicationid":"3148","name":"SQL SERVER - Services"},{"applicationid":"3149","name":"SQL SERVER - Statistics"},{"applicationid":"3209","name":"SQL SERVER - Valida"},{"applicationid":"3120","name":"WINDOWS - CPU"},{"applicationid":"3121","name":"WINDOWS - Filesystems"},{"applicationid":"3122","name":"WINDOWS - General"},{"applicationid":"3123","name":"WINDOWS - Memory"},{"applicationid":"3124","name":"WINDOWS - Network interfaces"},{"applicationid":"3125","name":"WINDOWS - OS"},{"applicationid":"3126","name":"WINDOWS - Performance"},{"applicationid":"3127","name":"WINDOWS - Processes"},{"applicationid":"3128","name":"WINDOWS - Zabbix agent"}];   
        return applications;
    }    
  });
