import {ClientsController} from './clients.controller';

export const clientsComponent = {
    template: require('./clients.html'),
    bindings: {
        list: "<"
    },
    controller: ClientsController,
    controllerAs: 'vm'
};
