import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {numbersComponent} from './numbers.component';

let numbersModule = angular.module('numbers', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('numbers', {
      url: '/numbers',
      component: 'numbers',
      bindings: {
          list: 'list',
          parameterss: 'parameterss'
      },
      resolve: {
          list: function (NumbersService) {
              return NumbersService.getAll();
          },
          parameterss: function(NumbersService) {
              return NumbersService.getParameters();
          }
      }
    });
})

.component('numbers', numbersComponent)

.name;

export default numbersModule;
