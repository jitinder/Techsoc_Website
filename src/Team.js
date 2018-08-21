import React, { Component } from 'react';
import './Team.css';
import Responsive from 'react-responsive';
import Slider from 'react-slick';
import SidakIcon from './static/team/sidak.png'
import KimiaIcon from './static/team/kimia.png';
import AyushmaanIcon from './static/team/ayushmaan.png';
import KonradIcon from './static/team/konrad.png';
import KseniaIcon from './static/team/ksenia.png';
import SoniaIcon from './static/team/sonia.png';
import VikashIcon from './static/team/vikash.png'
import NoorIcon from './static/team/noor.png'
import PoojaIcon from './static/team/pooja.png';
import HelenIcon from './static/team/helen.jpg';
class Team extends React.Component {

    constructor(props) {
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
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  }
                }
              ],
            rows: 1,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div>
                <div class="container">
                    <div class="row justify-content-md-center mb-4">
                        <div class="col col-md-auto">
                            <div class="member-container">
                                <div class="container2">
                                    <img src={SidakIcon} alt="Sidak Pasricha" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:president@ucltechsoc.com" target="_new" class="white-text" title="Email Sidak">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://www.github.com/jitinder" target="_new" class="white-text" title="Sidak's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://uk.linkedin.com/in/sidak-pasricha" target="_new" class="white-text" title="Sidak's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/sidak.pasricha" target="_new" class="white-text" title="Sidak's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Sidak Pasricha </h4>
                                <h5 class="mx-auto mt-1 mb-3"> President </h5>
                            </div>
                        </div>

                        <div class="col col-md-auto">
                            <div class="member-container">
                                <div class="container2">
                                    <img src={KimiaIcon} alt="Kimia Pirouzkia" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:treasurer@ucltechsoc.com" target="_new" class="white-text" title="Email Kimia">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://www.github.com/kimia84" target="_new" class="white-text" title="Kimia's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/kimia-pirouzkia-a06a78150/" target="_new" class="white-text" title="Kimia's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/kimia.pirouzkia" target="_new" class="white-text" title="Kimia's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Kimia Pirouzkia </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Treasurer </h5>
                            </div>
                        </div>
                    </div>

                    <Slider {...settings}>
                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={KseniaIcon} alt="Ksenia Pavlina" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:vp@ucltechsoc.com" target="_new" class="white-text" title="Email Ksenia">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://www.github.com/kseniapavlina" target="_new" class="white-text" title="Ksenia's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/ksenia-pavlina-b341b016a/" target="_new" class="white-text" title="Ksenia's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/kseniapavlina" target="_new" class="white-text" title="Ksenia's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Ksenia Pavlina </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Vice President </h5>
                            </div>
                        </div>

                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={KonradIcon} alt="Konrad Niedzielski" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:gensec@ucltechsoc.com" target="_new" class="white-text" title="Email Konrad">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://www.github.com/Konrad1208" target="_new" class="white-text" title="Konrad's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/konrad-n-95204a150/" target="_new" class="white-text" title="Konrad's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/konrad.d.niedzielski" target="_new" class="white-text" title="Konrad's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Konrad Niedzielski </h4>
                                <h5 class="mx-auto mt-1 mb-3"> General Secretary </h5>
                            </div>
                        </div>

                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={NoorIcon} alt="Noor Garawi" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:sponsorship@ucltechsoc.com" target="_new" class="white-text" title="Email Noor">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            {/* <a href="https://www.github.com/GITHUB" target="_new" class="white-text" title="Noor's Github">
                                                <i class="fa fa-github" />
                                            </a> */}
                                            <a href="https://www.linkedin.com/in/noor-garawi-307081129/" target="_new" class="white-text" title="Noor's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/noor.garawi" target="_new" class="white-text" title="Noor's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Noor Garawi </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Sponsorship Director </h5>
                            </div>
                        </div>

                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={AyushmaanIcon} alt="Ayushmaan Seth" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:projects@ucltechsoc.com" target="_new" class="white-text" title="Email Ayushmaan">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/Ayushmaanseth" target="_new" class="white-text" title="Ayushmaan's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/ayushmaan-seth-4a96364a/" target="_new" class="white-text" title="Ayushmaan's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/ayushmaan.seth.9" target="_new" class="white-text" title="Ayushmaan's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Ayushmaan Seth </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Projects Director </h5>
                            </div>
                        </div>

                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={PoojaIcon} alt="Pooja Sridhar" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:events@ucltechsoc.com" target="_new" class="white-text" title="Email Pooja">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/PoojaSridhar16" target="_new" class="white-text" title="Pooja's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/pooja-sridhar-32723a126" target="_new" class="white-text" title="Pooja's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/people/Pooja-Sridhar/100018678542796" target="_new" class="white-text" title="Pooja's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Pooja Sridhar </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Events Director </h5>
                            </div>
                        </div>

                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={VikashIcon} alt="Vikash Panjiyar" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:socials@ucltechsoc.com" target="_new" class="white-text" title="Email Vikash">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://github.com/vpanjiyar" target="_new" class="white-text" title="Vikash's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/vikashpanjiyar/" target="_new" class="white-text" title="Vikash's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/vikashpanjiyar99" target="_new" class="white-text" title="Vikash's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Vikash Panjiyar </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Socials Director </h5>
                            </div>
                        </div>

                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={HelenIcon} alt="Helen Zhang" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:marketing@ucltechsoc.com" target="_new" class="white-text" title="Email Helen">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://www.github.com/hnzhang99" target="_new" class="white-text" title="Helen's Github">
                                                <i class="fa fa-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/haonan-zhang-9b5254169" target="_new" class="white-text" title="Helen's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/helen.pikachu" target="_new" class="white-text" title="Helen's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Helen Zhang </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Marketing Director </h5>
                            </div>
                        </div>

                        <div>
                            <div class="member-container-scroll">
                                <div class="container2">
                                    <img src={SoniaIcon} alt="Sonia Shah" class="team-image" />
                                    <div class="middle">
                                        <div class="team-links">
                                            <a href="mailto:outreach@ucltechsoc.com" target="_new" class="white-text" title="Email Sonia">
                                                <i class="fa fa-envelope" />
                                            </a>
                                            <a href="https://www.github.com/sonia96" target="_new" class="white-text" title="Sonia's Github">
                                                <i class="fa fa-github" />
                                            </a> 
                                            <a href="https://www.linkedin.com/in/sonia-shah-460589168/" target="_new" class="white-text" title="Sonia's LinkedIn">
                                                <i class="fa fa-linkedin" />
                                            </a>
                                            <a href="https://www.facebook.com/sonia.a.shah" target="_new" class="white-text" title="Sonia's Facebook">
                                                <i class="fa fa-facebook-official" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <h4 class="mx-auto mt-3"> Sonia Shah </h4>
                                <h5 class="mx-auto mt-1 mb-3"> Outreach Director </h5>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }

}
export default Team;
