import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {editClientDialogComponent} from './editClientDialog.component';

let editClientDialogModule = angular.module('editClientDialog', [
  uiRouter
])

.component('editClientDialog', editClientDialogComponent)

.name;

export default editClientDialogModule;
