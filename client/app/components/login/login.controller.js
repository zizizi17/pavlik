let _$state = new WeakMap(),
    _$scope = new WeakMap(),
    _LoginService = new WeakMap();

export class LoginController {
  constructor($state, $scope, LoginService) {
      'ngInject';

      _$state.set(this, $state);
      _$scope.set(this, $scope);
      _LoginService.set(this, LoginService);

      this.name = '';
  }

  $onInit () {
      _$scope.get(this).$emit('loading', false);
  }

  onLogin () {
    //   _LoginService.get(this)
        // .login(this.name)
        // .then((res) => {
        _$state.get(this).go('numbers')
            // _$rootScope.get(this).user = res.data.name;
        // })
        // .catch((err) => console.error(err));
  }
}
