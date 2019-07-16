import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../actions'

class Cart extends React.Component {
    componentDidMount() {
        // this.props.clickedProduct(this.props.productsInCartId);

    }


    onRemoveBtnClick = (id) => {
        this.props.removeFromCart(id);
    }

    renderProduct = () => {
        const a = (this.props.productsInCart);
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
                        count > 0?(<button onClick={() => this.onRemoveBtnClick(id)}>remove from cart</button>): ('')
                    } 
                    
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
    console.log(state.cart);
    return {
        productsInCart : Object.values(state.cart)
    }
}

export default connect(mapStateToProps, {removeFromCart}) (Cart);