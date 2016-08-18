'use strict';

/**
 * @ngdoc service
 * @name zabbixRelatorioApp.items
 * @description
 * # items
 * Service in the zabbixRelatorioApp.
 */
angular.module('zabbixRelatorioApp')
  .service('ItemsService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var service = {
        getItems : _getItems
    };
    return service;
    
    function _getItems(){
        var items =
        [{"itemid":"50720","name":"Agent ping","key_":"agent.ping","value_type":"3","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50722","name":"Average disk read queue length","key_":"perf_counter[\\234(_Total)\\1402]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50723","name":"Average disk write queue length","key_":"perf_counter[\\234(_Total)\\1404]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"53912","name":"CPU Utilization Idle","key_":"perf_counter[\\Processador(_Total)\\% tempo inativo]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"53916","name":"CPU Utilization System","key_":"perf_counter[\\Processador(_Total)\\% tempo privilegiado]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"53898","name":"CPU Utilization Total","key_":"perf_counter[\\Processador(_Total)\\% de tempo do processador]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"53914","name":"CPU Utilization User","key_":"perf_counter[\\Processador(_Total)\\% tempo de utilizador]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50724","name":"File read bytes per second","key_":"perf_counter[\\2\\16]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50725","name":"File write bytes per second","key_":"perf_counter[\\2\\18]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50874","name":"Free disk space on $1","key_":"vfs.fs.size[C:,free]","value_type":"3","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50875","name":"Free disk space on $1","key_":"vfs.fs.size[E:,free]","value_type":"3","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50876","name":"Free disk space on $1 (percentage)","key_":"vfs.fs.size[C:,pfree]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50877","name":"Free disk space on $1 (percentage)","key_":"vfs.fs.size[E:,pfree]","value_type":"0","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50735","name":"Free memory","key_":"vm.memory.size[free]","value_type":"3","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50719","name":"Host name of zabbix_agentd running","key_":"agent.hostname","value_type":"1","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50826","name":"Incoming network traffic on $1","key_":"net.if.in[Miniport WAN (IP)]","value_type":"3","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50827","name":"Incoming network traffic on $1","key_":"net.if.in[Miniporta WAN (IPv6)]","value_type":"3","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]},{"itemid":"50828","name":"Incoming network traffic on $1","key_":"net.if.in[Miniport WAN (monitor de rede)]","value_type":"3","hostid":"10483","status":"0","state":"0","hosts":[{"hostid":"10483","name":"SENIOR - WINDOWS - SQL SERVER - SENIOR"}]}];        
        return items;
    }
  });
