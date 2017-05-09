let _$scope = new WeakMap(),
    _NumbersService = new WeakMap(),
    _ngDialog = new WeakMap(),
    _$rootScope = new WeakMap();

import {AddDialogController} from '../../common/addDialog/addDialog.controller';
import {EditDialogController} from '../../common/editDialog/editDialog.controller';

export class NumbersController {
    constructor($scope, NumbersService, ngDialog, $rootScope) {
        'ngInject';

        _$scope.set(this, $scope);
        _NumbersService.set(this, NumbersService);
        _ngDialog.set(this, ngDialog);
        _$rootScope.set(this, $rootScope);

        this.admin = window.localStorage.getItem('role') === 'admin';
    }

    $onInit () {
        _$scope.get(this).$emit('loading', false);

        this.nameQuery = {
            qualifier: 'name',
            name: ''
        };
        this.rangeQuery = {
            qualifier: 'priceRange',
            from: null,
            to: null
        };
        this.floorQuery = {
            qualifier: 'floorList',
            floors: []
        };
        this.residentsQuery = {
            qualifier: 'residents',
            residents: 0
        };

        this.parameters = [];
    }

    onSearch () {
        if(this.floorFrom && this.floorTo) {
            for(var i = this.floorFrom; i <= this.floorTo; i++) {
                this.floorQuery.floors.push(Number(i))
            }
        } else if (this.floorFrom) {
            this.floorQuery.floors.push(this.floorFrom);
        } else if (this.floorTo) {
            this.floorQuery.floors.push(this.floorTo);
        }
        this.parameters.map((param) => {
            delete param.name;
            delete param.key;
            if(param.listValue) {
                delete param.listValue.name;
            }
        })
        let query = [
            this.nameQuery,
            this.rangeQuery,
            this.floorQuery,
            this.residentsQuery
        ]
        query  = query.concat(this.parameters);
        console.log(query);

        _NumbersService.get(this).search(query)
            .then((res) => this.list = res)
            .catch((err) => console.error(err));
    }

    onFreeNumbers () {
        _$scope.get(this).$emit('loading', true);
        _NumbersService.get(this).getFree()
            .then((res) => {
                this.list = res.data;
                _$scope.get(this).$emit('loading', false);
            })
            .catch((err) => console.error(err));
    }

    getList () {
        _$scope.get(this).$emit('loading', true);
        _NumbersService.get(this).getAll()
            .then((res) => {
                this.list = res;
                _$scope.get(this).$emit('loading', false);
            })
            .catch((err) => console.error(err));
    }

    onAddNumber () {
        _NumbersService.get(this).getTypes()
            .then((res) => {
                return _ngDialog.get(this).openConfirm({
                    template: '/app/common/addDialog/addDialog.html',
                    controller: AddDialogController,
                    controllerAs: 'vm',
                    data: {
                        types: res
                    }
                })
            })
            .then((res) => this.getList())
            .catch((err) => this.getList());
    }

    onDelete (number) {
        _$scope.get(this).$emit('loading', true);
        _NumbersService.get(this).delete(number)
            .then((res) => {
                _$scope.get(this).$emit('loading', false)
                this.getList();
            })
            .catch((err) => console.error(err));
    }

    onEditNumber (number) {
        let data = angular.copy(number)
        _NumbersService.get(this).getTypes()
            .then((res) => {
                return _ngDialog.get(this).openConfirm({
                    template: '/app/common/editDialog/editDialog.html',
                    controller: EditDialogController,
                    controllerAs: 'vm',
                    data: {
                        number: data,
                        types: res
                    }
                })
            })
            .then(() => this.getList())
            .catch(() => this.getList())
    }


    // params
    onAddParam () {
        let obj = {};
        obj.qualifier = "parameter";
        obj.parameter = {
            id: this.parameter.id,
            type: this.parameter.type
        };
        if(this.parameter.type === 'INT') {
            obj[this.key + 'From'] = +this.parameter.intValueFrom;
            obj[this.key + 'To'] = +this.parameter.intValueTo;
        } else if (this.parameter.type === 'LIST_VALUE') {
            obj[this.key] = {
                id: this.parameter[this.key].id,
                name: this.parameter[this.key].value
            }
        } else if (this.parameter.type === "DATE") {
            obj[this.key + 'From'] = this.parameter.dateValueFrom;
            obj[this.key + 'To'] = this.parameter.dateValueTo;
        } else {
            obj[this.key] = this.parameter[this.key];
        }
        obj.key = this.key;
        obj.name = this.parameter.name;
        this.parameters.push(obj);
        this.paramList = angular.copy(this.parameters);
        this.key = null;
        this.parameterss.data.splice(this.parameterss.data.indexOf(this.parameter), 1);
        this.parameter = null;
        console.log(this.paramList)
    }

    onSelect () {
        if(this.parameter.type === "LIST_VALUE") {
            this.key = 'listValue';
        } else {
            this.key = `${this.parameter.type.toLowerCase()}Value`;
        }
    }
}
