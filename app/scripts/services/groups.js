'use strict';

/**
 * @ngdoc service
 * @name zabbixRelatorioApp.groups
 * @description
 * # groups
 * Service in the zabbixRelatorioApp.
 */
angular.module('zabbixRelatorioApp')
  .service('GroupsService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
        getGroups : _getGroups
    };
    return service;
    
    function _getGroups(){
        var groups =
        [{"groupid":"70","name":"CENSI - BLUMENAU"},{"groupid":"92","name":"CIFSJ - FLORIANOPOLIS"},{"groupid":"36","name":"D&A COMERCIO EXTERIOR - BLUMENAU"},{"groupid":"29","name":"GRUPO MC - BLUMENAU"},{"groupid":"94","name":"HIDROLIGHT - GAROPABA"},{"groupid":"87","name":"HUVISPAN - BLUMENAU"},{"groupid":"71","name":"KS METAIS - JOINVILLE"},{"groupid":"68","name":"LABORATORIO CATARINENSE - JOINVILLE"},{"groupid":"34","name":"LIVRARIAS CURITIBA - CURITIBA"},{"groupid":"66","name":"MACROMAQ - FLORIANOPOLIS"},{"groupid":"84","name":"NVL - BLUMENAU"},{"groupid":"46","name":"PRODAMA - MARTINELLO"},{"groupid":"45","name":"PRODAMA - PLANTBEM"},{"groupid":"72","name":"QUALIREDE - FLORIANÓPOLIS"},{"groupid":"86","name":"SUPERBELEM - SÃO BENTO DO SUL"},{"groupid":"77","name":"TAIPA - JOINVILLE"},{"groupid":"4","name":"Zabbix servers"}];
        return groups;
    }
  });
