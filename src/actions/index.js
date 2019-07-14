import jsonApi from '../api/jsonApi';
import history from '../history';
import {storeProducts} from '../api/data';
import _ from 'lodash';


console.log();
export const fetchProducts = () => (dispatch) => {
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: storeProducts
    });
}


export const clickedProduct = (id) => (dispatch) => {
    const product = _.filter(storeProducts, { 'id':id});
    dispatch({
        type: 'CLICKED_PRODUCT',
        payload: product[0]
    });

    history.push('/product/');
}

export const addToCart = (id) => (dispatch) => {
    const product = _.filter(storeProducts, { 'id':id});
    dispatch({
        type: 'ADD_TO_CART',
        payload: product[0]
    });
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}