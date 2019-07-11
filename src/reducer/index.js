import {combineReducers} from 'redux';

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
            return [...state, action.payload];

        default:
            return state;
    }
};


export default combineReducers({
    products: productsReducer,
    clickedProduct : clickedProduct,
});