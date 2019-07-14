import React from 'react';
import {connect} from 'react-redux';
import {addToCart, removeFromCart} from '../actions'

class Cart extends React.Component {
    componentDidMount() {
        // this.props.clickedProduct(this.props.productsInCartId);
    }


    onRemoveBtnClick = (id) => {
        this.props.removeFromCart(id);
    }

    renderProduct = () => {
        const a = (this.props.productsInCart);
        console.log(a);
        const product = a.map((product) => {
            var {id, title, img} = product;
            return (
                <div key={id}>  
                    <p>quantity: <span></span></p>
                    <p>{title}</p>
                    <img src={img} alt={title} />
                    <button onClick={() => this.onRemoveBtnClick(id)}>remove from cart</button>
                </div>
            )
        })
        return product;

    }

    render() {

        if(!this.props.productsInCart) {
            return <div>loading</div>
        }
        return (
            <div>
                {this.renderProduct()}
            </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        productsInCart : Object.values(state.cart)
    }
}

export default connect(mapStateToProps, {addToCart, removeFromCart}) (Cart);