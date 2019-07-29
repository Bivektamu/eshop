import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart, addQuantity, removeQuantity, clearCart} from '../actions'
import ReactModal from 'react-modal';
import styled from 'styled-components';
import CartColumn from './CartColumn';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {showModal:false, productId: null, showInfo: false};

    }
    componentDidMount() {
        this.renderProduct();
    }


    onRemoveBtnClick = () => {
        this.setState({showModal: false, showInfo:true});
        if(this.state.productId === 0) {
            console.log('hey');
            return this.props.clearCart();
        }
        this.props.removeFromCart(this.state.productId);
        
    }

    addQuantity = (id) => {
        
        return this.props.addQuantity(id)
    }

    renderProduct = () => {
        const a = (this.props.productsInCart);
        if(a < 1) {
            return (
                <h3 className="text-center text-blue my-5">Ther are no products in the cart.</h3>
            )
        }
        const product = a.map((product) => {
            var {id, title, img, count} = product;
            return (
                <div key={id}> 
                    
                    <p>{title}</p>
                    {
                        count > 0?
                        (
                            <div>
                                <span className="mr-2">Quantity:</span>
                                <button >-</button>
                                <span className="ml-2 mr-2">{count}</span>
                                <button onClick={() => this.addQuantity(id)}>+</button>

                            </div>
                        ): (<span></span>)
                    }
<br />
                    {
                        // count > 0?(<button onClick={() => this.onRemoveBtnClick(id)}>remove from cart</button>): ('')
                        count > 0?(<button onClick={() => this.setState({showModal: true, productId:id})}>remove from cart</button>): ('')
                    } 

                    <img src={img} alt={title} />

                    
                </div>
            )
        })
        return product;

    }

    renderModal =() => {
        const title =(this.state.productId > 0)?"Delete Product":"Clear Cart";
        const content = (this.state.productId > 0)? "Are you sure you want to delete?":"Are you sure you want to clear cart?";
        return(
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    {title}
                        
                        
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={this.closeModal}>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer">
                        
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" 
                            onClick={()=>this.setState({showModal: false})}>
                                Close
                        </button>
                        <button type="button" className="btn btn-primary" 
                            onClick={() => this.onRemoveBtnClick()}>
                                Yes
                        </button>
                    </div>
                </div>
            </div>
                
        )
    }

    showModal = (id) => {
            this.setState({showModal: true, productId:id})
    }

    render() {

        if(!this.props.productsInCart) {
            return <div>loading</div>
        }
        return (
            <div>
                {
                    this.state.showInfo?
                        (
                            <DeleteInfo className="text-center py-3">Product is deleted</DeleteInfo>
                        ):('')
                }

            <CartColumn product={this.props.productsInCart} 
                        addQuantity = {(id) => this.props.addQuantity(id)} 
                        removeQuantity = {(id) => this.props.removeQuantity(id)} 
                        showModal = {(id) => this.showModal(id)} />

                {/* {this.renderProduct()} */}
                <ReactModal 
                    className="modal"
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example">
                        {this.renderModal()}
                </ReactModal>
                

            </div>)
    }
}

export const DeleteInfo = styled.h6 `
    background:#ffe484;
`;


const mapStateToProps = (state) => {
    // console.log(state.cart);
    return {
        productsInCart : Object.values(state.cart)
    }
}

export default connect(mapStateToProps, {removeFromCart, addQuantity, removeQuantity, clearCart}) (Cart);