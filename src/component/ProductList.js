import React from 'react';
import Title from './Title';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProducts, addToCart, fetchProduct} from '../actions';
import {ProductWrapper, CartButton} from '../styledComponent.js';
import {ButtonContainer} from '../styledComponent.js';
import Modal from './Modal';

import ReactModal from 'react-modal';


class ProductList extends React.Component {

    constructor() {
        super();
        this.state={showModal : false};
        this.closeModal = this.closeModal.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchProducts();
        
    }
    componentWillMount() {
        this.props.fetchProducts();
    }

   
    addToCartClick = (id) => {
        this.setState({ showModal: true });
        this.props.addToCart(id);
        this.props.fetchProduct(id);
    }

    closeModal () {
        this.setState({ showModal: false });
    }

    renderProduct ()  {
        const product = this.props.products.map(product => {
            const {id, img, title, inCart, price} = product;
                return(

                        <ProductWrapper key={product.id} 
                        className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
                            <div className="card">
                                <div className="img-container p-5">
                                    <Link to={`/product/${id}`} className="">
                                        <img className="card-img-top"   src={img} alt={title} />
                                    </Link>

                                    <CartButton className="card-btn btn btn-primary" 
                                            type="button" data-toggle="modal" 
                                            data-target="#exampleModalCenter" 
                                            onClick={() => this.addToCartClick(id)} disabled={inCart}>
                                                
                                                {inCart?('In Cart'):(<i className="fa fa-cart-plus" ></i>)}
                                    </CartButton>
                                </div>

                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0">{title}</p>
                                    <h5 className="text-blue font-italic mb-0">${price}</h5>
                                </div>

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

                
                <ReactModal 
                    className="modal"
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    >
                        <Modal product = {this.props.product[0]}
                                closeModal = {this.closeModal} 
                        />
                </ReactModal>

            </div>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        products : Object.values(state.products),
        product : Object.values(state.product),
    }
}

export default connect(mapStateToProps, {fetchProducts, fetchProduct, addToCart})(ProductList);