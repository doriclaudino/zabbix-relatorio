'use strict';

/**
 * @ngdoc service
 * @name zabbixRelatorioApp.group
 * @description
 * # group
 * Service in the zabbixRelatorioApp.
 */
angular.module('zabbixRelatorioApp')
  .service('GroupService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
        getGroupById : _getGroupById
    };
    return service;
    
    function _getGroupById(id){
        var group = {
            "groupid": id,
            "name":"CENSI - BLUMENAU"
        }
        return group;
    }
  });
