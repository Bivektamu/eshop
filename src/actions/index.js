
const SelectedProduct = (product=null) => {
    return{
    type:'SELECTED_PRODUCT',
    payload: product,
    }

}

export default SelectedProduct;