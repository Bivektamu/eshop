import React from 'react';
import {connect} from 'react-redux'
import {fetchProducts, clickedProduct, addToCart} from '../actions'
class ProductList extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    onProductClick = (id) => {
        console.log(id);
        this.props.clickedProduct(id);
    }

    addToCartClick = (id) => {
        this.props.addToCart(id);
    }

    renderProduct ()  {

        const product = this.props.products.map(product => {
                return(
                    <div key={product.id}>
                        <img onClick = { () => this.onProductClick(product.id) }  src={product.img} alt={product.title} />
                        <p>{product.title}</p>

                        <button onClick={() => this.addToCartClick(product.id)} >add to cart</button>
                        
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

        console.log(this.props.products);


        return(
            <div>
                <h1>Phone Shop</h1>
                <div>{this.renderProduct()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products : Object.values(state.products),
        clickedProduct : clickedProduct,
        
        
    }
}

export default connect(mapStateToProps, {fetchProducts, clickedProduct, addToCart})(ProductList);