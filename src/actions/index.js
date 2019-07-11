import jsonApi from '../api/jsonApi';
import history from '../history';

export const fetchProducts = () => async(dispatch) => {
    const response = await jsonApi.get('?albumId=1');
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: response.data
    });
}


export const clickedProduct = () => async(dispatch) => {
    const response = await jsonApi.get('?id=1');
    console.log(response.data);
    dispatch({
        type: 'CLICKED_PRODUCT',
        payload: response.data
    });

    history.push('/product/');


}