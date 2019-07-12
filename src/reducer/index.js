import {combineReducers} from 'redux';
import _ from 'lodash';

const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return action.payload;

        default:
            return state;
    }
};

const clickedProduct = (state = [], action) => {
    switch(action.type) {
        case 'CLICKED_PRODUCT':
            return  action.payload;

        default:
            return state;
    }
};

const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]


        case 'REMOVE_FROM_CART':
            const a =_.omit(state, action.payload); 
            console.log(a)
            return state;


        default:
            return state;
    }

}



export default combineReducers({
    products: productsReducer,
    clickedProduct : clickedProduct,
    cart: cart,
});