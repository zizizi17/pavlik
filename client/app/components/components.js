import angular from 'angular';
import Numbers from './numbers/numbers';
import Login from './login/login';
import Clients from './clients/clients';
import NumberTypes from './numberTypes/numberTypes';

let componentModule = angular.module('app.components', [
  Numbers,
  Login,
  Clients,
  NumberTypes
])

.name;

export default componentModule;
