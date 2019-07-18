import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../actions'
import ReactModal from 'react-modal';
import styled from 'styled-components';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {showModal:false, productId: null, showInfo: false};

    }
    componentDidMount() {
        // this.props.product(this.props.productsInCartId);

    }


    onRemoveBtnClick = () => {
        this.setState({showModal: false, showInfo:true});
        this.props.removeFromCart(this.state.productId);
        
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
                    <img src={img} alt={title} />
                    {
                        count > 0?(<span>{count}</span>): (<span></span>)
                    }

                    {
                        // count > 0?(<button onClick={() => this.onRemoveBtnClick(id)}>remove from cart</button>): ('')
                        count > 0?(<button onClick={() => this.setState({showModal: true, productId:id})}>remove from cart</button>): ('')
                    } 
                    
                </div>
            )
        })
        return product;

    }

    renderModal =() => {
        return(
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    Delete Product
                        
                        
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={this.closeModal}>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete?
                    {/* {
                            this.props.product[0]? 
                                (<h5 className="modal-title" id="exampleModalCenterTitle">{this.props.product[0].title}</h5>):
                                console.log('asdfsdfasdfa')
                        } */}
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

                {this.renderProduct()}
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
    console.log(state.cart);
    return {
        productsInCart : Object.values(state.cart)
    }
}

export default connect(mapStateToProps, {removeFromCart}) (Cart);