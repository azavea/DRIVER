(function () {
    'use strict';

    /* ngInject */
    function DefaultRoutingConfig($locationProvider, $urlRouterProvider, Config) {
        $locationProvider.html5Mode(Config.html5Mode.enabled);
        $locationProvider.hashPrefix(Config.html5Mode.prefix);

        $urlRouterProvider.otherwise('/');
    }

    /* ngInject */
    function LogConfig($logProvider, Config) {
        $logProvider.debugEnabled(Config.debug);
    }

    function LeafletDefaultsConfig(LeafletDefaultsProvider) {
        LeafletDefaultsProvider.setDefaults({
            center: [12.375, 121.5], // geographic center of Philippines
            zoom: 5,
            crs: L.CRS.EPSG3857
        });
    }

    /**
     * @ngdoc overview
     * @name driver
     * @description
     * # driver: Data for Road Incident Visualization, Evaluation, and Reporting
     *
     * Main module of the application.
     */
    angular.module('driver', [
        'Leaflet',
        'driver.config',
        'driver.navbar',
        'driver.filterbar',
        'driver.toddow',
        'driver.stepwise',
        'driver.views.account',
        'driver.views.dashboard',
        'driver.views.home',
        'driver.views.map',
        'driver.views.record',
        'ui.router'
    ])
    .config(DefaultRoutingConfig)
    .config(LogConfig)
    .config(LeafletDefaultsConfig);
})();
