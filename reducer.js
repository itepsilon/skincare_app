import { combineReducers } from 'redux';

function products(state = { pending: false, products: [], err: false }, action) {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUEST':
            return { ...state, pending: true }
        case 'PRODUCT_LIST_SUCCESS':
            return { ...state, pending: false, products: action.payload }
        case 'PRODUCT_LIST_ERROR':
            return { ...state, pending: false, err: action.payload, }
        default:
            return state
    }
}

function auth(state={access: "", refresh: ""}, action) {
    switch(action.type) {
        case 'LOGIN_REQUEST':
            return { ...state, pending: true }
        case 'LOGIN_SUCCESS':
            return { ...state, pending: false, access: action.payload.access, refresh: action.payload.refresh }
        case 'LOGIN_ERROR':
            return { ...state, pending: false, err: action.payload }
        default:
            return state
    }
}

export default combineReducers({
    products,
    auth
})