import { combineReducers, createStore } from 'redux';
import { customerReducer } from '../reducer/CustomerReucer';
import { itemReducer } from '../reducer/ItemReducer';

const rootReducer = combineReducers({
    customer: customerReducer,
    item: itemReducer,
});

export const store = createStore(rootReducer);
