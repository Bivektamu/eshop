import React from 'react';

const CartColumn = (props) => {
    console.log(props);

    const renderProduct = (product) => {

        const eachProduct = product.map((product) => {
            var {id, title, img, count, price} = product;
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
                            <button >-</button>
                            <span className="ml-2 mr-2">{count}</span>
                            <button onClick={() => props.addQuantity(id)}>+</button>
                        </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">
                            <button onClick={() => props.showModal(id)}>remove from cart</button>
                        </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">products</p>
                    </div>

                    
                </div>
            )
        })
        return eachProduct;

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
        </div>
            
    )
}

export default CartColumn;