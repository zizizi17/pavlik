import {TYPE} from '../types.js';
import * as _ from 'lodash';

let _$http = new WeakMap();

export class NumbersService {
    constructor ($http) {
        'ngInject';

        _$http.set(this, $http);
    }

    getAll (query) {
        return _$http.get(this)({
            url: `${TYPE.URL}/numbers/all/${this._serialize(query)}`,
            method: "GET"
        })
    }

    getFree () {
        return _$http.get(this)({
            url: `${TYPE.URL}/numbers/free`,
            method: "GET"
        })
    }

    getTypes () {
        return _$http.get(this)({
            url: `${TYPE.URL}/number-types/all`,
            method: "GET"
        })
    }

    create (number) {
        return _$http.get(this)({
            url: `${TYPE.URL}/numbers`,
            method: "POST",
            data: number
        })
    }

    delete (number) {
        return _$http.get(this)({
            url: `${TYPE.URL}/numbers/${number.id}`,
            method: "DELETE"
        })
    }

    search (query) {
        return _$http.get(this)({
            url: `${TYPE.URL}/numbers/search`,
            method: "POST",
            data: query
        })
    }

    update (number) {
        return _$http.get(this)({
            url: `${TYPE.URL}/numbers`,
            method: "PUT",
            data: number
        })
    }

    report () {
        return _$http.get(this)({
            url: `${TYPE.URL}/report/numbers`
        })
    }

    getParameters () {
        return _$http.get(this)({
            url: `${TYPE.URL}/parameters/all`,
            method: "GET"
        })
    }

    createParameter (data) {
        return _$http.get(this)({
            url: `${TYPE.URL}/parameters`,
            method: "POST",
            data
        })
    }

    deleteParameter (param) {
        return _$http.get(this)({
            url: `${TYPE.URL}/parameters/${param.id}`,
            method: "DELETE"
        })
    }

    createListValueGroup (data) {
        return _$http.get(this)({
            url: `${TYPE.URL}/list-values`,
            method: 'POST',
            data
        })
    }

    getListValues () {
        return _$http.get(this)({
            url: `${TYPE.URL}/list-values/all`,
            method: 'GET'
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
