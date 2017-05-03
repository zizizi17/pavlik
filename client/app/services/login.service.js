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
            url: `https://shielded-coast-32476.herokuapp.com/login`,
            method: "POST",
            data
        })
    }

    logout () {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/logout`,
            method: "POST",
        })
    }
}
