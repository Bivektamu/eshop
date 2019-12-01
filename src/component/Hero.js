import React from 'react';

const Hero = (props) => {
    if(!props.bannerImg) {
        return 'Loading';
    }
    console.log(props);
    return (
        <div className="banner">
            <span className="design1"></span>
            <span className="design2"></span>
            <span className="design3"></span>
            <img src={props.bannerImg.img} alt={props.bannerImg.title} />
            <h2>HTC Desire 626s<br/>On Huge Sale</h2>

        </div>
    );
}

export default Hero;