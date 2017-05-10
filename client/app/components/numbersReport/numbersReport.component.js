import template from './numbersReport.html';
import controller from './numbersReport.controller';

let numbersReportComponent = {
  restrict: 'E',
  bindings: {
      data: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default numbersReportComponent;
