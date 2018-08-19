import React, { Component } from 'react';
import './Team.css';
import Responsive from 'react-responsive';
import Slider from 'react-slick';
import SidakIcon from './static/sidak.jpg'
import KimiaIcon from  './static/kimia.jpg';
import AyushmaanIcon from  './static/ayushmaan.jpg';
import KonradIcon from  './static/konrad.jpg';
import KseniaIcon from  './static/ksenia.jpg';
import SoniaIcon from  './static/sonia.jpg';
import VikashIcon from './static/vikash.jpg'
import NoorIcon from './static/noor.jpg'
class Team extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
      const urls = this.props.urls;
      var settings = {
          accessibility: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          infinite: true,
          pauseOnHover: true,
          rows: 1,
          slidesToShow: 3,
          speed: 1000,
          slidesToScroll: 1
      };
      return (
          <div>
              <div class="container">
                  <Slider {...settings}>
                  <div>
                      <div class="container1">

                          <img src= {SidakIcon} alt="Avatar" class="image" />
                          <div class = "overlay">
                          <div class = "row-md-3">
                          <a href="mailto:president@ucltechsoc.com" class="email mx-2 my-2" title= "Email Me!">
                              <i class="fa fa-envelope icon-email"></i>
                          </a>

                          <a href="https://www.facebook.com/sidak.pasricha" class="facebook mx-2 my-2" title= "Sidak Pasricha Facebook">
                              <i class="fa fa-facebook-official icon-facebook"></i>
                          </a>
                          <a href="https://www.linkedin.com/in/sidak-pasricha/" class="linkedin mx-2 my-2" title= "Sidak Pasricha LinkedIn">
                              <i class="fa fa-linkedin icon-linkedin"></i>
                          </a>
                          <a href="https://github.com/ucltechsoc" class="github mx-2 my-2" title= "Sidak Pasricha GitHub">
                              <i class="fa fa-github icon-github"></i>
                          </a>
                          </div>
                          </div>

                      </div>
                      <h3 class = "mx-auto my-3"> Sidak&nbsp;Pasricha </h3>
                      <h4 class = "mx-auto my-3"> President </h4>
                      </div>
                      <div>
                          <div class="container1">

                              <img src= {KimiaIcon} alt="Avatar" class="image" />
                              <div class = "overlay">
                              <div class = "row-md-3">
                              <a href="mailto:treasurer@ucltechsoc.com" class="email mx-2 my-2" title= "Email Me!">
                                  <i class="fa fa-envelope icon-email"></i>
                              </a>

                              <a href="https://www.facebook.com/kimia.pirouzkia" class="facebook mx-2 my-2" title= "Kimia Pirouzkia Facebook">
                                  <i class="fa fa-facebook-official icon-facebook"></i>
                              </a>
                              <a href="https://www.linkedin.com/in/kimia-pirouzkia-a06a78150/" class="linkedin mx-2 my-2" title= "Kimia Pirouzkia LinkedIn">
                                  <i class="fa fa-linkedin icon-linkedin"></i>
                              </a>
                              <a href="https://github.com/ucltechsoc" class="github mx-2 my-2" title= "Kimia Pirouzkia GitHub">
                                  <i class="fa fa-github icon-github"></i>
                              </a>
                              </div>
                              </div>

                          </div>
                          <h4 class = "w-responsive mx-auto mb-3 my-3"> Kimia&nbsp;Pirouzkia </h4>
                          <h5 class = "mx-auto my-3"> Treasurer </h5>
                          </div>
                          <div>
                              <div class="container1">

                                  <img src= {AyushmaanIcon} alt="Avatar" class="image" />
                                  <div class = "overlay">
                                  <div class = "row-md-3">
                                  <a href="mailto:projects@ucltechsoc.com" class="email mx-2 my-2" title= "Email Me!">
                                      <i class="fa fa-envelope icon-email"></i>
                                  </a>

                                  <a href="https://www.facebook.com/ayushmaan.seth.9" class="facebook mx-2 my-2" title= "Ayushmaan Seth Facebook">
                                      <i class="fa fa-facebook-official icon-facebook"></i>
                                  </a>
                                  <a href="https://www.linkedin.com/in/ayushmaan-seth-4a96364a/" class="linkedin mx-2 my-2" title= "Ayushmaan Seth LinkedIn">
                                      <i class="fa fa-linkedin icon-linkedin"></i>
                                  </a>
                                  <a href="https://github.com/Ayushmaanseth" class="github mx-2 my-2" title= "Ayushmaan Seth GitHub">
                                      <i class="fa fa-github icon-github"></i>
                                  </a>
                                  </div>
                                  </div>

                              </div>
                              <h3 class = "mx-auto my-3"> Ayushmaan&nbsp;Seth </h3>
                              <h4 class = "mx-auto my-3"> Projects Director </h4>
                              </div>
                              <div>
                                  <div class="container1">

                                      <img src= {KseniaIcon} alt="Avatar" class="image" />
                                      <div class = "overlay">
                                      <div class = "row-md-3">
                                      <a href="mailto:vp@ucltechsoc.com" class="email mx-2 my-2" title= "Email Me!">
                                          <i class="fa fa-envelope icon-email"></i>
                                      </a>

                                      <a href="https://www.facebook.com/kseniapavlina" class="facebook mx-2 my-2" title= "Ksenia Pavlina Facebook">
                                          <i class="fa fa-facebook-official icon-facebook"></i>
                                      </a>
                                      <a href="https://www.linkedin.com/in/ksenia-pavlina-b341b016a/" class="linkedin mx-2 my-2" title= "Ksenia Pavlina LinkedIn">
                                          <i class="fa fa-linkedin icon-linkedin"></i>
                                      </a>
                                      <a href="https://github.com/ucltechsoc" class="github mx-2 my-2" title= "Ksenia Pavlina GitHub">
                                          <i class="fa fa-github icon-github"></i>
                                      </a>
                                      </div>
                                      </div>

                                  </div>
                                  <h3 class = "mx-auto my-3"> Ksenia&nbsp;Pavlina </h3>
                                  <h4 class = "mx-auto my-3"> Vice President </h4>
                                  </div>
                                  <div>
                                      <div class="container1">

                                          <img src= {SoniaIcon} alt="Avatar" class="image" />
                                          <div class = "overlay">
                                          <div class = "row-md-3">
                                          <a href="mailto:outreach@ucltechsoc.com" class="email mx-2 my-2" title= "Email Me!">
                                              <i class="fa fa-envelope icon-email"></i>
                                          </a>

                                          <a href="https://www.facebook.com/sonia.a.shah" class="facebook mx-2 my-2" title= "Sonia Shah Facebook">
                                              <i class="fa fa-facebook-official icon-facebook"></i>
                                          </a>
                                          <a href="https://www.linkedin.com/in/sonia-shah-460589168/" class="linkedin mx-2 my-2" title= "Sonia Shah LinkedIn">
                                              <i class="fa fa-linkedin icon-linkedin"></i>
                                          </a>
                                          <a href="https://github.com/ucltechsoc" class="github mx-2 my-2" title= "Sonia Shah GitHub">
                                              <i class="fa fa-github icon-github"></i>
                                          </a>
                                          </div>
                                          </div>

                                      </div>
                                      <h3 class = "mx-auto my-3"> Sonia&nbsp;Shah </h3>
                                      <h4 class = "mx-auto my-3"> Outreach Director </h4>
                                      </div>

                                      <div>
                                          <div class="container1">

                                              <img src= {VikashIcon} alt="Avatar" class="image" />
                                              <div class = "overlay">
                                              <div class = "row-md-3">
                                              <a href="mailto:socials@ucltechsoc.com" class="email mx-2 my-2" title= "Email Me!">
                                                  <i class="fa fa-envelope icon-email"></i>
                                              </a>

                                              <a href="https://www.facebook.com/vikashpanjiyar99" class="facebook mx-2 my-2" title= "Vikash Panjiyar Facebook">
                                                  <i class="fa fa-facebook-official icon-facebook"></i>
                                              </a>
                                              <a href="https://www.linkedin.com/in/vikashpanjiyar/" class="linkedin mx-2 my-2" title= "Vikash Panjiyar LinkedIn">
                                                  <i class="fa fa-linkedin icon-linkedin"></i>
                                              </a>
                                              <a href="https://github.com/ucltechsoc" class="github mx-2 my-2" title= "Vikash Panjiyar GitHub">
                                                  <i class="fa fa-github icon-github"></i>
                                              </a>
                                              </div>
                                              </div>

                                          </div>
                                          <h3 class = "mx-auto my-3"> Vikash&nbsp;Panjiyar </h3>
                                          <h4 class = "mx-auto my-3"> Socials Director </h4>
                                          </div>

                                          <div>
                                              <div class="container1">

                                                  <img src= {NoorIcon} alt="Avatar" class="image" />
                                                  <div class = "overlay">
                                                  <div class = "row-md-3">
                                                  <a href="mailto:sponsorship@ucltechsoc.com" class="email mx-2 my-2" title= "Email Me!">
                                                      <i class="fa fa-envelope icon-email"></i>
                                                  </a>

                                                  <a href="https://www.facebook.com/noor.garawi" class="facebook mx-2 my-2" title= "Noor Garawi Facebook">
                                                      <i class="fa fa-facebook-official icon-facebook"></i>
                                                  </a>
                                                  <a href="https://www.linkedin.com/in/noor-garawi-307081129/" class="linkedin mx-2 my-2" title= "Noor Garawi LinkedIn">
                                                      <i class="fa fa-linkedin icon-linkedin"></i>
                                                  </a>
                                                  <a href="https://github.com/ucltechsoc" class="github mx-2 my-2" title= "Noor Garawi GitHub">
                                                      <i class="fa fa-github icon-github"></i>
                                                  </a>
                                                  </div>
                                                  </div>

                                              </div>
                                              <h3 class = "mx-auto my-3"> Noor&nbsp;Garawi </h3>
                                              <h4 class = "mx-auto my-3"> Sponsorship Director </h4>
                                              </div>

                                              <div>
                                                  <div class="container1">

                                                      <img src= {KonradIcon} alt="Avatar" class="image" />
                                                      <div class = "overlay">
                                                      <div class = "row-md-3">
                                                      <a href="mailto:gensec@ucltechsoc.com" class="email mx-2 my-2" title= "Email Me!">
                                                          <i class="fa fa-envelope icon-email"></i>
                                                      </a>

                                                      <a href="https://www.facebook.com/konrad.d.niedzielski" class="facebook mx-2 my-2" title= "Konrad Niedzielski Facebook">
                                                          <i class="fa fa-facebook-official icon-facebook"></i>
                                                      </a>
                                                      <a href="https://www.linkedin.com/in/konrad-n-95204a150/" class="linkedin mx-2 my-2" title= "Konrad Niedzielski LinkedIn">
                                                          <i class="fa fa-linkedin icon-linkedin"></i>
                                                      </a>
                                                      <a href="https://github.com/ucltechsoc" class="github mx-2 my-2" title= "Konrad Niedzielski GitHub">
                                                          <i class="fa fa-github icon-github"></i>
                                                      </a>
                                                      </div>
                                                      </div>

                                                  </div>
                                                  <h3 class = "mx-auto my-3"> Konrad&nbsp;Niedzielski </h3>
                                                  <h4 class = "mx-auto my-3"> General Secretary </h4>
                                                  </div>
                      {/*<div><img src="" class="sponsor-image" /></div>
                          <div><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" /></div>
                          <div><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" /></div>
                          <div><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" /></div>
                          <div><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" /></div>
                          <div><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" /></div>
                          <div><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" /></div>
      <div><img src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg" /></div>*/}
                  </Slider>
              </div>
          </div>
      );
  }

}
export default Team;
