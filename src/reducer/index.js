import {combineReducers} from 'redux';
import axios from 'axios';

const products = axios.get('https://jsonplaceholder.typicode.com/photos')
                .then(res => {
                    return res.data
                });

console.log(products);


const productReducer = () => {
    return [
        products
    ]
}

export default combineReducers({
    products: productReducer,
});