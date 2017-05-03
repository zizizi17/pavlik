let _NumberTypesService = new WeakMap(),
    _$scope = new WeakMap();

export class AddTypeController {
    constructor($scope, NumberTypesService) {
        'ngInject';

        _$scope.set(this, $scope);
        _NumberTypesService.set(this, NumberTypesService);
        _NumberTypesService.get(this).getParameters()
            .then((res) => this.parameters = res.data)
    }

    onAdd () {
        _$scope.get(this).$emit('loading', true);
        let data = {
            name: this.name,
            parameters: this.parameter
        }
        _NumberTypesService.get(this).create(data)
            .then(() => {
                _$scope.get(this).$emit('loading', false);
                _$scope.get(this).closeThisDialog();
            })
            .catch((err) => console.error(err));
    }

    onClose () {
        _$scope.get(this).closeThisDialog();
    }
}
