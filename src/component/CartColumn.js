import React from 'react';
import {Link} from 'react-router-dom';
const CartColumn = (props) => {
    

const removeQuantity = (id, count) => {
    console.log(count);
    if(count - 1 < 1) {
        return props.showModal(id);
    }
    else 
        props.removeQuantity(id);
}

var subTotal = 0;
    const renderProduct = (product) => {

        const eachProduct = product.map((product) => {
            
            const {id, title, img, count, price, total} = product;
            subTotal = subTotal + total;
            return (
                <div key={id} className="row"> 
                    <div className="col-10 mx-auto col-lg-2">
                        <img className="img-fluid" src={img} alt={title} />
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">{title}</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">{price}</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">
                            <button onClick={() =>removeQuantity(id, count)}>-</button>
                            <span className="ml-2 mr-2">{count}</span>
                            <button onClick={() => props.addQuantity(id)}>+</button>
                        </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">
                            <i className="fa fa-trash text-blue" onClick={() => props.showModal(id)}></i>
                        </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">{total}</p>
                    </div>

                    
                </div>
            )
        })
        return eachProduct;

    }

    if(props.product.length < 1){
        return (
            <h1 className="py-5 text-center">There are no products</h1>
        )
    }
    return (

        <div  className="container-fluid text-center d-noone d-lg-block"> 
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">name of product</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
            </div>

            {renderProduct(props.product)}

            <div className="row">
                <div className="col-10 mt-2 ml-sm-5  ml-md-auto col-sm-8 text-capitalize text-right">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            onClick={() => props.showModal(0)}>
                            Clear Cart
                        </button>
                </div>
                <div className="col-10 mt-2 ml-sm-5  ml-md-auto col-sm-8 text-uppercase text-right">
                    <p>subTotal : ${subTotal}</p>
                    <p>Tax: ${subTotal / 10}</p>
                    <p>Total: ${subTotal - subTotal / 10}</p>
                </div>
            </div>

            
        </div>
            
    )
}

export default CartColumn;