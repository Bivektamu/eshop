import _ from 'lodash';

const fetchProduct = (state = {}, action) => {

    switch (action.type) {
        case 'FETCH_PRODUCT':

            const product = {[action.payload.id]:action.payload};

            return product;
        default:
            return state;
    }

}

export default fetchProduct;