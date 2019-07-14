import React from 'react';
import {connect} from 'react-redux'

class Product extends React.Component {
    
    render() {

        if(!this.props.clickedProduct) {
            return <div>Loading</div>;
        }

        console.log(this.props.clickedProduct[0]);
        const {id, company, info, price,title, img} = (this.props.clickedProduct[0]);
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

const mapStatetoProps = (state) => {
    // console.log(state.clickedProduct);
    return {
        clickedProduct : Object.values(state.clickedProduct),
    }
}

export default connect(mapStatetoProps) (Product);