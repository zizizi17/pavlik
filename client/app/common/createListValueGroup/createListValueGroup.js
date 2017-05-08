import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {createListValueGroupComponent} from './createListValueGroup.component';

let createListValueGroupModule = angular.module('createListValueGroup', [
  uiRouter
])

.component('createListValueGroup', createListValueGroupComponent)

.name;

export default createListValueGroupModule;
