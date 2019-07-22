import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import {Logo, NavWrapper, ButtonContainer} from '../styledComponent.js';
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


export default NavBar;