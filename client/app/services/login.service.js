import {TYPE} from '../types.js';

let _$http = new WeakMap();

export class LoginService {
    constructor ($http) {
        'ngInject';

        _$http.set(this, $http);
    }

    login (data) {
        return _$http.get(this)({
            url: `${TYPE.URL}/login${this._serialize(data)}`,
            method: "GET"
        })
    }

    logout () {
        return _$http.get(this)({
            url: `${TYPE.URL}/logout`,
            method: "POST",
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
