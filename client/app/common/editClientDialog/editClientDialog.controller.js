let _$scope = new WeakMap(),
    _ClientService = new WeakMap();

export class EditClientDialogController {
    constructor($scope, ClientService) {
        'ngInject';

        _$scope.set(this, $scope);
        _ClientService.set(this, ClientService);

        this.client = _$scope.get(this).ngDialogData.client;
    }

    onSave () {
        _$scope.get(this).$emit('loading', true);
        _ClientService.get(this).save(this.client)
          .then((res) => {
              _$scope.get(this).$emit('loading', false)
              _$scope.get(this).closeThisDialog();
          })
          .catch((err) => console.error(err));
    }

    onClose () {
        _$scope.get(this).closeThisDialog();
    }
}
