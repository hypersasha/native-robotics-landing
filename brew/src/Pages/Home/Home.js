import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Customers from '../../components/Customers/Customers';
import ContactForm from '../../components/ContactForm/ContactForm';

import './home.less';

const opack_vid = require('../../assets/videos/omnipack-preview.mp4'); 
const omnifit_preview = require('../../assets/imgs/omnifit-preview.jpg');
const omnipack_video_poster = require('../../assets/imgs/omnipack-poster.jpg');


export default function Home() {
    useEffect(() => {

        document.querySelectorAll('html,body').forEach((element) => {
            element.style.background = "#FFFFFF";
        });

        /*window.addEventListener('scroll', () => {
            let animHeight = window.innerHeight;
            let frameHeight = animHeight / 60;
            let bg_width = 440;

            let doc = document.documentElement;
            let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

            let current_scroll = window.innerHeight - 140 - robAnimRef.current.getBoundingClientRect().top;
            if (current_scroll > 0 && current_scroll < animHeight) {
                let frame = Math.trunc(current_scroll / frameHeight);
                robAnimRef.current.style.backgroundPositionX = "-" + (bg_width * frame) + 'px';
            }
            
        });*/
    }, [])

    return(
        <div>
            <div className="page-container">
                <div className="link-to-product">
                    <Link to="/omnipack" onClick={(e,d) => console.log(d)}>
                        <section className="page-container--section product omnipack" id="products">
                            <div className="video-wrapper">
                                <video 
                                    muted={true} 
                                    playsInline={true} 
                                    loop={true}
                                    preload="metadata" 
                                    className="opack_preview_vid" 
                                    controls={false}
                                    autoPlay={true}
                                    >
                                        <source src={opack_vid} type={'video/mp4'}></source>
                                </video>
                                <img src={omnipack_video_poster} className="opack_preview_image" alt="OmniPack preview image." />
                                <div className="video-cover" />
                            </div>
                            <div className="product-card omnipack">
                                <h1 className="product-card--name">
                                    OmniPack
                                </h1>
                                <p className="product-card--description">
                                    Increase the ROI on your palletizer by&nbsp;30% with a&nbsp;cutting-edge software.
                                </p>
                                <div className="product-card--actions">
                                    
                                        <div className="learn-more">
                                            <span>Learn more </span>
                                            <div className="arrow">
                                                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.69832 12L5.2318 17.3599C4.87824 17.7841 4.93556 18.4147 5.35984 18.7683C5.78412 19.1218 6.41468 19.0645 6.76825 18.6402L11.7682 12.6402C12.0773 12.2694 12.0773 11.7307 11.7682 11.3599L6.76825 5.35985C6.41468 4.93557 5.78412 4.87825 5.35984 5.23182C4.93556 5.58538 4.87824 6.21594 5.2318 6.64022L9.69832 12Z" fill="#ff9500"/>
                                                </svg>
                                            </div> 
                                        </div>
                                    <div className="get-demo">Get a demo</div>
                                </div>
                            </div>
                        </section>
                    </Link>
                </div>
                
                <div className="link-to-product">
                    <Link to="/omnifit">
                        <section className="page-container--section product mirror">
                            <div className="video-wrapper omnifit">
                                <img src={omnifit_preview} alt="OmniFit demonstration image" />
                            </div>
                            <div className="product-card">
                                <h1 className="product-card--name">
                                    OmniFit
                                </h1>
                                <p className="product-card--description">
                                    Boost your sales with AR&nbsp;experience.
                                </p>
                                <div className="product-card--actions">
                                    
                                        <div className="learn-more">
                                            <span>Learn more</span>
                                            <div className="arrow">
                                                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.69832 12L5.2318 17.3599C4.87824 17.7841 4.93556 18.4147 5.35984 18.7683C5.78412 19.1218 6.41468 19.0645 6.76825 18.6402L11.7682 12.6402C12.0773 12.2694 12.0773 11.7307 11.7682 11.3599L6.76825 5.35985C6.41468 4.93557 5.78412 4.87825 5.35984 5.23182C4.93556 5.58538 4.87824 6.21594 5.2318 6.64022L9.69832 12Z" fill="#ff9500"/>
                                                </svg>
                                            </div> 
                                        </div>
                                    <div className="get-demo">Get a demo</div>
                                </div>
                            </div>
                        </section>
                    </Link>
                </div>
                
                
                {/* Company */}
                <section id="company" className="page-container--section company">
                    <div className="about-company--container">
                        <div className="company-short-description">
                            <h2 className="subheader">Native Robotics company</h2>
                            <h1 className="mainheader">Perfect apps for&nbsp;robots</h1>
                            <p>With our apps anyone in your team can configure a robot from zero in 10 minutes.<br/><br/>Our algorithms will automatically calculate optimal trajectories for every robot move. This will increase your robot’s life by up to 30%.</p>
                        </div>
                        <div className="robot-anim">
                        <div className="abstract" />
                        <div className="robot-steel" />
                        </div>
                        
                    </div>
                </section>
                
                {/* Customers */}
                <section id="customers" className="page-container--section customers">
                    <div className="customers-container">
                        <h2 className="subheader">Customers</h2>
                        <div className="description-map">
                            <div className="description">
                                <h1 className="mainheader">All over the world</h1>
                                <p>Native Robotics software is recognized by the distributors and integrators all over the&nbsp;world.</p>
                            </div>
                            <div className="call-to-action">
                                <Link to="#contacts">
                                    <div className="action-button-orange">Become a distributor</div>
                                </Link>
                            </div>
                        </div>
                        <Customers />
                    </div>
                </section>

                {/* Contacts */}
                <section id="contacts" className="page-container--section contacts">
                    <h2 className="subheader">Contacts</h2>
                    <div className="contacts-container">
                        <ContactForm demoUrl="opackDemo" title="Request a feedback" product="Homepage" />
                        <div className="map-links">
                            <div className="map">
                                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3fc5590513f1a4df2a582556a6ea6c8d2c0307220dd5b8e06d7d9d7dc2312ec&amp;source=constructor&amp;lang=en_US" frameBorder="0"></iframe>
                            </div>
                            <div className="links">
                                <div className="link">
                                    <div className="icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2C10.4794 2 6 6.03188 6 11C6 19 16 30 16 30C16 30 26 19 26 11C26 6.03188 21.5206 2 16 2ZM16 16C15.2089 16 14.4355 15.7654 13.7777 15.3259C13.1199 14.8864 12.6072 14.2616 12.3045 13.5307C12.0017 12.7998 11.9225 11.9956 12.0769 11.2196C12.2312 10.4437 12.6122 9.73098 13.1716 9.17157C13.731 8.61216 14.4437 8.2312 15.2196 8.07686C15.9956 7.92252 16.7998 8.00173 17.5307 8.30448C18.2616 8.60723 18.8864 9.11992 19.3259 9.77772C19.7654 10.4355 20 11.2089 20 12C19.9988 13.0605 19.577 14.0773 18.8271 14.8271C18.0773 15.577 17.0605 15.9988 16 16Z" fill="#8E8E93"/>
                                        </svg>
                                    </div>
                                    <p>2 Oscar Wilde Road, Reading, UK</p>
                                </div>
                                <div className="link">
                                    <div className="icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.9662 3.04639C8.78869 3.04639 2.96619 8.86576 2.96619 16.0464C2.96619 23.227 8.78619 29.0464 15.9662 29.0464C23.1462 29.0464 28.9662 23.2264 28.9662 16.0464C28.9662 8.86639 23.1443 3.04639 15.9662 3.04639ZM23.7674 15.7501C23.5893 17.7895 22.7181 18.8564 22.0174 19.3914C21.3168 19.9264 20.4756 20.1614 19.7499 20.0314C19.4137 19.9712 19.0925 19.8453 18.8049 19.661C18.5173 19.4766 18.2688 19.2374 18.0737 18.957C17.3383 19.6723 16.3495 20.0672 15.3237 20.0551C14.8708 20.0586 14.4222 19.9667 14.0071 19.7855C13.592 19.6043 13.2197 19.3378 12.9143 19.0033C12.2031 18.227 11.8518 17.1058 11.9568 15.9264C12.1443 13.7389 13.8887 12.3395 15.5112 12.0839C17.2112 11.8158 18.7756 12.4926 19.4424 13.3001L19.6831 13.5914L19.2868 16.7401C19.2124 17.6364 19.4918 18.2076 20.0549 18.3089C20.2043 18.3351 20.5612 18.3008 20.9531 18.0008C21.3731 17.6789 21.8993 17.0008 22.0218 15.5964C22.1687 13.9376 21.7499 12.522 20.8187 11.5033C19.8506 10.447 18.3756 9.88826 16.5543 9.88826C13.1793 9.88826 10.1912 12.6651 9.89306 16.0758C9.75056 17.7133 10.2474 19.2433 11.2931 20.3839C12.3156 21.5001 13.7499 22.1176 15.3343 22.1176C16.5218 22.1176 17.2474 21.9895 18.4268 21.5689C18.6455 21.491 18.8861 21.5031 19.0958 21.6026C19.3055 21.7021 19.467 21.8809 19.5449 22.0995C19.6228 22.3181 19.6107 22.5588 19.5112 22.7685C19.4117 22.9782 19.233 23.1397 19.0143 23.2176C17.6506 23.7033 16.7218 23.8676 15.3343 23.8676C13.2543 23.8676 11.3612 23.0514 10.0031 21.5695C8.62494 20.0626 7.96369 18.0589 8.14994 15.9264C8.33181 13.8433 9.30306 11.887 10.8856 10.4189C12.4681 8.95076 14.4837 8.13826 16.5543 8.13826C18.8793 8.13826 20.7999 8.89326 22.1087 10.3214C23.3643 11.6908 23.9531 13.6183 23.7674 15.7501Z" fill="#8E8E93"/>
                                            <path d="M15.7856 13.8124C14.8588 13.958 13.8131 14.8024 13.7019 16.0786C13.6394 16.7699 13.8269 17.4049 14.2063 17.8205C14.3477 17.9763 14.5206 18.1 14.7137 18.1836C14.9067 18.2671 15.1153 18.3085 15.3256 18.3049C16.595 18.3049 17.4963 17.3712 17.6225 15.9261C17.6264 15.8826 17.6335 15.8393 17.6438 15.7968L17.8438 14.2061C17.2242 13.84 16.4966 13.7008 15.7856 13.8124Z" fill="#8E8E93"/>
                                        </svg>
                                    </div>
                                    <a href="mailto:hello@native-robotics.com">hello@native-robotics.com</a>
                                </div>
                                <div className="link">
                                    <div className="icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.0805 4H6.05071C4.95625 4 4 4.7875 4 5.8691V25.9434C4 27.0309 4.95625 28 6.05071 28H26.0746C27.175 28 28 27.0244 28 25.9434V5.8691C28.0064 4.7875 27.175 4 26.0805 4ZM11.4395 24.0051H8.00124V13.315H11.4395V24.0051ZM9.83928 11.6896H9.81463C8.71428 11.6896 8.00178 10.8705 8.00178 9.84517C8.00178 8.80106 8.73303 8.00124 9.85803 8.00124C10.983 8.00124 11.6714 8.79517 11.6961 9.84517C11.6955 10.8705 10.983 11.6896 9.83928 11.6896ZM24.0051 24.0051H20.5669V18.16C20.5669 16.7596 20.0666 15.8028 18.8227 15.8028C17.8723 15.8028 17.3098 16.4457 17.0596 17.0719C16.9659 17.2969 16.9407 17.6034 16.9407 17.9162V24.0051H13.5025V13.315H16.9407V14.8027C17.441 14.0902 18.2227 13.0648 20.0414 13.0648C22.2984 13.0648 24.0057 14.5525 24.0057 17.7598L24.0051 24.0051Z" fill="#8E8E93"/>
                                        </svg>
                                    </div>
                                    <a href="https://linkedin.com/company/native-robotics/" target="_blank">LinkedIn Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}