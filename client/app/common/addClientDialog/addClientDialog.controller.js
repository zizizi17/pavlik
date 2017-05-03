let _ClientService = new WeakMap(),
    _$scope = new WeakMap();

export class AddClientDialogController {
    constructor($scope, ClientService) {
        'ngInject';

        _$scope.set(this, $scope);
        _ClientService.set(this, ClientService);
    }

    onAdd () {
        _$scope.get(this).$emit('loading', true);
        let data = {
            name: this.name,
            phoneNumber: this.phoneNumber
        }
        _ClientService.get(this).create(data)
            .then((res) => {
                _$scope.get(this).$emit('loading', false);
                _$scope.get(this).closeThisDialog();
            })
            .catch((err) => console.error(err));
    }

    onClose () {
        _$scope.get(this).closeThisDialog();
    }
}
