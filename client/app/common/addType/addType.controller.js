let _NumberTypesService = new WeakMap(),
    _$scope = new WeakMap();

export class AddTypeController {
    constructor($scope, NumberTypesService) {
        'ngInject';

        _$scope.set(this, $scope);
        _NumberTypesService.set(this, NumberTypesService);
        _NumberTypesService.get(this).getParameters()
            .then((res) => this.parameterss = res.data)

        this.parameters = [];
    }

    onAdd () {
        _$scope.get(this).$emit('loading', true);
        let data = {
            name: this.name,
            parameters: this.parameters
        };
        data.parameters.map((param) => {
            delete param.name;
            delete param.key;
            if(param.listValue) {
                delete param.listValue.value;
            }
        })
        _NumberTypesService.get(this).create(data)
            .then(() => {
                _$scope.get(this).$emit('loading', false);
                _$scope.get(this).closeThisDialog();
            })
            .catch((err) => console.error(err));
    }

    onAddParam (index) {
        let obj = {};
        obj.parameter = {
            id: this.parameter.id
        };
        if(this.parameter.type === 'INT') {
            obj[this.key] = +this.parameter[this.key];
        } else if (this.parameter.type === 'LIST_VALUE') {
            obj[this.key] = {
                id: this.parameter[this.key].id,
                name: this.parameter[this.key].value
            }
        } else {
            obj[this.key] = this.parameter[this.key];
        }
        obj.key = this.key;
        obj.name = this.parameter.name;
        this.parameters.push(obj);
        this.paramList = angular.copy(this.parameters);
        this.key = null;
        this.parameterss.splice(this.parameterss.indexOf(this.parameter), 1);
        this.parameter = null;
    }

    onClose () {
        _$scope.get(this).closeThisDialog();
    }

    onSelect () {
        if(this.parameter.type === "LIST_VALUE") {
            this.key = 'listValue';
        } else {
            this.key = `${this.parameter.type.toLowerCase()}Value`;
        }
    }
}
