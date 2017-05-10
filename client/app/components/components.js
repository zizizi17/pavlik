import angular from 'angular';
import Numbers from './numbers/numbers';
import Login from './login/login';
import Clients from './clients/clients';
import NumberTypes from './numberTypes/numberTypes';
import Parameters from './parameters/parameters';
import Report from './clientsReport/clientsReport';
import NumberReport from './numbersReport/numbersReport';

let componentModule = angular.module('app.components', [
  Numbers,
  Login,
  Clients,
  NumberTypes,
  Parameters,
  Report,
  NumberReport
])

.name;

export default componentModule;
