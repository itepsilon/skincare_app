import { applyMiddleware, compose, createStore } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const middleware = [
    apiMiddleware,
    thunkMiddleware,
]
const middlewareEnhancer =
    applyMiddleware(...middleware)
const enhancers = [middlewareEnhancer]
if (process.env.NODE_ENV === 'development') {
    const devToolsExtension =
        window.__REDUX_DEVTOOLS_EXTENSION__
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}
const composedEnhancers = compose(...enhancers)
export default createStore(reducer, {}, composedEnhancers)