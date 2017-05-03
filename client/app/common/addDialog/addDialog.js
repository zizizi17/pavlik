import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {addDialogComponent} from './addDialog.component';

let addDialogModule = angular.module('addDialog', [
  uiRouter
])

.component('addDialog', addDialogComponent)

.name;

export default addDialogModule;
