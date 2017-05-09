import angular from 'angular';
import Header from './header/header';
import AddDialog from './addDialog/addDialog';
import EditDialog from './editDialog/editDialog';
import EditClient from './editClientDialog/editClientDialog';
import AddType from './addType/addType';
import AddParameterDialog from './addParameterDialog/addParameterDialog';
import CreateListValueGroup from './createListValueGroup/createListValueGroup';
import AssignNumber from './assignNumber/assignNumber';

let commonModule = angular.module('app.common', [
  Header,
  AddDialog,
  EditDialog,
  EditClient,
  AddType,
  AddParameterDialog,
  CreateListValueGroup,
  AssignNumber
])

.name;

export default commonModule;
