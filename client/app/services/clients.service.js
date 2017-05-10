import * as _ from 'lodash';
import {TYPE} from '../types.js';

let _$http = new WeakMap();

export class ClientService {
    constructor ($http) {
        'ngInject';

        _$http.set(this, $http);
    }

    getAll (query) {
        return _$http.get(this)({
            url: `${TYPE.URL}/clients/all/${this._serialize(query)}`,
            method: "GET"
        })
    }

    save (client) {
        return _$http.get(this)({
            url: `${TYPE.URL}/clients`,
            method: "PUT",
            data: client
        })
    }

    create (client) {
        return _$http.get(this)({
            url: `${TYPE.URL}/clients`,
            method: "POST",
            data: client
        })
    }

    delete (id) {
        return _$http.get(this)({
            url: `${TYPE.URL}/clients/${id}`,
            method: "DELETE"
        })
    }

    assign (data) {
        return _$http.get(this)({
            url: `${TYPE.URL}/clients/assign`,
            method: "POST",
            data
        })
    }

    report () {
        return _$http.get(this)({
            url: `${TYPE.URL}/report/clients`,
            method: "GET"
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
