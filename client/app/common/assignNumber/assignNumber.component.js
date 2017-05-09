import {AssignNumberController} from './assignNumber.controller';

let assignNumberComponent = {
  restrict: 'E',
  bindings: {
      client: '<'
  },
  template: require('./assignNumber.html'),
  controller: AssignNumberController,
  controllerAs: 'vm'
};

export default assignNumberComponent;
