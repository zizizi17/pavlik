import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {numberTypesComponent} from './numberTypes.component';

let numberTypesModule = angular.module('numberTypes', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

    $stateProvider
        .state('number-types', {
            url: '/types',
            component: 'numberTypes',
            bindings: {
                list: 'list'
            },
            resolve: {
                list: function(NumberTypesService) {
                    return NumberTypesService.getAll();
                }
            }
        })
})

.component('numberTypes', numberTypesComponent)

.name;

export default numberTypesModule;
