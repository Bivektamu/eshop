import React from 'react';
import PayPalBtn from './PayPalBtn';
import history from '../history';


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
                <div className="row my-5">
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <img className="img-fluid cart-img" src={img} alt={title} />
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase"><span className="d-lg-none font-weight-bold text-uppercase">Product:&nbsp;</span>{title}</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase"><span className="d-lg-none font-weight-bold text-uppercase">price: </span>{price}</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase">
                            <button onClick={() =>removeQuantity(id, count)}>-</button>
                            <span className="ml-2 mr-2">{count}</span>
                            <button onClick={() => props.addQuantity(id)}>+</button>
                        </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase">
                            <i className="fa fa-trash text-blue" onClick={() => props.showModal(id)}></i>
                        </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase"><span className="d-lg-none font-weight-bold text-uppercase">item total: </span>{total}</p>
                    </div>

                    
                </div>
            )
        })
        return eachProduct;

    }

    return (

        <React.Fragment>

        <div className="container d-none d-lg-block">

            <div className="row">
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase font-weight-bold">products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase font-weight-bold">name of product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase font-weight-bold">price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase font-weight-bold">Quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase font-weight-bold">remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 text-center">
                        <p className="text-uppercase font-weight-bold">total</p>
                    </div>
            </div>
        </div>
        <div className="container">
                {renderProduct(props.product)}
        </div>
        <div className="container">

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
                    <PayPalBtn total={subTotal - subTotal/10} history={history}  />

                </div>
            </div>
        </div> 
            
        </React.Fragment> 
    )
}

export default CartColumn;