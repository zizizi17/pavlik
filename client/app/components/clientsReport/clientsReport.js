import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientsReportComponent from './clientsReport.component';

let clientsReportModule = angular.module('clientsReport', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('report', {
      url: '/report',
      component: 'clientsReport',
      bindings: {
          data: 'data',
      },
      resolve: {
          data: function (ClientService) {
              return ClientService.report();
          },
      }
    });
})

.component('clientsReport', clientsReportComponent)

.name;

export default clientsReportModule;
