import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import profile from '../reducer/auth-reducer';


const rootReducer = combineReducers({
    user: profile
});

const configureStore = () => {
    return createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    );
};

export default configureStore;