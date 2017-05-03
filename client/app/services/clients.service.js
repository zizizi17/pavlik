import * as _ from 'lodash';

let _$http = new WeakMap();

export class ClientService {
    constructor ($http) {
        'ngInject';

        _$http.set(this, $http);
    }

    getAll (query) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/clients/all/${this._serialize(query)}`,
            method: "GET"
        })
    }

    save (client) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/clients`,
            method: "PUT",
            data: client
        })
    }

    create (client) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/clients`,
            method: "POST",
            data: client
        })
    }

    delete (id) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/clients/${id}`,
            method: "DELETE"
        })
    }

    _serialize (obj) {
        if (!_.isObject(obj) || _.isEmpty(obj)) {
            return '';
        }

        return '?' + Object.keys(obj)
            .reduce((a, k) => {
                a.push(k + '=' + encodeURIComponent(obj[k]));
                return a;
            }, []).join('&');
    }
}
