import _ from 'lodash';

const cartReducer = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':

            const product = {[action.payload.id]:action.payload};

            return {...state, ...product};
            // return state
            
        case 'REMOVE_FROM_CART':

             state  = _.omit(state, [action.payload]);
            
            return state;

        default:
            return state;
    }

}

export default cartReducer;