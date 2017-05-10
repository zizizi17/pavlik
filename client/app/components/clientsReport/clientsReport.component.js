import template from './clientsReport.html';
import controller from './clientsReport.controller';
import './clientsReport.scss';

let clientsReportComponent = {
  restrict: 'E',
  bindings: {
      data: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default clientsReportComponent;
