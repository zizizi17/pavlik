let _$scope = new WeakMap();

class ClientsReportController {
    constructor($scope) {
        'ngInject';

        _$scope.set(this, $scope);
    }

    $onInit () {
        _$scope.get(this).$emit('loading', false);
    }
}

export default ClientsReportController;
