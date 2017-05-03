import {LoginController} from './login.controller';

export const loginComponent = {
  template: require('./login.html'),
  controller: LoginController,
  controllerAs: 'vm'
};
