import React from 'react';
import {connect} from 'react-redux'
import SelectedProduct from '../actions'
class ProductList extends React.Component {

    state = {products: null}

    renderImg () {
        // const mainImg = this.state.products.map((product) => {
        //         return(
        //             <React.Fragment>
        //                 <p>{product.title}</p>
        //                 <img src={product.url} />
        //             </React.Fragment>
        //             )
        //         }
        // );

        return <div>asdf</div>
       
    }
    render() {
        if(!this.state.products) {
            return 'Loading';
        }
        console.log(this.state.products);
        return(
            <div>
                <h1>
                    image src
                </h1>
                {/* <div>{this.renderImg()}</div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        product :   
    }
}

export default connect(mapStateToProps, {SelectedProduct})(ProductList);