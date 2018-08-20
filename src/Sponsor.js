import React, { Component } from 'react';
import Slider from "react-slick";
import './Sponsor.css';
import CSImage from './static/sponsors/uclcs.svg';

class Sponsor extends React.Component {

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
                            <img src={CSImage} alt="UCL Computer Science" class="image" />
                            <div class="overlay">
                                <div class="text">Department of Computer Science UCL</div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div class="container1">
                            <img src={CSImage} alt="UCL Computer Science" class="image" />
                            <div class="overlay">
                                <div class="text">Department of Computer Science UCL</div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div class="container1">
                            <img src={CSImage} alt="UCL Computer Science" class="image" />
                            <div class="overlay">
                                <div class="text">Department of Computer Science UCL</div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div class="container1">
                            <img src={CSImage} alt="UCL Computer Science" class="image" />
                            <div class="overlay">
                                <div class="text">Department of Computer Science UCL</div>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div class="container1">
                            <img src={CSImage} alt="UCL Computer Science" class="image" />
                            <div class="overlay">
                                <div class="text">Department of Computer Science UCL</div>
                            </div>
                        </div>
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

export default Sponsor;