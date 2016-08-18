(function() {
'use strict';

/**
 * @ngdoc overview
 * @name zabbixRelatorioApp
 * @description
 * # zabbixRelatorioApp
 *
 * Main module of the application.
 */
angular
  .module('zabbixRelatorioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
	'satellizer'
  ])

.run(['$rootScope', '$state', function($rootScope, $state){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        var xx = toState;
        var y = $rootScope;
        var x = $state;
      if (toState.authRequired) {
        return $state.go('login');
      }
    });
    
}])

.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state({name: 'groups',
            authRequired: true,
            url: '/groups',
            template: '<h3>hello world! groups</h3>'})
    .state({name: 'hosts',
            authRequired: true,
            url: '/hosts',
            template: '<h3>hello world! hosts</h3>'})
    .state({name: 'applications',
            authRequired: true,
            url: '/applications',
            template: '<h3>hello world! applications</h3>'})
    .state({name: 'items',
            authRequired: true,
            url: '/items',
            template: '<h3>hello world! items</h3>'})
	.state('/', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    
	$urlRouterProvider.otherwise('/');   
    
});

    
})();
    