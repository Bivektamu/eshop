import React from "react";
import {Link} from 'react-router-dom';
import {ButtonContainer, CartButton} from '../styledComponent.js';

const Modal = (props) => {
    console.log(props);
    return (
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Item added to cart</h5>
                    
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div className="modal-body">
                    <div className="col-12 mx-auto  text-center text-capitalize p-5">

                        {
                            props.product? 
                                (
                                    <React.Fragment>
                                        <img className="img-fluid" 
                                        src={props.product.img} 
                                        alt={props.product.title} />

                                        <h5>{props.product.title}</h5>
                                        <h5 className="text-muted">price: ${props.product.price}</h5>
                                    </React.Fragment>
                                ):
                                ('')
                        }
                    </div>
                  
                </div>
                <div className="modal-footer">
                    
                    <ButtonContainer type="button" className="btn" 
                        data-dismiss="modal" onClick={props.closeModal}>
                            Continue Shopping
                    </ButtonContainer>
                    <Link to="/cart/">
                        <CartButton type="button" cart className="btn btn-primary">
                            Go To Cart
                        </CartButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal;