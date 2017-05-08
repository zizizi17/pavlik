import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {parametersComponent} from './parameters.component';

let parametersModule = angular.module('parameters', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('parameters', {
      url: '/parameters',
      component: 'parameters',
      bindings: {
          list: 'list'
      },
      resolve: {
          list: function (NumbersService) {
              return NumbersService.getParameters();
          }
      }
    });
})

.component('parameters', parametersComponent)

.name;

export default parametersModule;
