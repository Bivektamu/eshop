import {combineReducers} from 'redux';
import _ from 'lodash';

const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {...state, ..._.mapKeys(action.payload, 'id') };

        default:
            return state;
    }
};




export const cart = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            console.log(state);
            return {...state, [action.payload.id]:action.payload};
            
        case 'REMOVE_FROM_CART':
            state = _.omit(state, [action.payload]);

            return {...state, state};

        default:
            return {state};
    }

}



export default combineReducers({
    products: productsReducer,
    cart: cart,
});