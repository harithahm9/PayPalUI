import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from '../reducer/reducer';

export default ()=>{
    const store=createStore(
        combineReducers({
            trans:reducer
        }),
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
    return store;
}