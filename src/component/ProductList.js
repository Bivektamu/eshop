import React from 'react';
import {connect} from 'react-redux'
import {fetchProducts, clickedProduct, addToCart} from '../actions'
import { NONAME } from 'dns';
class ProductList extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    onProductClick = (id) => {
        this.props.clickedProduct(id);
    }

    addToCartClick = (id) => {
        this.props.addToCart(id);
    }

    renderImg ()  {

        const product = this.props.products.map((product) => {
            var bool = (this.props.cartProductsId.includes(product.id)) ? 'none' : '';
                return(
                    <div key={product.id}>
                        <p>{product.title}</p>
                        <img onClick = { () => this.onProductClick(product.id) }  src={product.url} alt={product.title} />

                        <span onClick={() => this.addToCartClick(product.id)} style={{display: bool} }>add to cart</span>
                        
                    </div>
                    )
                }
        );

        return product;

    }

    render() {
        
        
        if(!this.props.products) {
            return 'Loading';
        }


        return(
            <div>
                <h1>
                    image src
                </h1>
                <div>{this.renderImg()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products :  state.products,
        clickedProduct : clickedProduct,
        cartProductsId : state.cart.map(cartProduct => {
            return cartProduct.id
        })
        
    }
}

export default connect(mapStateToProps, {fetchProducts, clickedProduct, addToCart})(ProductList);