let _$http = new WeakMap();

export class NumberTypesService {
    constructor ($http) {
        'ngInject';

        _$http.set(this, $http);
    }

    getAll () {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/number-types/all`,
            method: "GET"
        })
    }

    delete (id) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/number-types/${id}`,
            method: "DELETE"
        })
    }

    create (type) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/number-types`,
            method: "POST",
            data: type
        })
    }

    getParameters () {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/parameters/all`,
            method: "GET"
        })
    }
}
