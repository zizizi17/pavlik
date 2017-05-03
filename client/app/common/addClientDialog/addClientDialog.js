import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {addClientDialogComponent} from './addClientDialog.component';

let addClientDialogModule = angular.module('addClientDialog', [
  uiRouter
])

.component('addClientDialog', addClientDialogComponent)

.name;

export default addClientDialogModule;
