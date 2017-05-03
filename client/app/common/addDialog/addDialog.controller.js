let _$scope = new WeakMap(),
    _NumbersService = new WeakMap();

export class AddDialogController {
    constructor($scope, NumbersService) {
        'ngInject';
        _$scope.set(this, $scope);
        _NumbersService.set(this, NumbersService);

        this.types = _$scope.get(this).ngDialogData.types.data;
    }

    onClose () {
        _$scope.get(this).closeThisDialog();
    }

    onAdd () {
        _$scope.get(this).$emit('loading', true);
        let data = {
            name: this.name,
            price: this.price,
            floor: this.floor,
            maxResidents: this.maxResidents,
            type: this.type
        }
        _NumbersService.get(this).create(data)
            .then((res) => {
                _$scope.get(this).$emit('loading', false);
                _$scope.get(this).closeThisDialog();
            })
            .catch((err) => console.error(err));
    }
}
