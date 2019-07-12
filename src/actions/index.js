import jsonApi from '../api/jsonApi';
import history from '../history';

export const fetchProducts = () => async(dispatch) => {
    const response = await jsonApi.get('?albumId=1');
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: response.data
    });
}


export const clickedProduct = (id) => async(dispatch) => {
    const response = await jsonApi.get(`?id=${id}`);
    dispatch({
        type: 'CLICKED_PRODUCT',
        payload: response.data
    });

    history.push('/product/');
}

export const addToCart = (id) => async (dispatch) => {
    const response = await jsonApi.get(`?id=${id}`);
    dispatch({
            type: 'ADD_TO_CART',
            payload: response.data[0]
    });
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}