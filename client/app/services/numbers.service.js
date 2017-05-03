import * as _ from 'lodash';

let _$http = new WeakMap();

export class NumbersService {
    constructor ($http) {
        'ngInject';

        _$http.set(this, $http);
    }

    getAll (query) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/numbers/all/${this._serialize(query)}`,
            method: "GET"
        })
    }

    getFree () {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/numbers/free`,
            method: "GET"
        })
    }

    getTypes () {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/number-types/all`,
            method: "GET"
        })
    }

    create (number) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/numbers`,
            method: "POST",
            data: number
        })
    }

    delete (number) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/numbers/${number.id}`,
            method: "DELETE"
        })
    }

    search (query) {
        return _$http.get(this)({
            url: `http://shielded-coast-32476.herokuapp.com/numbers/search`,
            method: "POST",
            data: query
        })
    }

    update (number) {
        return _$http.get(this)({
            url: `https://shielded-coast-32476.herokuapp.com/numbers`,
            method: "PUT",
            data: number
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
