import React from 'react';
import {connect} from 'react-redux'

class Product extends React.Component {
    componentDidMount() {
        // console.log(this.props);
    }
    render() {

        if(this.props.clickedProduct === '') {
            return <div>Loading</div>;
        }
        // console.log(this.props);

        return(
            <div>
                <img src={this.props.clickedProduct.url} alt={this.props.clickedProduct.title} />
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    // console.log(state);
    return {
        clickedProduct : state.clickedProduct
    }
}

export default connect(mapStatetoProps) (Product);