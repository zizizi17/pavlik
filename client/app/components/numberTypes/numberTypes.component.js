import {NumberTypesController} from './numberTypes.controller';

export const numberTypesComponent = {
    bindings: {
        list: '<'
    },
    template: require('./numberTypes.html'),
    controller: NumberTypesController,
    controllerAs: 'vm'
};
