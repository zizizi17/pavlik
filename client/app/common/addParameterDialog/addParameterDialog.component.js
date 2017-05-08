import {AddParameterDialogController} from './addParameterDialog.controller';

export const addParameterDialogComponent = {
  bindings: {
      groups: "<"
  },
  template: require('./addParameterDialog.html'),
  controller: AddParameterDialogController,
  controllerAs: 'vm'
};
