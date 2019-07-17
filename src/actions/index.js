import history from '../history';
import {storeProducts} from '../api/data';
import _ from 'lodash';


export const fetchProducts = () => (dispatch) => {
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: storeProducts
    });
}

export const addToCart = (id)  => {
    
    var productFound;
    storeProducts.map((product) => {
        if(id === product.id){
            product.count++;
            productFound =  product;
        }
    })

    return {
        type: 'ADD_TO_CART',
        payload: productFound
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}