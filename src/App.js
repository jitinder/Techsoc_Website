import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import NavbarFeatures from './navbarFeatures';

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
                  <hr class="hr-light mt-4"/>
                  <br/>
                  <h6 class="mb-6 white-text">Promoting technological awareness and innovation both within and beyond UCL</h6>
                </div>
              </div>
            </div>
          </header>
          <p className="App-intro">
            Random Text
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            Lol
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            Lol
        </p>
        </div>
      </div>
    );
  }
}

export default App;
