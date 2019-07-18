import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import styled from 'styled-components';

class NavBar extends React.Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/" >
                    <Logo src={logo} alt="logo" className="navbar-brand">
                    </Logo>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item m-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>

                <div className="ml-auto">
                    <ButtonContainer className="mr-3">Sign In</ButtonContainer>
                    <Link to="/cart/" className="">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fa fa-cart-plus"></i>
                            </span>
                            My Cart
                        </ButtonContainer>
                    </Link>
                </div>
                

                
            </NavWrapper>
        )
    }
}

const Logo = styled.img`
    width: 100px;
`;

const ButtonContainer = styled.button `
    font-size:1.2rem;
    background: transparent;
    outline: none;
    border: 2px solid var(--lightBlue);
    padding: 5px 15px;
    color:var(--lightBlue);
`;

const NavWrapper = styled.nav `
    background: var(--mainBlue);
    .nav-link {
        font-size: 1.3rem;
        color:var(--mainWhite)!important;
        text-transform: capitalize;
    }
`;

export default NavBar;