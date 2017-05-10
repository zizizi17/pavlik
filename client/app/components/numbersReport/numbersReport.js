import angular from 'angular';
import uiRouter from 'angular-ui-router';
import numbersReportComponent from './numbersReport.component';

let numbersReportModule = angular.module('numbersReport', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('number-report', {
      url: '/number-report',
      component: 'numbersReport',
      bindings: {
          data: 'data',
      },
      resolve: {
          data: function (NumbersService) {
              return NumbersService.report();
          },
      }
    });
})

.component('numbersReport', numbersReportComponent)

.name;

export default numbersReportModule;
