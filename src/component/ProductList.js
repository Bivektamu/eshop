import React from 'react';
import axios from 'axios';
class ProductList extends React.Component {

    state = {products: null}
    componentDidMount() {
        

        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
               this.setState({products:  res.data});
            });
    }

    renderImg () {
        const mainImg = this.state.products.map((img) => {
                return(
                    <React.Fragment>
                        <p>{img.title}</p>
                        <img src={img.url} />
                    </React.Fragment>
                    )
                }
        );

        return <div>{mainImg}</div>
       
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
                <div>{this.renderImg()}</div>
            </div>
        )
    }
}

export default ProductList;