import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Responsive from 'react-responsive';
import './NavbarFeatures.css';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const NotDesktop = props => <Responsive {...props} maxWidth={991} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class NavbarFeatures extends React.Component {
    //pink darken-4
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const view = { background: 'url(./bg.png)no-repeat center center', backgroundSize: 'cover', height: '100vh' }
        return (
            <div>
                <header>
                    <Router>
                        <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
                            <Container>
                                <NavbarBrand href="/">
                                    <img src="./techsoc_logo.svg" height="50 dp" alt="TechSoc Logo" />
                                </NavbarBrand>
                                <NotDesktop>
                                            <button type="button" class="btn btn-white waves-effect btn-sm" data-toggle="button"><b>Join Now</b></button>
                            </NotDesktop>
                                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                                <Collapse isOpen={this.state.collapse} navbar>
                                    <NavbarNav right>
                                        <NavItem style={{ paddingTop: 10 }}>
                                            <a href="#about" class="nav-link"><b>About Us</b></a>
                                        </NavItem>
                                        <Desktop>
                                            <h2 class="white-text" style={{ paddingTop: 10 }}>|</h2>
                                        </Desktop>
                                        <NavItem style={{ paddingTop: 10 }}>
                                            <a href="#sponsors" class="nav-link"><b>Our Sponsors</b></a>
                                        </NavItem>
                                        <Desktop>
                                            <h2 class="white-text" style={{ paddingTop: 10 }}>|</h2>
                                        </Desktop>
                                        <NavItem style={{ paddingTop: 10 }}>
                                            <a href="#team" class="nav-link"><b>The Team</b></a>
                                        </NavItem>
                                        <Desktop>
                                            <h2 class="white-text" style={{ paddingTop: 10 }}>|</h2>
                                        </Desktop>
                                        <NavItem style={{ paddingTop: 10 }}>
                                            <a href="#contact" class="nav-link"><b>Contact Us</b></a>
                                        </NavItem>
                                        {/*<Desktop>
                        <NavItem style={{paddingTop: 10}}>
                              <NavLink to="#"><i class="fa fa-envelope fa-lg" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                              <NavLink to="#"><i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                              <NavLink to="#"><i class="fa fa-twitter-square fa-lg" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                            <NavLink to="#"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                            <NavLink to="#"><i class="fa fa-snapchat-square fa-lg" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          
                        </Desktop>*/}
                                    </NavbarNav>
                                </Collapse>
                            </Container>
                            <Desktop>
                                <button type="button" class="btn btn-white waves-effect btn-sm" data-toggle="button"><b>Join Now</b></button>
                            </Desktop>
                        </Navbar>
                    </Router>
                </header>

            </div>
        );
    }
}

export default NavbarFeatures;