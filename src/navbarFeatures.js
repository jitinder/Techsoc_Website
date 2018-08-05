import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, View, Mask} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Responsive from 'react-responsive';
import './NavbarFeatures.css';

const Desktop = props => <Responsive {...props} minWidth={992} />;
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

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        const view = {background: 'url("https://i.stack.imgur.com/0ASXA.jpg")no-repeat center center', backgroundSize: 'cover', height: '100vh'}
        return (
            <div>
                <header>
            <Router>
                <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <img src="./techsoc_logo.svg" height="50 dp" alt="TechSoc Logo"/>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem style={{paddingTop: 10}}>
                              <NavLink to="#">About</NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                              <NavLink to="#">Events</NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                              <NavLink to="#">Join</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <Desktop>
                        <NavbarNav right>
                        <NavItem style={{paddingTop: 10}}>
                              <NavLink to="#"><i class="fa fa-envelope fa-lg white-text" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                              <NavLink to="#"><i class="fa fa-facebook-official fa-lg indigo-text" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                              <NavLink to="#"><i class="fa fa-twitter-square fa-lg cyan-text" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                            <NavLink to="#"><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          <NavItem style={{paddingTop: 10}}>
                            <NavLink to="#"><i class="fa fa-snapchat-square fa-lg yellow-text" aria-hidden="true"></i></NavLink>
                          </NavItem>
                        </NavbarNav>
                        </Desktop>
                    </Collapse>
                </Navbar>
            </Router>

            <View style={view}>
            <Mask overlay="purple-light" style={{flexDirection: 'column'}} className="flex-center text-white text-center">
                <h2>This Navbar is fixed</h2>
                <h5>It will always stay visible on the top, even when you scroll down</h5>
                <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br/>
                <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
              </Mask>
              </View>
              </header>
            </div>
        );
    }
}

export default NavbarFeatures;