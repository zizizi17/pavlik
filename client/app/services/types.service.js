import {TYPE} from '../types.js';

let _$http = new WeakMap();

export class NumberTypesService {
    constructor ($http) {
        'ngInject';

        _$http.set(this, $http);
    }

    getAll () {
        return _$http.get(this)({
            url: `${TYPE.URL}/number-types/all`,
            method: "GET"
        })
    }

    delete (id) {
        return _$http.get(this)({
            url: `${TYPE.URL}/number-types/${id}`,
            method: "DELETE"
        })
    }

    create (type) {
        return _$http.get(this)({
            url: `${TYPE.URL}/number-types`,
            method: "POST",
            data: type
        })
    }

    getParameters () {
        return _$http.get(this)({
            url: `${TYPE.URL}/parameters/all`,
            method: "GET"
        })
    }
}
