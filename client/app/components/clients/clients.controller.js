let _ClientService = new WeakMap(),
    _$scope = new WeakMap(),
    _ngDialog = new WeakMap();

import {AddClientDialogController} from '../../common/addClientDialog/addClientDialog.controller';
import {EditClientDialogController} from '../../common/editClientDialog/editClientDialog.controller';
import {AssignNumberController} from '../../common/assignNumber/assignNumber.controller';

export class ClientsController {
  constructor(ClientService, $scope, ngDialog) {
      'ngInject';

      _ClientService.set(this, ClientService);
      _$scope.set(this, $scope);
      _ngDialog.set(this, ngDialog);

      this.isReadonly = true
      this.admin = window.localStorage.getItem('role') === 'admin';
  }

  $onInit () {
      _$scope.get(this).$emit('loading', false);
  }

  onEdit (client) {
      let data = angular.copy(client);
      _ngDialog.get(this).openConfirm({
          template: '/app/common/editClientDialog/editClientDialog.html',
          controller: EditClientDialogController,
          controllerAs: 'vm',
          data: {
              client: data
          }
      })
      .then(() => this.getList())
      .catch(() => this.getList());
  }

  onAssign (client) {
      _ngDialog.get(this).openConfirm({
          template: '/app/common/assignNumber/assignNumber.html',
          controller: AssignNumberController,
          controllerAs: 'vm',
          data: {
              client
          }
      })
      .then(() => this.getList())
      .catch(() => this.getList());
  }

  onDelete (client) {
      _$scope.get(this).$emit('loading', true);
      _ClientService.get(this).delete(client.id)
        .then((res) => {
            _$scope.get(this).$emit('loading', false)
            this.getList();
        })
        .catch((err) => console.error(err));
  }

  getList () {
      _ClientService.get(this).getAll()
        .then((res) => this.list = res)
        .catch((err) => console.error(err));
  }

  onSearch () {
      _$scope.get(this).$emit('loading', true)
      if(this.searchQuery === '') {
          this.getList();
          _$scope.get(this).$emit('loading', false)
          return false;
      }
      _ClientService.get(this).getAll({name: this.searchQuery})
        .then((res) => {this.list = res; _$scope.get(this).$emit('loading', false)})
        .catch((err) => console.error(err));
  }

  onAddClient () {
      _ngDialog.get(this).openConfirm({
          template: '/app/common/addClientDialog/addClientDialog.html',
          controller: AddClientDialogController,
          controllerAs: 'vm'
      })
      .then((res) => this.getList())
      .catch((err) => this.getList());
  }
}
