import template from './app.html';
import './app.scss';

let appComponent = {
  template,
  restrict: 'E',
  controller: function ($rootScope) {
      'ngInject';
      const vm = this;
      vm.isLoading = true;
      $rootScope.$on('loading', function (oldVal, newVal) {
          vm.isLoading = newVal;
      });
  },
  controllerAs: 'vm'
};

export default appComponent;
