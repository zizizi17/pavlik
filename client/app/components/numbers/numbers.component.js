import {NumbersController} from './numbers.controller';

export const numbersComponent = {
  template: require('./numbers.html'),
  controller: NumbersController,
  controllerAs: 'vm',
  bindings: {
      list: '<',
      parameterss: '<'
  }
};
