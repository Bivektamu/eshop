import {combineReducers} from 'redux';
import cartReducer from './cart';
import _ from 'lodash';
import fetchProduct from './fetchProduct';

const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {...state, ..._.mapKeys(action.payload, 'id') };

        default:
            return state;
    }
};


export default combineReducers({
    cart: cartReducer,
    product : fetchProduct,
    products: productsReducer,
});