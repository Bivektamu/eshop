import React from 'react';
import {connect} from 'react-redux'
import {fetchProducts} from '../actions'
import {clickedProduct} from '../actions'
import {Link} from 'react-router-dom';
class ProductList extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
        
    }

    onProductClick = () => {
        this.props.clickedProduct();
        
    }

    renderImg ()  {

        const product = this.props.products.map((product) => {
                return(
                    <div key={product.id}>
                        <p>{product.title}</p>
                        <Link to='/product/'>
                            <img onClick = { this.onProductClick }  src={product.url} alt={product.title} />
                        </Link>
                        
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
        clickedProduct : clickedProduct
    }
}

export default connect(mapStateToProps, {fetchProducts, clickedProduct})(ProductList);