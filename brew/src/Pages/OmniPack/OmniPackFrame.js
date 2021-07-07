import React, {useEffect, useState, useRef} from 'react';
import PageNav from '../../components/TopBar/PageNav/PageNav';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/OmniPack/Map/Map';
import Select from '../../components/Select/Select';
import {MAP_BOUNDS} from '../../components/OmniPack/Map/mapbounds';
import { Link } from 'react-router-dom';

const opack_vid_intro = require('../../assets/videos/intro-940-trim.mp4');
const motion_planning = require('../../assets/imgs/omnipack/mp_image.jpg')
const opack_vid_intro_endframe = require('../../assets/imgs/omnipack/intro-end-frame.jpg');

const setup_pic_1 = require('../../assets/imgs/omnipack/setup_pic_1.jpg');
const setup_pic_2 = require('../../assets/imgs/omnipack/setup_pic_2.jpg');
const setup_pic_3 = require('../../assets/imgs/omnipack/setup_pic_3.jpg');

import './omnipack-new.less';
import Calculations from './Calculations';

export default function OmniPackNew() {

    const introImageRef = useRef(null);

    const [introEnded, setIntroEnded] = useState(false);
    const [isPresentation, setIsPresentation] = useState(false);
    const [activeAccordionSection, setActiveAccordionSection] = useState(null);
    const [distributorsCountry, setDistributorsCountry] = useState(null);
    const [distributorsRobot, setDistributorsRobot] = useState(null);
    const [isCalcs, setIsCalcs] = useState(false);

    let lastFrameTimer = null;

    useEffect(() => {
        
        lastFrameTimer = setTimeout(onIntroNotStarted, 2000);

        document.querySelectorAll('html,body').forEach((element) => {
            element.style.background = "#FFFFFF";
        });

        return () => {
        }
    }, []);

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
            {/* <PageNav /> */}
            <section id="intro" className="omnipack-live">
                <div className="frame-wrapper">
                    <iframe src="https://native-robotics.com/demo/omni-fit.html" style={{border:0, borderColor: '#ffffff'}} scrolling="no" frameBorder="0" marginHeight="0px" marginWidth="0px" height="820px" width="100%" allowFullScreen></iframe>
                    <div className="loading-frame">Loading iFrame application.</div>
                </div>
                <div className="omnipack-intro-content">
                    <h1 className="omnipack-main-title">Working in Browser.</h1>
                    <p className="omnipack-main-description">
                        You can embed OmniPack Application in any webpage. This&nbsp;feature is supported by modern desktop browsers, like&nbsp;Google Chrome, Opera and Mozilla Firefox.
                    </p>
                </div>
            </section>
        </div>
    )
}