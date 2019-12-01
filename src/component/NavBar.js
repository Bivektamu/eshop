import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../logo.svg";
import {Logo, NavWrapper, ButtonContainer} from '../styledComponent.js';
import styled from 'styled-components';

class NavBar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="container-fluid bg-white">

                    <div className="row">
                        <div className="col-10 mx-auto my-5 text-center text-title title">
                            <span className="">MOBILE STORE</span>
                        </div>
                    </div>
                </div>
                <NavWrapper className="navbar navbar-expand-sm px-sm-5">
                    <div className="container">
                    <ul class="nav navbar-nav navbar-center container-fluid justify-content-between">
                            <li>
                                <NavLink to="/" activeClassName="active-page" exact  className="nav-link text-uppercase">Products</NavLink>
                            </li>
                            <li className="">
                                <NavLink to="/cart/" activeClassName="active-page" exact className="nav-link text-uppercase">
                                        <span className="mr-2">
                                            <i className="fa fa-cart-plus"></i>
                                        </span>
                                        My Cart
                                </NavLink>
                            </li>
                        </ul>
                    
                    </div>
                    
                </NavWrapper>
            </React.Fragment>
        )
    }
}


export default NavBar;