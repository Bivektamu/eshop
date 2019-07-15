export const cart = (state = {}, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            state[action.payload.id] = action.payload
            return {state}

        case 'REMOVE_FROM_CART':
            return {state};


        default:
            return {state};
    }

}

