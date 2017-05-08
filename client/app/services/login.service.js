import {TYPE} from '../types.js';

let _$http = new WeakMap();

export class LoginService {
    constructor ($http) {
        'ngInject';

        _$http.set(this, $http);
    }

    login (name, password = '') {
        let data = {
            name,
            password
        }
        return _$http.get(this)({
            url: `${TYPE.URL}/login`,
            method: "POST",
            data
        })
    }

    logout () {
        return _$http.get(this)({
            url: `${TYPE.URL}/logout`,
            method: "POST",
        })
    }
}
