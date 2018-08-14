import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import NavbarFeatures from './navbarFeatures';
import Sponsor from './Sponsor';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarFeatures />
        <div className="App">
          <header className="App-header">
            <div class="container flex-center">
              <div class="row pt-5 mt-3">
                <div class="col-md-12">
                  <h1 class="h1-responsive white-text text-uppercase mb-3">UCL Technology Society</h1>
                  <hr class="hr-light mt-4" />
                  <br />
                  <h6 class="mb-6 white-text">Promoting technological awareness and innovation both within and beyond UCL</h6>
                </div>
              </div>
            </div>
          </header>

          <a id="about" class="anchor"/>
          <section class="my-5">
            <h2 class="h1-responsive font-weight-bold text-center my-3">About Us</h2>
            <p class="text-center w-responsive mx-auto mb-5">Lol</p>
          </section>

          <a id="sponsors" class="anchor"/>
          <section class="my-5">
            <h2 class="h1-responsive font-weight-bold text-center my-3">Our Sponsors</h2>
            <p class="text-center w-responsive mx-auto mb-5">Lol</p>
            {/*<div class="container-fluid">
              <div class="row fluid">
                <div class="col-md-4"><Sponsor name="Test"/></div>
                <div class="col-md-4">Sponsor</div>
                <div class="col-md-4">Sponsor</div>
                <div class="col-md-4">Sponsor</div>
                <div class="col-md-4">Sponsor</div>
              </div>
    </div>*/}
          <Sponsor name="test"/>
          </section>

          <a id="team" class="anchor"/>
          <section class="my-5">
            <h2 class="h1-responsive font-weight-bold text-center my-3">The Team</h2>
            <p class="text-center w-responsive mx-auto mb-5">Lol</p>
          </section>

          <a id="contact" class="anchor"/>
          <section class="my-5">
            <h2 class="h1-responsive font-weight-bold text-center my-3">Contact Us</h2>
            <p class="text-center w-responsive mx-auto mb-5">Lol</p>
          </section>

        </div>
        <footer class="page-footer font-small footer-bg pt-4">

          <div class="container-fluid text-center text-md-center">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3 flex-center">

                <h5 class="text-uppercase font-weight-bold text-center logo"></h5>

              </div>

              <div class="col-md-6 mb-md-0 mb-3">

                <p>Lol</p>

              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">© 2018 Copyright:
          <a href=""> UCL TechSoc</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
