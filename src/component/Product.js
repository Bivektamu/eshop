import React from 'react';
import {connect} from 'react-redux'

class Product extends React.Component {
    
    render() {

        if(!this.props.clickedProduct) {
            return <div>Loading</div>;
        }

        console.log(this.props.clickedProduct);
        const {id, company, info, price,title, img} = (this.props.clickedProduct);
        return (
            <div key={id}>
                <p>{company}</p>
                <img src={img} alt={title} />
                <p>{title}</p>
                <p>{price}</p>
                <p>{info}</p>
            </div>
        )
    }
}

const mapStatetoProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        clickedProduct : state.products[ownProps.match.params.id]
    }
}

export default connect(mapStatetoProps) (Product);