import {combineReducers} from 'redux';
import _ from 'lodash';

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            // return action.payload;
            return {...state, ..._.mapKeys(action.payload, 'id') };


        default:
            return {state};
    }
};

const clickedProduct = (state = [], action) => {
    switch(action.type) {
        case 'CLICKED_PRODUCT':
            return  {...state.clickedProduct, [action.payload.id] : action.payload};

        default:
            return {state};
    }
};

const cart = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            // return {...state.cart, [action.payload.id] : action.payload}
            return {state};


        case 'REMOVE_FROM_CART':
            // _.pick(state, pro);
           

            return {state};


        default:
            return {state};
    }

}



export default combineReducers({
    products: productsReducer,
    clickedProduct : clickedProduct,
    cart: cart,
});