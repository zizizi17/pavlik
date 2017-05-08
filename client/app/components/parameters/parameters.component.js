import {ParametersController} from './parameters.controller';

export const parametersComponent = {
    bindings: {
        list: "<"
    },
    template: require('./parameters.html'),
    controller: ParametersController,
    controllerAs: 'vm'
};
