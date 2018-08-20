import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Responsive from 'react-responsive';
import './NavbarFeatures.css';

const Desktop = props => <Responsive {...props} minWidth={778}/>;
const NotDesktop = props => <Responsive {...props} minWidth={331} maxWidth={777}/>;
const VerySmall = props => <Responsive {...props} maxWidth={330}/>;

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
                                <Desktop>
                                    <img src="./techsoc_logo.svg" height="50" alt="TechSoc Logo" />
                                    </Desktop>
                                    <NotDesktop>
                                    <img src="./techsoc_logo.svg" height="40" alt="TechSoc Logo" />
                                        </NotDesktop>
                                        <VerySmall>
                                    <img src="./techsoc_logo.svg" height="30" alt="TechSoc Logo" />
                                        </VerySmall>
                                </NavbarBrand>
                                <NotDesktop>
                                            <a href="https://studentsunionucl.org/clubs-societies/technology-society" target="_new" class="btn btn-white waves-effect btn-sm" role="button"><b>Join Now</b></a>
                            </NotDesktop>
                                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                                <Collapse isOpen={this.state.collapse} navbar>
                                    <NavbarNav right>
                                        <NavItem style={{ paddingTop: 10 }}>
                                            <a href="#about" class="nav-link"><b>About Us</b></a>
                                        </NavItem>
                                        <Desktop>
                                            <h2 class="white-text vline">|</h2>
                                        </Desktop>
                                        <NavItem style={{ paddingTop: 10 }}>
                                            <a href="#sponsors" class="nav-link"><b>Our Sponsors</b></a>
                                        </NavItem>
                                        <Desktop>
                                            <h2 class="white-text vline">|</h2>
                                        </Desktop>
                                        <NavItem style={{ paddingTop: 10 }}>
                                            <a href="#events" class="nav-link"><b>Events</b></a>
                                        </NavItem>
                                        <Desktop>
                                            <h2 class="white-text vline">|</h2>
                                        </Desktop>
                                        <NavItem style={{ paddingTop: 10 }}>
                                            <a href="#team" class="nav-link"><b>The Team</b></a>
                                        </NavItem>
                                        <Desktop>
                                            <h2 class="white-text vline">|</h2>
                                        </Desktop>
                                        <NavItem style={{ paddingTop: 10 }}>
                                            <a href="#contact" class="nav-link"><b>Contact Us</b></a>
                                        </NavItem>
                                        
                                    </NavbarNav>
                                </Collapse>
                            </Container>
                            <Desktop>
                            <a href="https://studentsunionucl.org/clubs-societies/technology-society" target="_new" class="btn btn-white waves-effect btn-sm" role="button"><b>Join Now</b></a>
                            </Desktop>
                        </Navbar>
                    </Router>
                </header>

            </div>
        );
    }
}

export default NavbarFeatures;