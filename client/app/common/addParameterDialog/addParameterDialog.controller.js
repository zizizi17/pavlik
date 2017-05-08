let _NumbersService = new WeakMap(),
    _$scope = new WeakMap();

export class AddParameterDialogController {
    constructor(NumbersService, $scope) {
        'ngInject';

        _NumbersService.set(this, NumbersService);
        _$scope.set(this, $scope);

        this.groups = _$scope.get(this).ngDialogData.groups.data;

        this.types = [
            {
                name: 'Text',
                value: 'TEXT'
            },
            {
                name: 'Date',
                value: 'DATE'
            },
            {
                name: 'Range',
                value: 'INT'
            },
            {
                name: 'List Value',
                value: 'LIST_VALUE'
            }
        ]
    }

    onAdd () {
        _$scope.get(this).$emit('loading', true);
        let data = {
            type: this.type.value,
            name: this.name
        };
        if(this.type.value === "INT") {
            data = {
                type: this.type.value,
                name: this.name,
                intValueRange: {
                    min: this.intRange.min,
                    max: this.intRange.max
                }
            }
        }
        if(this.type.value === "LIST_VALUE") {
            data = {
                name: this.name,
                type: this.type.value,
                listValueGroup: {
                    id: this.listValueGroup.id
                }
            }
        }
        _NumbersService.get(this).createParameter(data)
            .then(() => {
                _$scope.get(this).$emit('loading', false);
                _$scope.get(this).closeThisDialog();
            })
            .catch((err) => console.error(err));
    }
}
