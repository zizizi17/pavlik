import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {editDialogComponent} from './editDialog.component';

let editDialogModule = angular.module('editDialog', [
  uiRouter
])

.component('editDialog', editDialogComponent)

.name;

export default editDialogModule;
