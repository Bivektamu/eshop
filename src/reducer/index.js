import {combineReducers} from 'redux';
import _ from 'lodash';
import {clickedProduct} from './clickedProduct';
import {cart} from './cart';

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            // return action.payload;
            return  action.payload;


        default:
            return state;
    }
};





export default combineReducers({
    products: productsReducer,
    clickedProduct : clickedProduct,
    cart: cart,
});