import _ from 'lodash';
export const cart = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state,  [action.payload.id]:action.payload};

        case 'REMOVE_FROM_CART':
            state = _.omit(state, [action.payload]);

            console.log(state);
           

            return {...state, state};

        default:
            return {state};
    }

}

