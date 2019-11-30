import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions';
import {Link} from 'react-router-dom';
import {addToCart} from '../actions';
import {ButtonContainer, CartButton} from '../styledComponent.js';
import ReactModal from 'react-modal';
import Modal from './Modal';


class Product extends React.Component {
    constructor() {
        super();
        this.state = {showModal: false}
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        this.props.fetchProducts();
    }

    addToCart = (id) => {
        this.setState({showModal: true});
         this.props.addToCart(id);
    }

    closeModal () {
        this.setState({ showModal: false });
    }

    render() {

        if(!this.props.product) {
            return <div>Loading</div>;
        }

        console.log(this.props.product);
        const {id, company, info, inCart, price,title, img} = (this.props.product);
        
        return (
            <React.Fragment>
                <div key={id} className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h5 className="text-title">{title}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3 ">
                            <img src={img} className="img-fluid" alt={title} />
                        </div>

                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h4>MODEL: {title}</h4>
                            <h4 className="text-title text-muted mt-3 mb-2">
                                made by: {company}
                            </h4>
                            <h4 className="text-blue font-weight-bold">price: ${price}</h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            Some info about product:
                            </p>
                            <p className="info text-muted">{info}</p>
                                <Link to="/" className="mr-2">
                                    <ButtonContainer className="btn">
                                            Back to Products
                                    </ButtonContainer>
                                </Link>
    {/* 
                            <CartButton cart className="text-capitalize btn" onClick={() => this.addToCart(id)}>
                                add to cart
                            </CartButton> */}

                            <CartButton className="card-btn btn btn-primary" 
                                type="button" data-toggle="modal" 
                                data-target="#exampleModalCenter" 
                                onClick={() => this.addToCart(id)} disabled={inCart}>
                                    
                                    {inCart?(<span>In Cart</span>):(<span><i className="fa fa-cart-plus" ></i>&nbsp;Add To Cart</span>)}
                                    
                            </CartButton>
                        </div>
                    </div>
                </div>

                <ReactModal 
                className="modal"
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"
                >
                    <Modal product = {this.props.product}
                            closeModal = {this.closeModal} 
                    />
                </ReactModal>

            </React.Fragment>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        product : state.products[ownProps.match.params.id],
    }
}

export default connect(mapStatetoProps, {fetchProducts, addToCart}) (Product);