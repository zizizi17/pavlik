import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {addParameterDialogComponent} from './addParameterDialog.component';

let addParameterDialogModule = angular.module('addParameterDialog', [
  uiRouter
])

.component('addParameterDialog', addParameterDialogComponent)

.name;

export default addParameterDialogModule;
