(function() {
'use strict';

/**
 * @ngdoc function
 * @name zabbixRelatorioApp.controller:HostCtrl
 * @description
 * # HostCtrl
 * Controller of the zabbixRelatorioApp
 */
angular.module('zabbixRelatorioApp')
  .controller('HostCtrl',['host', function (host) {
    var vm = this;
    vm.host = host;
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
})();
