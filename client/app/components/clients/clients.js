import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {clientsComponent} from './clients.component';

let clientsModule = angular.module('clients', [
    uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

    $stateProvider
        .state('clients', {
            url: '/clients',
            component: 'clients',
            bindings: {
                list: 'list'
            },
            resolve: {
                list: function(ClientService) {
                    return ClientService.getAll();
                }
            }
        })
        .state('client', {
            url: '/client/:id',
            component: 'client'
        })
})

.component('clients', clientsComponent)

.name;

export default clientsModule;
