import React, {useEffect, useState, useRef} from 'react';
import PageNav from '../../components/TopBar/PageNav/PageNav';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/OmniPack/Map/Map';
import Select from '../../components/Select/Select';
import {MAP_BOUNDS} from '../../components/OmniPack/Map/mapbounds';
import { Link } from 'react-router-dom';

const opack_vid_intro = require('../../assets/videos/intro-940-trim.mp4');
const motion_planning = require('../../assets/imgs/omnipack/trajectories.jpg')
const opack_vid_intro_endframe = require('../../assets/imgs/omnipack/intro-end-frame.jpg');

const setup_pic_1 = require('../../assets/imgs/omnipack/setup_pic_1.jpg');
const setup_pic_2 = require('../../assets/imgs/omnipack/setup_pic_2.jpg');
const setup_pic_3 = require('../../assets/imgs/omnipack/setup_pic_3.jpg');

import './omnipack-new.less';
import Calculations from './Calculations';

export default function OmniPackNew() {

    const introVideoRef = useRef(null);
    const introImageRef = useRef(null);

    const [introEnded, setIntroEnded] = useState(false);
    const [isPresentation, setIsPresentation] = useState(false);
    const [activeAccordionSection, setActiveAccordionSection] = useState(null);
    const [distributorsCountry, setDistributorsCountry] = useState(null);
    const [distributorsRobot, setDistributorsRobot] = useState(null);
    const [isCalcs, setIsCalcs] = useState(false);

    let lastFrameTimer = null;

    useEffect(() => {
        introVideoRef.current.addEventListener('ended', onIntroEnd);
        introVideoRef.current.addEventListener('play', onIntroStart);
        
        lastFrameTimer = setTimeout(onIntroNotStarted, 2000);

        document.querySelectorAll('html,body').forEach((element) => {
            element.style.background = "#FFFFFF";
        });

        return () => {
            introVideoRef.current.removeEventListener('ended', onIntroEnd);
        }
    }, [])

    function onIntroStart() {
        clearInterval(lastFrameTimer);
    }

    function onIntroEnd() {
        setIntroEnded(true);
    }

    function onIntroNotStarted() {
        onIntroEnd();
        if (introImageRef.current) {
            introImageRef.current.className = 'animated';
        }
    }

    function toggleAccordionSection(section_id) {
        if (activeAccordionSection === section_id) {
            setActiveAccordionSection(null)
        } else {
            setActiveAccordionSection(section_id);
        }
    }

    let distCountries = [];
    for (let c in MAP_BOUNDS) {
        let label = c;
        label = c === "Belarus" ? "Republic of Belarus" : c;
        label = c === "UK" ? "United Kingdom" : c;
        distCountries.push({value: c, label: label})
    }

    function closeCalcs() {
        setIsCalcs(false);
    }

    return(
        <div className='page-container'>
            <PageNav />
            {isPresentation && 
                <div className="presentation">
                    <div className="video-frame">
                        <div className="close-video" onClick={() => setIsPresentation(false)}>
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.36 16.78L13.58 12l4.78-4.78c.44-.43.44-1.15 0-1.58a1.12 1.12 0 00-1.58 0L12 10.42 7.22 5.64a1.12 1.12 0 00-1.91.79c0 .29.1.57.33.8L10.42 12l-4.78 4.78a1.12 1.12 0 000 1.58c.43.44 1.15.44 1.58 0L12 13.58l4.78 4.78c.43.44 1.15.44 1.58 0 .44-.43.44-1.14 0-1.58z" fill="#8e8e83"/></svg>
                        </div>
                        <div>
                            <iframe width="840" height="475" src="https://www.youtube.com/embed/tLvODPdzW_8?controls=1&autoplay=0&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0&color=white" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            }

            {isCalcs && <Calculations onClose={closeCalcs} />}

            <section id="intro" className="opack-intro">
                <div className={"video-wrapper" + (introEnded ? ' end' : '')}>
                    <video 
                        muted={true} 
                        playsInline={true}
                        preload="none"
                        ref={introVideoRef}
                        autoPlay={true}
                        >
                            <source src={opack_vid_intro} type={'video/mp4'}></source>
                    </video>
                    <img ref={introImageRef} src={opack_vid_intro_endframe} onClick={() => {introVideoRef.current.play()}} />
                </div>
                <div className="omnipack-intro-content">
                    <h1 className="omnipack-main-title">Palletize like a Pro.</h1>
                    <p className="omnipack-main-description">
                        Configure your robotic palletizer in 10&nbsp;minutes. No specific knowledge required. Quickly input new box parameters. Create, save and switch between hundreds of layouts. Seamlessly connect with other equipment. And more.
                    </p>
                    <div className="presentation-buttons">
                        <div className="youtube-button" onClick={() => setIsPresentation(true)}>
                            <div className="svg-icon">
                                <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.134 21.763l-9.389 5.672a.885.885 0 01-1.339-.764V15.329a.885.885 0 011.339-.763l9.389 5.671a.893.893 0 010 1.526z" fill="#8E8E93"/><path fillRule="evenodd" clipRule="evenodd" d="M21 4.25C11.752 4.25 4.25 11.752 4.25 21c0 9.248 7.502 16.75 16.75 16.75 9.248 0 16.75-7.502 16.75-16.75 0-9.248-7.502-16.75-16.75-16.75zM6.25 21c0-8.143 6.607-14.75 14.75-14.75S35.75 12.857 35.75 21 29.143 35.75 21 35.75 6.25 29.143 6.25 21z" fill="#8E8E93"/></svg>
                            </div>
                            Watch presentation
                        </div>
                        <div className="buttons-separator">|</div>
                        <div className="try-button"><Link to="#get-omnipack">Try for free</Link></div>
                    </div>
                </div>
            </section>
            <section id="overview" className="omnipack-bordered">
                <div className="content">
                    <div className="content-text">
                        <h2>Easy. Intuitive.<br />Just like you want it.</h2>
                        <p>No code. No hustle. Zero knowledge required. Set&nbsp;up box parameters, select type of pallet, and drag & drop boxes onto the pallet. Control all of this with a touch of your finger.</p>
                    </div>
                    <div className="content-image" />
                </div>
            </section>
            <section id="runup" className="omnipack-noborders">
                <div className="content">
                    <div className="content-text">
                        <h2>Low effort.<br />High performance.</h2>
                        <p>An advanced motion planning algorithm increases robot speed by 20% and smoothens out motion by 30%. Don't take our word for it. See for your self.</p>
                        <div className="compare-table">
                            <table cellSpacing="0" frame="void" width="100%">
                                <thead>
                                    <tr>
                                        <th>Motion planning algorithm</th>
                                        <th>On</th>
                                        <th>Off</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Time required to complete the first layer</td>
                                        <td width="120">1 min 20 sec</td>
                                        <td width="120">1 min 46 sec</td>
                                    </tr>
                                    <tr>
                                        <td>Number of assembled 2 meter pallets per 24 hours using Ewellix column</td>
                                        <td>84</td>
                                        <td>72</td>
                                    </tr>
                                    <tr>
                                        <td>Distance traveled by the robot’s TCP</td>
                                        <td>TBD</td>
                                        <td>TBD</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="motion-planning-video">
                        <img src={motion_planning} />
                    </div>
                    <div className="compare-info-rows">
                        <div className="inforow-title">Motion planning algorithm (On / Off)</div>
                        <div className="inforow">
                            <h2 className='inforow-label'>Time required to complete the first layer</h2>
                            <p className='inforow-value'>1 min 20 sec / 1 min 46 sec</p>
                        </div>
                        <div className="inforow">
                            <h2 className='inforow-label'>Count of completed 2 meter pallets per 24 hours using Ewellix column</h2>
                            <p className='inforow-value'>84 / 72</p>
                        </div>
                        <div className="inforow">
                            <h2 className='inforow-label'>Distance traveled by the robot’s TCP</h2>
                            <p className='inforow-value'>TBD / TBD</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="protected" className="omnipack-bordered">
                <div className="content">
                    <div className="content-text">
                        <h2>Nothing will stop<br />your production.</h2>
                        <p>A comprehensive error handling system enables you to quickly resolve issues. Anyone at your plant can troubleshoot and resume the robot's operation. </p>
                    </div>
                    <div className="content-image protection" />
                </div>
            </section>  
            <section id="one-app" className="omnipack-fullscreen-title">
                <div className="image-cover" />
                <div className="dark-cover">
                    <h1>One little app.<br />Great many benefits.</h1>
                </div>
            </section>
            <section className="percent">
                <div className="percentage-description">
                    <h1 className="percentage">50%</h1>
                    <h2 className="description">
                        Reduction in reprogramming and maintenance costs.
                    </h2>
                    <div className="see-calcs" onClick={() => setIsCalcs(true)}>
                        <span>See our calculations</span>
                        <div className="icon-download">
                            <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 13.95a1 1 0 10-2 0v11.7l-4.86-4.82a1 1 0 00-1.4 1.42l6.56 6.51a1 1 0 001.4 0l6.57-6.5a1 1 0 10-1.41-1.43L22 25.65v-11.7z" fill="#8e8e83"/><path fillRule="evenodd" clipRule="evenodd" d="M21 4.25a16.75 16.75 0 100 33.5 16.75 16.75 0 000-33.5zM6.25 21a14.75 14.75 0 1129.5 0 14.75 14.75 0 01-29.5 0z" fill="#8e8e83"/></svg>
                        </div>
                    </div>
                </div>
                <div className="benefits">
                    <div className="benefit">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg width="48" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><path d="M41.35 20.41c-1.5-6.82-3.75-11.17-7.34-12.23a7.5 7.5 0 00-2.13-.3c-2.21 0-3.95 1.3-7.88 1.3-3.93 0-5.67-1.3-7.88-1.3-.75 0-1.5.1-2.23.3-3.59 1.06-5.8 5.41-7.34 12.23C5 27.38 5.28 32.88 8.32 33.94c2.14.74 4.04-.8 5.85-3.04 2.05-2.56 4.58-3.34 9.83-3.34s7.68.78 9.73 3.34c1.8 2.25 3.79 3.76 5.86 3.05 3.37-1.15 3.32-6.5 1.76-13.54z" stroke="url(#paint0_linear)" strokeWidth="2" strokeMiterlimit="10"/><path d="M32.2 14.77a1.64 1.64 0 11-3.28 0 1.64 1.64 0 013.28 0z" fill="url(#paint1_linear)"/><path d="M26.95 20.02a1.64 1.64 0 100-3.29 1.64 1.64 0 000 3.29z" fill="url(#paint2_linear)"/><path d="M29.65 23.35a1.64 1.64 0 101.82-2.73 1.64 1.64 0 00-1.82 2.73z" fill="url(#paint3_linear)"/><path d="M34.17 20.02a1.64 1.64 0 100-3.29 1.64 1.64 0 000 3.29z" fill="url(#paint4_linear)"/><path d="M17.13 14.44a1 1 0 10-2 0v2.94h-2.94a1 1 0 100 2h2.94v2.93a1 1 0 102 0v-2.93h2.93a1 1 0 100-2h-2.93v-2.94z" fill="url(#paint5_linear)"/></g><defs><linearGradient id="paint0_linear" x1="8.5" y1="8" x2="41.5" y2="34.5" gradientUnits="userSpaceOnUse"><stop stopColor="#FF820F"/><stop offset="1" stopColor="#FFA217"/></linearGradient><linearGradient id="paint1_linear" x1="13.5" y1="7" x2="40.5" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#FF820F"/><stop offset="1" stopColor="#FFA217"/></linearGradient><linearGradient id="paint2_linear" x1="13.5" y1="7" x2="40.5" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#FF820F"/><stop offset="1" stopColor="#FFA217"/></linearGradient><linearGradient id="paint3_linear" x1="13.5" y1="7" x2="40.5" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#FF820F"/><stop offset="1" stopColor="#FFA217"/></linearGradient><linearGradient id="paint4_linear" x1="13.5" y1="7" x2="40.5" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#FF820F"/><stop offset="1" stopColor="#FFA217"/></linearGradient><linearGradient id="paint5_linear" x1="13.5" y1="7" x2="40.5" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#FF820F"/><stop offset="1" stopColor="#FFA217"/></linearGradient><filter id="filter0_d" x="-1" y="-3" width="50" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation="2"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 0.584314 0 0 0 0 0 0 0 0 0.12 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
                            </div>
                            <p className="benefit-text">System set-up in 10 minutes.</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.4 15.66a2.02 2.02 0 01-2.83 0L29.9 14a2.02 2.02 0 010-2.85l3.78-3.77a.06.06 0 00.01-.06.06.06 0 00-.03-.05 7.1 7.1 0 00-7.6 1.48c-1.93 1.91-2.04 4.77-1.34 7.28a2 2 0 01-.56 2.01L11.32 29.97a3.03 3.03 0 104.27 4.27l12.03-12.86a2 2 0 011.99-.57c2.48.66 5.3.54 7.2-1.33 2.04-2.01 2.48-5.56 1.5-7.6a.06.06 0 00-.1-.01l-3.8 3.8z" stroke="url(#paint0_linear)" strokeWidth="2" strokeMiterlimit="10"/><path d="M25.53 23.62c3.04 2.83 6.73 6.18 8.17 7.38a1 1 0 01.07 1.48l-2.48 2.47a1.04 1.04 0 01-1.5-.05 288.11 288.11 0 00-7.37-7.95m-3.8-3.87l-2.3-2.25a1.35 1.35 0 01.02-1.93l1.16-1.13a1.34 1.34 0 011.9-.02l2.48 2.41-3.25 2.92z" stroke="url(#paint1_linear)" strokeWidth="2" strokeMiterlimit="10"/><path d="M3.29 16.36l2.18-2.13a.35.35 0 01.25-.1c.1 0 .19.03.26.1v0a.73.73 0 00.6.2c.29-.03.6-.11.79-.3.44-.43-.07-1.28.32-1.82.45-.6.94-1.16 1.47-1.68a16.1 16.1 0 015.19-3.3 7.97 7.97 0 012.99-.58c1.68 0 2.97.74 3.43 1.16.28.27.54.56.77.87a5.1 5.1 0 00-2.17-.3c-1 .08-2.19.54-2.82 1.04-1.03.81-1.48 1.9-1.55 3.32-.05 1.04.2 1.64 2.68 4.11a.49.49 0 01-.02.68l-1.36 1.34a.51.51 0 01-.7 0 19.64 19.64 0 00-3.34-2.83 3.42 3.42 0 00-1.36-.5c-.47-.05-.95.05-1.36.28a.85.85 0 00-.2.15 1.05 1.05 0 00.04 1.5l.12.11a.34.34 0 010 .5L7.32 20.3a.35.35 0 01-.25.1.36.36 0 01-.25-.1l-3.53-3.44a.36.36 0 010-.5v0z" stroke="url(#paint2_linear)" strokeWidth="2" strokeMiterlimit="10"/><defs><linearGradient id="paint0_linear" x1="7" y1="7" x2="45.41" y2="26.15" gradientUnits="userSpaceOnUse"><stop stopColor="#FF820F"/><stop offset="1" stopColor="#FFA217"/></linearGradient><linearGradient id="paint1_linear" x1="6.5" y1="7" x2="39.38" y2="24.97" gradientUnits="userSpaceOnUse"><stop stopColor="#FF820F"/><stop offset="1" stopColor="#FFA217"/></linearGradient><linearGradient id="paint2_linear" x1="4.62" y1="6.82" x2="36.16" y2="35.73" gradientUnits="userSpaceOnUse"><stop stopColor="#FF820F"/><stop offset="1" stopColor="#FFA217"/></linearGradient></defs></svg>
                            </div>
                            <p className="benefit-text">Reconfiguration in 2 minutes.</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.45 4.08L9 24.64h9.6L16.24 37.8a.18.18 0 00.1.2.17.17 0 00.21-.06L33 17.36h-9.6L25.77 4.2a.19.19 0 00-.04-.15.18.18 0 00-.14-.06.18.18 0 00-.14.08z" stroke="url(#green_paint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="green_paint" x1="9.11" y1="4.35" x2="33.26" y2="37.38" gradientUnits="userSpaceOnUse"><stop stopColor="#34C759"/><stop offset=".09" stopColor="#3ACC5F"/><stop offset="1" stopColor="#75FF98"/></linearGradient></defs></svg>
                            </div>
                            <p className="benefit-text green">20% speed increase.</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">
                            <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.94 21h9.19l3.93-7.88L21 26.26l3.94-7.88 2.62 5.25h10.5M28.95 6.57c-5.32 0-7.95 5.25-7.95 5.25s-2.63-5.25-7.95-5.25a7.93 7.93 0 00-7.8 7.94c-.09 8.97 7.11 15.35 15.01 20.71a1.31 1.31 0 001.48 0c7.9-5.36 15.1-11.74 15.01-20.7a7.93 7.93 0 00-7.8-7.95z" stroke="url(#green_paint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            <p className="benefit-text green">Up to 30% increase in robot's useful life.</p>
                        </div>
                    </div>
                    <div className="benefit">
                        <div className="benefit-item">
                            <div className="benefit-icon">
                                <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.95 16.23a2.31 2.31 0 01-3.27 0l-1.91-1.91a2.31 2.31 0 010-3.26l4.33-4.34a.07.07 0 00.02-.07.07.07 0 00-.04-.05 8.15 8.15 0 00-8.73 1.7c-2.2 2.19-2.33 5.48-1.52 8.35a2.3 2.3 0 01-.65 2.31L7.17 29.93a3.47 3.47 0 104.9 4.9L23.16 22.8a2.3 2.3 0 012.28-.65c2.85.76 6.1.62 8.27-1.53 2.34-2.3 2.84-6.39 1.7-8.72a.07.07 0 00-.08-.04.07.07 0 00-.03.02l-4.35 4.36z" stroke="url(#blue_gradient)" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/><defs><linearGradient id="blue_gradient" x1="6.07" y1="6.05" x2="35.95" y2="35.93" gradientUnits="userSpaceOnUse"><stop stopColor="#00C2FF"/><stop offset="1" stopColor="#A0E8FF"/></linearGradient></defs></svg>
                            </div>
                            <p className="benefit-text blue">Comprehensive error handling.</p>
                        </div>
                        <div className="benefit-item">
                            <div className="benefit-icon">
                            <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.48 15.77a.89.89 0 00-1.34-1.16l-7.43 8.59-2.9-2.85a.89.89 0 10-1.24 1.27l3.57 3.5a.89.89 0 001.3-.05l8.04-9.3z" fill="url(#blue_gradient)"/><path fillRule="evenodd" clipRule="evenodd" d="M21.36 5.08a.89.89 0 00-.72 0C14.84 7.7 12.22 8.54 5.8 9.69c-.4.07-.7.41-.73.82a26.18 26.18 0 0015.6 26.43c.21.08.45.08.66 0a26.18 26.18 0 0015.6-26.43.89.89 0 00-.73-.82c-6.42-1.15-9.04-2-14.84-4.61zM21 35.15A24.37 24.37 0 016.8 11.31c5.95-1.1 8.73-2 14.2-4.45a51.44 51.44 0 0014.2 4.45A24.37 24.37 0 0121 35.15z" fill="url(#blue_gradient)"/></svg>
                            </div>
                            <p className="benefit-text blue">Troubleshooting without 3rd parties.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="installation" className="omnipack-installation">
                <div className="installation-container">
                    <div className="left-side">
                        <div>
                            <h2 className="subhead">Installation</h2>
                            <div className="description-content">
                                <h1>Plug and play.</h1>
                                <p className="min-description">
                                    To set everything up, we use a Full HD touchscreen and a super fast Intel NUC with OmniPack installed.
                                </p>
                                <div className="accordion">
                                    <div className={"accordion-section" + (activeAccordionSection === 1 ? ' active' : '')}>
                                        <div className="accordion-section--item" onClick={() => toggleAccordionSection(1)}>
                                            <p>Full HD touchscreen</p>
                                            <div className="arrow-icon">
                                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.2L6.64 9.73a1 1 0 00-1.28 1.54l6 5a1 1 0 001.28 0l6-5a1 1 0 10-1.28-1.54L12 14.2z" fill="#8E8E93"/></svg>
                                            </div>
                                        </div>
                                        <div className="accordion-section--content" onClick={() => toggleAccordionSection(1)}>
                                            <p>
                                                Get a 15" Full HD touchscreen to connect to the Intel NUC via HDMI. We provide an intuitive interface, crisp animations, and exceptional user experience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"accordion-section" + (activeAccordionSection === 2 ? ' active' : '')}>
                                        <div className="accordion-section--item" onClick={() => toggleAccordionSection(2)}>
                                            <p>Intel NUC with OmniPack</p>
                                            <div className="arrow-icon">
                                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.2L6.64 9.73a1 1 0 00-1.28 1.54l6 5a1 1 0 001.28 0l6-5a1 1 0 10-1.28-1.54L12 14.2z" fill="#8E8E93"/></svg>
                                            </div>
                                        </div>
                                        <div className="accordion-section--content" onClick={() => toggleAccordionSection(2)}>
                                            <p>
                                            OmniPack runs on a powerful Intel NUC computer. This beast has a top-level processor inside, a 128 GB SSD for all your different layouts and a 16 GB RAM to achieve the best performance. Intel NUC is connected to the robot via Ethernet.  
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="begin-section">
                            <Link to="#get-omnipack">
                                <div className="begin-button">Begin for free</div>
                            </Link>
                            <p>A demo unit is free for the first month for any tests outside of production.</p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="image-container">
                            <div className={"clickable nuc" + (activeAccordionSection === 2 ? ' hidden' : '') + (activeAccordionSection === 1 ? ' moved' : '')} onClick={() => toggleAccordionSection(2)}>2</div>
                            <div className={"clickable screen" + (activeAccordionSection === 1 ? ' hidden' : '') + (activeAccordionSection === 2 ? ' moved' : '')} onClick={() => toggleAccordionSection(1)}>1</div>
                            <img src={setup_pic_1} alt="OmniPack setup image. 1 of 3" className={(activeAccordionSection === null ? ' active' : '')} />
                            <img src={setup_pic_2} alt="OmniPack setup image. 2 of 3" className={(activeAccordionSection === 1 ? ' active' : '')} />
                            <img src={setup_pic_3} alt="OmniPack setup image. 3 of 3" className={(activeAccordionSection === 2 ? ' active' : '')} />
                        </div>
                    </div>
                </div>
                <div className="begin-section--mobile">
                    <Link to="#get-omnipack">
                        <div className="begin-button">Begin for free</div>
                    </Link>
                    <p>A demo unit is free for the first month for any tests outside of production.</p>
                </div>
            </section>
            <section id="trusted" className="omnipack-trusted">
                <div className="omnipack-trusted--container">
                    <div className="trusted-tab ur-plus">
                        <h2 className="trusted-tab-subhead">Universal Robots+</h2>
                        <div className="trusted-content">
                            <h1 className="trusted-content--title">Trusted.</h1>
                            <p>OmniPack software is certified by the leading producer of collaborative robots. Our software is recognized by the distributors and integrators all over the world.</p>
                            <figure className="ur-plus-image"></figure>
                            <div className="ur-link">
                                <a href="https://www.universal-robots.com/plus/urplus-components/software/omnipack/" target="_blank">Read more on universal-robots.com</a>
                                <div className="link-icon">
                                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.75 3a1 1 0 011-1H21a1 1 0 011 1v5.25a1 1 0 11-2 0V5.41l-8.8 8.8a1 1 0 01-1.4-1.42L18.58 4h-2.84a1 1 0 01-1-1z" fill="#2A475B"/><path d="M4.88 7a.88.88 0 00-.88.88v11.25a.87.87 0 00.88.87h11.25a.87.87 0 00.87-.88V10.5a1 1 0 112 0v8.63A2.88 2.88 0 0116.12 22H4.88A2.87 2.87 0 012 19.12V7.88A2.87 2.87 0 014.88 5h7.85a1 1 0 110 2H4.87z" fill="#2A475B"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="trusted-tab third-parties gray">
                        <h2 className="trusted-tab-subhead">Supporting third party products</h2>
                        <div className="trusted-content">
                            <h1 className="trusted-content--title">Work the way you like.</h1>
                            <p className="gray">OmniPack has advanced settings and callback functionality, and also supports Modbus TCP and Ethernet IP protocols, as well as Omron and Siemens PLC communication. We can include your custom hardware in OmniPack.</p>
                            <figure className="third-parties-image"></figure>
                        </div>
                    </div>
                </div>
            </section>
            <section id="distributors" className="omnipack-distributors">
                <div className="content">
                    <div className="intro-filters">
                        <h1>Find distributor.</h1>
                        <div className="filters">
                            <div className="filter-select">
                                <Select label="Country" options={distCountries} onChange={(val) => {setDistributorsCountry(val)}} />
                            </div>
                            <div className="filter-select">
                                <Select 
                                    label="Robot producer" 
                                    options={[{value: 'UR', label: 'Universal Robots'}]}
                                    onChange={(val) => {setDistributorsRobot(val)}} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="google-maps-container">
                    <Map country={distributorsCountry} robot={distributorsRobot} />
                </div>
            </section>
            <section id="get-omnipack" className="omnipack-begin">
                <div className="container">
                    <ContactForm demoUrl="opackDemo" description={"You can get a one month OmniPack demo for free. Drop us a message - we will be happy to speak with you and showcase our solutions."} title="Begin for free" product="OmniPack" />
                    <div className="what-in-box">
                        <h1>What's in the Box.</h1>
                        <div className="box-content">
                            <div className="box-content--item">
                                <figure className="item-cover omnipack"></figure>
                                <p className="label">OmniPack application</p>
                            </div>
                            <div className="box-content--item">
                                <figure className="item-cover intel-nuc"></figure>
                                <p className="label">Intel NUC PC</p>
                            </div>
                        </div>
                        <div className="box-content-description">
                            1. You will typically receive and Intel NUC PC with a pre-installed Unix-based operating system. The Intel NUC will have an i7 8th Gen processor, a 16 GB RAM and a 128 GB SSD. We constantly monitor the market for the best hardware, so your PC may have slightly different parameters.<br /><br />
                            2. You will need to download the latest OmniPack update online (~1 GB) and copy it onto a USB 3.0 flash drive. After this, please follow our guide (provided separately) to install OmniPack.<br /><br />
                            3. To connect OmniPack to your robot, you will need several additional devices. For the purposes of the demo, you can use a standard computer monitor, keyboard and mouse. For commercial units we recommend using a 15" Full HD HDMI compatible touchscreen. Additionally, you will need one Ethernet & one HDMI cable (each no longer than 1 meter).
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}