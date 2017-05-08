import {AddParameterDialogController} from '../../common/addParameterDialog/addParameterDialog.controller';
import {CreateListValueGroupController} from '../../common/createListValueGroup/createListValueGroup.controller';

let _$scope = new WeakMap(),
    _NumbersService = new WeakMap(),
    _ngDialog = new WeakMap();

export class ParametersController {
    constructor($scope, NumbersService, ngDialog) {
        'ngInject';

        _$scope.set(this, $scope);
        _NumbersService.set(this, NumbersService);
        _ngDialog.set(this, ngDialog);
    }

    $onInit () {
        _$scope.get(this).$emit('loading', false);
    }

    getList () {
        _NumbersService.get(this).getParameters()
            .then((res) => this.list = res)
            .catch((err) => console.log(err));
    }

    onAddParameter () {
        _NumbersService.get(this).getListValues()
            .then((res) => {
                return _ngDialog.get(this).openConfirm({
                    template: '/app/common/addParameterDialog/addParameterDialog.html',
                    controller: AddParameterDialogController,
                    controllerAs: 'vm',
                    data: {
                        groups: res
                    }
                })
            })
            .then(() => this.getList())
            .catch(() => this.getList());
    }

    onDelete (param) {
        _$scope.get(this).$emit('loading', true);
        _NumbersService.get(this).deleteParameter(param)
            .then((res) => {
                _$scope.get(this).$emit('loading', false);
                this.getList();
            })
            .catch((err) => console.error(err))
    }

    onAddListGroup () {
            _ngDialog.get(this).openConfirm({
                template: '/app/common/createListValueGroup/createListValueGroup.html',
                controller: CreateListValueGroupController,
                controllerAs: 'vm'
            })
            .then(() => this.getList())
            .catch(() => this.getList());
    }
}
