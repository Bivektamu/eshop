import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProducts, addToCart} from '../actions';


class ProductList extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }
    componentWillMount() {
        this.props.fetchProducts();

    }

   
    addToCartClick = (e,id) => {
        // e.stopPropagation();
       return this.props.addToCart(id);
    }

    renderProduct ()  {
        const product = this.props.products.map(product => {
            const {id, img, title, cart} = product;
                return(

                        <ProductWrapper key={product.id} 
                        className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
                            <div className="card">
                                <div className="img-container p-5">
                                    <Link to={`/product/${id}`}>
                                        <img className="card-img-top"   src={img} alt={title} />
                                    </Link>
                                    <CartButton className="card-btn" onClick={(e) => this.addToCartClick(e,id)} disabled={cart}>
                                        <i className="fa fa-cart-plus" ></i>
                                    </CartButton>
                                </div>
                                <p>{title}</p>

                            </div>
                        </ProductWrapper>
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
            <div className="py-5">
                <div className="container">
                    <Title name="Our" title="products" />
                    <div className="row">{this.renderProduct()}</div>
                </div>
            </div>
        )
    }
}


export const ProductWrapper = styled.div`
    cursor:pointer;
    .img-container {
        position: relative;
        overflow: hidden;
        &:hover button{

            transform: none;
        }
    }


`;

export const CartButton = styled.button`
    position:absolute;
    font-size:1.3rem;
    padding: 10px;
    background:var(--lightBlue);
    color:var(--mainWhite);
    outline: none;
    border:none;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    right:0;
    bottom:0;
    transform: translate(45px, 54px);
    transition: all 0.6s ease;

    &:hover {
        color:var(--mainBlue);
    }

`;

const mapStateToProps = (state) => {
    return {
        products : Object.values(state.products),
    }
}

export default connect(mapStateToProps, {fetchProducts, addToCart})(ProductList);