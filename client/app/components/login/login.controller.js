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
      _LoginService.get(this)
        .login({
            login: this.login,
            password: this.password
        })
        .then((res) => {
            if (res.data.role == 'none') {
                this.error = 'There is no such role in the system. Try again or contact your local Administrator!';
                return false;
            }
            window.localStorage.setItem('role', res.data.role);
            _$state.get(this).go('numbers')
        })
        .catch((err) => console.error(err));
  }
}
