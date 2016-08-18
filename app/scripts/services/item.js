'use strict';

/**
 * @ngdoc service
 * @name zabbixRelatorioApp.item
 * @description
 * # item
 * Service in the zabbixRelatorioApp.
 */
angular.module('zabbixRelatorioApp')
  .service('ItemService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
        getItemById : _getItemById
    };
    return service;
    
    function _getItemById(id){
        var item = 
            {
            "itemid":id,
            "name":"Agent ping",
            "key_":"agent.ping",
            "value_type":"3",
            "hostid":"10483",
            "status":"0",
            "state":"0",
            "hosts":[
                {  
                    "hostid":"10483",
                    "name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"
                }]
            }
        return item;
    }
  });
