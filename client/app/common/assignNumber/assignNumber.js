import angular from 'angular';
import uiRouter from 'angular-ui-router';
import assignNumberComponent from './assignNumber.component';

let assignNumberModule = angular.module('assignNumber', [
  uiRouter
])

.component('assignNumber', assignNumberComponent)

.name;

export default assignNumberModule;
