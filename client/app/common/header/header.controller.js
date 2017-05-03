let _$state = new WeakMap(),
    _LoginService = new WeakMap(),
    _$rootScope = new WeakMap();

export class HeaderController {
  constructor($state, LoginService, $rootScope) {
      'ngInject'

      _$state.set(this, $state);
      _LoginService.set(this, LoginService);
      _$rootScope.set(this, $rootScope);

      this.user = _$rootScope.get(this).user;
      this.$state = $state;
  }

  $onInit () {
  }

  onLogout () {
      _LoginService.get(this).logout()
        .then((res) => {
            _$rootScope.get(this).user = null;
            _$state.get(this).go('login');
        });
  }
}
