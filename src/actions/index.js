import history from '../history';
import {storeProducts} from '../api/data';
import _ from 'lodash';


export const fetchProducts = () => (dispatch) => {
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: storeProducts
    });
}

export const fetchProduct = (id)  => {

    var productFound;
    storeProducts.map((product) => {
        if(id === product.id){
            productFound =  product;
        }
    })

return {
        type: 'FETCH_PRODUCT',
        payload: productFound
    };
}

export const addToCart = (id)  => {
    
    var productFound;
    storeProducts.map(product => {
        if(id === product.id){
            // console.log(product);
            product.count++;
            product.inCart = true;
            product.total = product.count * product.price;
            productFound =  product;
        }
    });

    return {
        type: 'ADD_TO_CART',
        payload: productFound
    }
}

export const removeFromCart = (id) => {

    storeProducts.map(product => {
        if(id === product.id){
            product.count = 0;
            product.inCart = false;
        }
    });

    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

export const addQuantity = (id)  => {
    history.push("/cart/");
    return {
        type: 'ADD_QUANTITY',
        payload: id,
    }
}

export const removeQuantity = (id)  => {
    history.push("/cart/");
    return {
        type: 'REMOVE_QUANTITY',
        payload: id,
    }
}

export const clearCart = () => {
    storeProducts.map(product => {
        if(product.count > 0){
            product.count = 0;
            product.inCart = false;
            product.total = 0;
        }
    });
    return {
        type: 'CLEAR_CART',
        payload: {},
    }
}