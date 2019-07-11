import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import styled from 'styled-components';

class NavBar extends React.Component {
    render() {
        return(
            <nav>
                <Link to="/" >
                    <Logo src={logo} alt="logo">
                    </Logo>
                </Link>
                <Link to="/">Products</Link>
                <Link to="/carts">My carts</Link>
            </nav>
        )
    }
}

const Logo = styled.img`
    width: 100px;
    
`;

export default NavBar;