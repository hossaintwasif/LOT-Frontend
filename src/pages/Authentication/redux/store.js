import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './Auth/auth.reducer';

const rootReducer = combineReducers({
  auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
