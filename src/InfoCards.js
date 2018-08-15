import React, { Component } from 'react';
import './InfoCards.css';
import HistoryIcon from './static/scroll.svg';
import EventIcon from './static/event.svg';
import CodingIcon from './static/coding.svg';

class InfoCards extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="container">

                    <div class="row justify-content-center mb-3">
                        <div class="col-2 m-0">
                            <img src={HistoryIcon} class="pol-image" />
                        </div>
                        <div class="col-7 m-0 pol-text theme-color white-text align-self-center">
                            Founded in 1999, TechSoc is a well-established society within the university with
                             a mission to promote technology both within and beyond UCL. Through our activities,
                              we aim to advance the technological capabilities of our members, make sophisticated
                               technology accessible to as many people as possible and champion a spirit of cooperation,
                                innovation and practical problem solving that sits at the core of everything we do.
                        </div>
                    </div>

                    <div class="row justify-content-center mb-3">
                        <div class="col-7 m-0 pol-text theme-color white-text align-self-center">
                            Our events range from the small and specialised to the huge and open-to-all.
                            We host talks from our developers and companies at the bleeding edge of their fields,
                             tech projects for anyone that wants to get started, workshops for those wanting to develop their skills,
                              and socials for everyone to enjoy themselves. We also host a number of careers events with our sponsors
                               to give you unique opportunities to network and secure internships and jobs.
                        </div>
                        <div class="col-2 m-0">
                            <img src={EventIcon} class="pol-image" />
                        </div>
                    </div>

                    <div class="row justify-content-center mb-3">
                        <div class="col-2 m-0">
                            <img src={CodingIcon} class="pol-image" />
                        </div>
                        <div class="col-7 m-0 pol-text theme-color white-text align-self-center">
                            Of our most high-profile events are hackathons, competitive 24-hour sprints 
                            where you work with a team to create something awesome. If you think you’re 
                            not good enough for this, you’re wrong. Hackathons are all about learning, building
                             something with your new knowledge, and sharing the result with others. You don’t have to be a
                             coding pro to have fun, just an open mind and your best ideas.
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default InfoCards;