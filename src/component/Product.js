import React from 'react';
import {connect} from 'react-redux'

class Product extends React.Component {
    
    render() {

        if(!this.props.clickedProduct[0]) {
            return <div>Loading</div>;
        }
        console.log(this.props.clickedProduct[0]);
        const {url, title} = (this.props.clickedProduct[0]);
        return (
            <div>
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        clickedProduct : state.clickedProduct
    }
}

export default connect(mapStatetoProps) (Product);