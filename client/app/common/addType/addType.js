import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addTypeComponent from './addType.component';

let addTypeModule = angular.module('addType', [
  uiRouter
])

.component('addType', addTypeComponent)

.name;

export default addTypeModule;
