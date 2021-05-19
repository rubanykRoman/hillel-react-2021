import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const enchancer = applyMiddleware(thunk);

const store = createStore(reducer, enchancer);

export default store;