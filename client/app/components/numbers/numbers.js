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
          list: 'list'
      },
      resolve: {
          list: function (NumbersService) {
              return NumbersService.getAll();
          }
      }
    });
})

.component('numbers', numbersComponent)

.name;

export default numbersModule;
