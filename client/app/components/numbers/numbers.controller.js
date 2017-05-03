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

        const query = [
            this.nameQuery,
            this.rangeQuery,
            this.floorQuery,
            this.residentsQuery
        ]

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
}
