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

.run(['$rootScope', '$state', '$auth', function($rootScope, $state, $auth){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        var xtoState = toState;
        var x$rootScope = $rootScope;
        var x$state = $state;
        var x$auth = $auth;
        var xisAuthenticated = $auth.isAuthenticated()
        var toStateuthRequired = toState.authRequired;
        
      if (toState.authRequired && !$auth.isAuthenticated()) {
          event.preventDefault();
          return $state.go('login');
      }
    });
    
}])

.config(function($stateProvider,$urlRouterProvider, $authProvider) {
    $authProvider.tokenName = 'result';
    $authProvider.loginUrl = 'http://vigilante.nvl.inf.br/painel/zabbix/api_jsonrpc.php';
    $authProvider.httpInterceptor = false;
    $authProvider.storageType = 'localStorage';    
    
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
      authRequired: true,  
      templateUrl: 'views/main.html'
    })
    .state({
        name:'login',
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
    
	$urlRouterProvider.otherwise('/');   
    
});

    
})();
    