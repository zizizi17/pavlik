let _$scope = new WeakMap(),
    _NumbersService = new WeakMap();

export class EditDialogController {
    constructor($scope, NumbersService) {
        'ngInject';

        _$scope.set(this, $scope);
        _NumbersService.set(this, NumbersService);

        this.number = _$scope.get(this).ngDialogData.number;
        this.types = _$scope.get(this).ngDialogData.types.data;
    }

    onClose () {
        _$scope.get(this).closeThisDialog();
    }

    onSave () {
        _$scope.get(this).$emit('loading', true);
        _NumbersService.get(this).update(this.number)
            .then((res) => {
                _$scope.get(this).$emit('loading', false);
                _$scope.get(this).closeThisDialog();
            })
            .catch((err) => console.error(err));
    }
}
