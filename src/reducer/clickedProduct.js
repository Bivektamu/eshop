export const clickedProduct = (state = {}, action) => {
    switch(action.type) {
        case 'CLICKED_PRODUCT':
            return  {[action.payload.id] : action.payload};

        default:
            return {state};
    }
};