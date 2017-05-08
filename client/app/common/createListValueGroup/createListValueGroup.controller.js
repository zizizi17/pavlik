let _$scope = new WeakMap(),
    _NumbersService = new WeakMap();

export class CreateListValueGroupController {
    constructor($scope, NumbersService) {
        'ngInject';

        _$scope.set(this, $scope);
        _NumbersService.set(this, NumbersService);


        this.values = [
            {
                value: ''
            }
        ];
    }

    addValue () {
        this.values.push({
            value: ''
        })
    }

    onAddGroup () {
        _$scope.get(this).$emit('loading', true);
        let data = {
            name: this.name,
            values: this.values
        };

        _NumbersService.get(this).createListValueGroup(data)
            .then(() => {
                _$scope.get(this).$emit('loading', false);
                _$scope.get(this).closeThisDialog();
            })
            .catch((err) => console.error(err));
    }
}
