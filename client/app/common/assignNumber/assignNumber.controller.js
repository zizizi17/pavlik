let _$scope = new WeakMap(),
    _NumbersService = new WeakMap(),
    _ClientService = new WeakMap();

export class AssignNumberController {
    constructor($scope, NumbersService, ClientService) {
        'ngInject'

        _$scope.set(this, $scope);
        _NumbersService.set(this, NumbersService);
        _ClientService.set(this, ClientService);
        this.client = _$scope.get(this).ngDialogData.client;


        _NumbersService.get(this).getFree()
            .then((res) => this.numbers = res.data)
            .catch((err) => console.log(err))
    }

    onClose () {
        _$scope.get(this).closeThisDialog();
    }

    onAssignNumber (number) {
        let data = {
            client: {
                id: this.client.id
            },
            number: {
                id: number.id
            },
            startDate: this.startDate,
            endDate: this.endDate
        }
        _ClientService.get(this).assign(data)
            .then((res) => this.onClose())
            .catch((err) => console.error(err));
    }
}

export default AssignNumberController;
