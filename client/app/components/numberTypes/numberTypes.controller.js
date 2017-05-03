let _$scope = new WeakMap(),
    _NumberTypesService = new WeakMap(),
    _ngDialog = new WeakMap();

import {AddTypeController} from '../../common/addType/addType.controller';

export class NumberTypesController {
    constructor($scope, NumberTypesService, ngDialog) {
        'ngInject';

        _NumberTypesService.set(this, NumberTypesService);
        _$scope.set(this, $scope);
        _ngDialog.set(this, ngDialog);
    }

    $onInit () {
        _$scope.get(this).$emit('loading', false);
    }

    onDelete (type) {
        _$scope.get(this).$emit('loading', true);

        _NumberTypesService.get(this).delete(type.id)
          .then((res) => {
              _$scope.get(this).$emit('loading', false)
              this.getList();
          })
          .catch((err) => console.error(err));
    }

    getList () {
        _NumberTypesService.get(this).getAll()
          .then((res) => this.list = res)
          .catch((err) => console.error(err));
    }

    onAddType () {
        return _ngDialog.get(this).openConfirm({
            template: '/app/common/addType/addType.html',
            controller: AddTypeController,
            controllerAs: 'vm'
        })
        .then(() => this.getList())
        .catch(() => this.getList());
    }
}
