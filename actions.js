export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST';
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS';
export const PRODUCT_LIST_ERROR = 'PRODUCT_LIST_ERROR';

const url = 'http://skincare-api-production.eba-ebgcseap.us-west-2.elasticbeanstalk.com';

function requestProducts() {
    return {
        type: PRODUCT_LIST_REQUEST
    }
}

function receiveProducts(products) {
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: products
    }
}

function failProducts(message) {
    return {
        type: PRODUCT_LIST_ERROR,
        payload: message
    }
}

export function fetchProducts(id) {
    return function (dispatch) {
        dispatch(requestProducts());
        return fetch(`${url}/api/products`)
            .then(response => {
                if (response.status >= 400) {
                    dispatch(failProducts("Bad response from server"));
                }
                return response.json();
            })
            .then(products => dispatch(receiveProducts(products)));
    }
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginRequest() {
    return {
        type: LOGIN_REQUEST
    }
}

function loginSuccess(payload) {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

function loginFail(message) {
    return {
        type: LOGIN_ERROR,
        payload: message
    }
}

export function login(username, password) {
    return function (dispatch) {
        dispatch(loginRequest());
        return fetch(`${url}/api/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then(response => {
            if (response.status >= 400) {
                dispatch(loginFail("Bad response from server"));
            }
            return response.json();
        }).then(payload => dispatch(loginSuccess(payload)));
    }
}