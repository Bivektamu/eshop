import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProducts, addToCart, fetchProduct} from '../actions';
// import Modal from '../Modal';
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
            const {id, img, title, inCart} = product;
                return(

                        <ProductWrapper key={product.id} 
                        className="col-9 mx-auto col-md-6 col-lg-3 my-3" >
                            <div className="card">
                                <div className="img-container p-5">
                                    <Link to={`/product/${id}`}>
                                        <img className="card-img-top"   src={img} alt={title} />
                                    </Link>
                                    <CartButton className="card-btn btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => this.addToCartClick(id)} disabled={inCart}>
                                        {inCart?('In Cart'):(<i className="fa fa-cart-plus" ></i>)}
                                        
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

        if(this.props.clickedProduct[0]) {
            console.log(this.props.clickedProduct[0].title);
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
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    {console.log(this.props.clickedProduct[0])}
                                    {/* <h5 className="modal-title" id="exampleModalCenterTitle">{this.props.clickedProduct[0].title}</h5> */}
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" onClick={this.closeModal}>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
                                    <button type="button" className="btn btn-primary">G changes</button>
                                </div>
                            </div>
                        </div>
                </ReactModal>

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
        clickedProduct : Object.values(state.clickedProduct),
    }
}

export default connect(mapStateToProps, {fetchProducts, fetchProduct, addToCart})(ProductList);