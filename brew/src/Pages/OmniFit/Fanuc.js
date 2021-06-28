import React, {Component} from 'react';
import './omnifit.less';
import ActionButton from "../../components/OmniFit/ActionButton/ActionButton";
import Title from "../../components/OmniFit/Title/Title";
import AppTab from "../../components/OmniFit/ApplicationTab/AppTab";
import Padview from "../../components/OmniFit/Padview/Padview";

import axios from 'axios';
import ContactForm from '../../components/ContactForm/ContactForm';

const logoLetter = require('../../assets/logo-letter.svg');

const arPreview = require('../../assets/imgs/omnifit/ipad-fanuc.jpg');

const previewPallets = require('../../assets/imgs/omnifit/fanuc-pallet.jpg');
const previewCaseFold = require('../../assets/imgs/omnifit/fanuc-white.jpg');
const previewTend = require('../../assets/imgs/omnifit/fanuc-stand.jpg');
const previewLayout = require('../../assets/imgs/omnipack/pallet-screen.jpg');
const previewAR = require('../../assets/imgs/omnifit/fanuc-ar-conv.jpg');
const photoTend = require('../../assets/imgs/omnifit/fanuc-ar-close.jpg');
const photoExhibit = require('../../assets/imgs/omnifit/photo-exhibit.jpg');
const outlook = require('../../assets/imgs/omnifit/outlook.jpg');

const robovid = require('../../assets/videos/robotend.mp4');
const vidpreview = require('../../assets/imgs/omnifit/vidpreview.jpg');

class Omnifit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            mail: '',
            mailValid: true,
            nameValid: true,
            formSent: false,
            isVideoPlaying: false,
            isBadge: false,
            headerLinks: [
                {id: 'overview', label: 'Overview'},
                {id: 'why-omnifit', label: 'Why OmniFit'},
                {id: 'features', label: 'Features'}
            ]
        };

        this.sendRequest = this.sendRequest.bind(this);
        this.onChange = this.onChange.bind(this);
        this.navToSection = this.navToSection.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkName = this.checkName.bind(this);
        this.onPageScrolling = this.onPageScrolling.bind(this);
        this.videoRef = React.createRef();
        this.videoPlaying = false;

    }

    componentDidMount() {
        document.querySelectorAll('html,body').forEach((element) => {
            element.style.background = "#000000";
        });

        window.scrollTo(0,0);

        axios.get('https://nr-form-api-test.now.sh/allDemoRequests')
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.error(err);
            });

        this.videoRef.current.pause();

        window.addEventListener('scroll', this.onPageScrolling, {passive: true});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onPageScrolling);
    }

    onPageScrolling() {
        let position = this.videoRef.current.getBoundingClientRect();
            // checking for partial visibility
            if(position.top < window.innerHeight && position.bottom >= 0) {
                if (this.videoPlaying === false) {
                    this.videoPlaying = true;
                    this.videoRef.current.play();
                }
            }
    }

    onChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    checkEmail(e) {
        const value = this.state.mail;
        this.setState({
            mailValid: this.validateEmail(value)
        })
    }

    checkName(e) {
        const value = this.state.name;
        this.setState({
            nameValid: (value.trim().length > 2)
        });
    }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    navToSection(section_id) {
        document.getElementById(section_id).scrollIntoView({block: 'start'});
    }

    sendRequest() {

        this.checkEmail();
        this.checkName();

        if (!this.state.mailValid || !this.state.nameValid) {
            return false;
        }

        if (this.state.name.trim().length === 0 || this.state.mail.trim().length === 0) {
            return false;
        } else {
            let name = this.state.name.trim();
            let mail = this.state.mail.trim();
            console.log('Sending data: ' + name + ' - ' + mail);

            if (name !== 'Avo Cado') {
                axios.post('https://nr-form-api-test.now.sh/requestDemo', {
                        name: name,
                        email: mail
                    }
                ).then((response) => {
                    console.log(response);
                    this.setState({
                        formSent: true
                    })
                }).catch((err) => {
                    console.error(err);
                });
            }

            // Send bot notification
            axios.post('https://cado.starcat.now.sh/api/ofit', {
                name: name,
                email: mail,
                product: 'OmniFit'
            }, {
                headers: {'content-type': 'application/x-www-form-urlencoded'}
            }).then(response => {
                if (response.status === 200) {
                    console.log('Bot will send notifications');
                } else {
                    console.error('Something went wrong on sending notifications.');
                }
            });
        }
    }


    render() {
        return (
            <div id={'omnifit-page'}>
                {this.state.isBadge && 
                <div className="omnipack-badge">
                    <div className="badge-container">
                        <div className="left-side">
                            <div className="logo">
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.64 10.0693H9.83395C10.0265 10.0693 10.2112 10.1462 10.3473 10.2831C10.4835 10.42 10.56 10.6057 10.56 10.7993V11.9998H8.64V10.0693Z" fill="#ffffff"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.24564 23.0999V6.06163H12.562C12.9323 6.0622 13.2872 6.20738 13.549 6.46533C13.8109 6.72329 13.9582 7.07299 13.9588 7.4378V15.271H10.6753L13.9544 23.0999H19.2V4.53255C19.2006 3.57007 18.8132 2.64675 18.1231 1.96556C17.433 1.28437 16.4965 0.90106 15.5196 0.899902H0V23.0999H5.24564Z" fill="#ffffff"/>
                                </svg>
                            </div>
                            <div className="title-desc">
                                <div className="badge-title">OmniPack</div>
                                <div className="description">
                                    Powerful palletizing tool.
                                </div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="description">
                                Setup your palletizing stand in a few minutes.
                            </div>
                            <div className="action-button"><a href="/omnipack"></a><span>Watch more</span></div>
                        </div>
                    </div>
                </div>
                }

                <section className="nr-fanuc">
                    <div className="nr-logo">
                        <a href="/"></a>
                        <svg width="199" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 13.22h1.66c.27 0 .53.1.72.3.19.2.3.47.3.75V16H12v-2.78z" fill="#040506"/><path fillRule="evenodd" clipRule="evenodd" d="M7.3 32V7.44h10.17c.51 0 1 .21 1.37.58a2 2 0 01.57 1.4v11.3h-4.57L19.4 32h7.3V5.24c0-1.4-.54-2.72-1.5-3.7A5.07 5.07 0 0021.58 0H0v32h7.3z" fill="#040506"/><path d="M174.1 9.92c.86 0 1.56-.72 1.56-1.6 0-.88-.7-1.6-1.56-1.6-.86 0-1.56.72-1.56 1.6 0 .88.7 1.6 1.56 1.6zM78.73 9.92c.87 0 1.57-.72 1.57-1.6 0-.88-.7-1.6-1.57-1.6-.86 0-1.56.72-1.56 1.6 0 .88.7 1.6 1.56 1.6z" fill="#040506"/><path fillRule="evenodd" clipRule="evenodd" d="M45.74 26V9.2h2.98a2 2 0 011.99 2.02V26h3.4V10.28a4.55 4.55 0 00-4.47-4.57h-7.3V26h3.4z" fill="#040506"/><path d="M140.33 5.79h3.19v6.52c.42-.44.92-.66 1.49-.8a4.29 4.29 0 013.4.36c.93.58 1.57 1.6 1.78 2.68.21.87.14 1.74.14 2.6v3.41c0 1.09.07 2.1-.35 3.12a3.87 3.87 0 01-2.06 2.32 4.18 4.18 0 01-4.97-1.16c-.07.43-.14.87-.28 1.3h-2.41c.07-6.88.07-13.62.07-20.35zm4.68 8.54c-.64.08-1.14.51-1.42 1.1-.14.28-.14.57-.14.86v5.29c0 .8.64 1.45 1.35 1.66.63.15 1.34.08 1.77-.43.36-.36.5-.94.5-1.45V16c0-.5-.14-1.01-.5-1.3-.35-.37-1-.44-1.56-.37zM68.8 5.79H72v5.8h2.76v2.74H72v7.1c0 .44.07.87.36 1.16.28.36.78.44 1.2.5h1.5v3.05c-1 0-2.06.07-3.06-.14a4.66 4.66 0 01-2.2-1.16c-.85-.94-1.06-2.32-1.06-3.55.07-2.46.07-14.34.07-15.5zM164.17 5.79h3.2v5.8h2.76v2.74h-2.77v7.17c0 .44.14 1.02.57 1.24.35.29.78.29 1.2.29h1.28v3.04c-1 0-1.98.07-2.98-.15a3.68 3.68 0 01-3.2-2.97c-.13-.58-.13-1.23-.13-1.8.07-2.33.07-14.2.07-15.36zM57.38 13.32a4.52 4.52 0 013.4-1.96c1.2-.14 2.49 0 3.55.58a3.7 3.7 0 011.84 2.18c.29.72.36 1.45.36 2.17v9.78h-2.41c-.07-.5-.22-.94-.29-1.45a4.84 4.84 0 01-2.2 1.6c-.7.21-1.49.21-2.2.07a3.74 3.74 0 01-2.34-1.24c-.7-.86-.85-2.02-.7-3.11a4.16 4.16 0 011.77-2.83c1.49-1.15 3.33-1.66 5.1-2.02 0-.58.08-1.16-.14-1.74-.14-.44-.5-.73-.92-.8-.7-.22-1.56-.14-2.06.5-.42.44-.42 1.1-.42 1.67h-3.2c.08-1.3.22-2.46.86-3.4zm3.69 7.1c-.5.22-1.07.58-1.28 1.16-.14.43-.14.94.07 1.3.28.36.7.44 1.06.44a2.7 2.7 0 001.78-.66c.35-.36.64-.8.64-1.3v-1.67c-.78.15-1.56.37-2.27.73zM99.1 11.36c1.28-.14 2.55 0 3.69.66.85.5 1.56 1.3 1.91 2.24.22.65.29 1.3.29 1.96v3.33H98.1v2.03c0 .5.2 1.01.56 1.3.5.36 1.07.44 1.7.36.5-.07 1-.43 1.21-.94.22-.36.22-.8.22-1.23h3.19a5.6 5.6 0 01-.78 3.19 4.56 4.56 0 01-3.05 1.95c-1.28.22-2.7.15-3.83-.5a4.21 4.21 0 01-2-2.18 5.24 5.24 0 01-.35-2.1V16c0-1.09.29-2.17 1-3.04a4.7 4.7 0 013.12-1.6zm-.57 3.55c-.35.51-.35 1.16-.35 1.74h3.69c0-.58 0-1.16-.29-1.66-.28-.51-.85-.73-1.42-.73-.63 0-1.27.15-1.63.65zM132.66 11.3a5.81 5.81 0 013.76.86 4.48 4.48 0 011.7 2.54c.22.72.15 1.52.15 2.31v4.06c0 .58 0 1.23-.14 1.81a4.6 4.6 0 01-1.78 2.54 5.87 5.87 0 01-6.88-.58 4.66 4.66 0 01-1.14-2.1c-.14-.73-.14-1.52-.14-2.25v-4.56c0-1.23.43-2.47 1.28-3.26a4.93 4.93 0 013.2-1.38zm.15 3.03c-.43.08-.86.3-1.14.66-.21.36-.28.8-.28 1.23v4.27c0 .58-.08 1.16.14 1.74.14.58.64.94 1.2 1.09.57.07 1.28.07 1.78-.3a2 2 0 00.64-1.52v-5.36c0-.5-.08-1-.43-1.3-.57-.58-1.28-.58-1.91-.5zM156.65 11.3a5.96 5.96 0 013.69.86 4.53 4.53 0 011.77 2.6c.14.66.14 1.31.14 1.96v3.7c0 .8.07 1.6-.14 2.39a4.33 4.33 0 01-1.7 2.6 5.7 5.7 0 01-3.9.88 4.65 4.65 0 01-3.2-1.67c-.7-.87-1-1.96-1-3.04V16c0-1.23.43-2.46 1.28-3.26a4 4 0 013.06-1.45zm.14 3.03c-.43.08-.92.3-1.14.73-.28.5-.21 1.08-.28 1.6v4.05c0 .58-.07 1.16.14 1.66.21.51.71.87 1.2.95.57.07 1.28.07 1.78-.37.43-.36.57-.94.57-1.45v-5.36c0-.5-.14-1-.5-1.37-.5-.5-1.2-.5-1.77-.44zM179.7 12.38a5.3 5.3 0 013.56-1.09c1.13 0 2.27.36 3.12 1.09a4.06 4.06 0 011.49 2.39c.21.87.14 1.74.14 2.6h-3.2c0-.57.08-1.23-.06-1.8a1.65 1.65 0 00-1.14-1.24c-.64-.14-1.35-.14-1.92.3-.42.36-.56.94-.56 1.44v5.43c0 .58.28 1.24.78 1.45.56.3 1.28.3 1.84.08.5-.15.93-.66 1-1.24.07-.57 0-1.15.07-1.73H188c0 .72.07 1.52-.07 2.24a4.48 4.48 0 01-1.2 2.46 5.18 5.18 0 01-3.06 1.38 5.32 5.32 0 01-3.76-.87 4.17 4.17 0 01-1.7-2.53c-.14-.58-.14-1.16-.14-1.81v-3.77c0-.8-.08-1.6.14-2.4.14-.79.64-1.8 1.49-2.38zM191.49 12.23c.99-.8 2.34-1.01 3.62-.94.99.07 2.05.44 2.76 1.16.64.58.92 1.45 1 2.32v1.16h-3.13c0-.44.07-.94-.2-1.3-.22-.37-.65-.51-1.07-.51-.43 0-.93.14-1.14.5-.21.3-.21.73-.14 1.09.14.43.5.72.85.94.92.65 1.92 1.09 2.84 1.81.64.51 1.28 1.09 1.7 1.81.57 1.02.5 2.32.14 3.4a3.67 3.67 0 01-2.2 2.18c-1.34.5-2.9.58-4.25 0a3.74 3.74 0 01-2.13-2.17c-.36-.8-.28-1.67-.28-2.54h3.19c0 .58-.07 1.16.21 1.67.21.43.64.65 1.14.65.42 0 .85-.07 1.13-.36.28-.3.36-.8.28-1.16-.07-.44-.5-.72-.78-1.01-.85-.58-1.77-1.1-2.62-1.67a6 6 0 01-2.06-2.17 4.57 4.57 0 01-.28-2.4c.21-1 .7-1.88 1.42-2.46zM77.17 11.58h3.2v14.49h-3.2V11.58zM82.42 11.58h3.27l2.13 9.64 2.13-9.64h3.26c-1.28 4.85-2.55 9.64-3.76 14.49h-3.27a860.1 860.1 0 00-3.76-14.49zM172.54 11.58h3.2v14.49h-3.2V11.58zM118.54 19.98c1.56 0-.5 0 0 0zM126.06 25.56c-.99-1.88-1.98-3.84-2.98-5.72h2.84v-3.91-1.67-.29-4.2a4 4 0 00-1.28-3.11 4.1 4.1 0 00-2.7-1.1h-7.23v20.36h3.4c.08-2.02 0-4.05 0-6.08h1.35c1 1.95 2.06 3.84 3.06 5.8.07.07.14.21.2.28H126.29c-.08 0-.15-.21-.22-.36zm-3.54-9.05h-2.91-1.5V9.19h3.27c.57-.07 1.14.5 1.14 1.09v6.22z" fill="#040506"/></svg>
                    </div>
                    <div className="nr-x-fan">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.17 11.3L1.2.32l-.71.71L11.46 12 .5 22.96l.7.7 10.97-10.95 10.96 10.96.7-.71L12.87 12 23.83 1.04l-.7-.7-10.96 10.95z" fill="#000" fillOpacity=".24"/></svg>
                    </div>
                    <div className="fanuc-logo">
                        <a href="https://www.fanuc.eu/" target="_blank"></a>
                        <svg width="176" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M45.79.79h-3.84L30.52 25.17l-.34.72h7.68l2.25-5.02h11.4l2.24 5.02h7.69L49.63.79h-3.84zm0 16.04h-3.84l3.84-8.53 3.88 8.53h-3.88zM12.59 5.81h18.28V.79H4.9v25.1h7.69V14.83H28.2v-4.76H12.6V5.81zm76.57 12.04L74.35.8h-7.41v25.1h7.4V9.8L88.1 25.89h8.48V.79h-7.4v17.06zm65.43 4.8c-2.66.02-4.74-.8-6.2-2.44-1.45-1.67-2.17-3.93-2.14-6.85 0-2.83.7-5.1 2-6.76 1.36-1.74 3.47-2.53 6.34-2.53 2.77.03 4.75.69 5.85 2.03a11.28 11.28 0 012.29 4.73l9.03-.04a11.4 11.4 0 00-4.95-7.9c-2.73-1.84-6.71-2.8-11.94-2.86-5.92-.03-10.25 1.18-13.02 3.64-2.77 2.47-4.12 5.71-4.08 9.69.03 4.98 1.7 8.43 5.02 10.33 3.29 1.94 7.34 2.92 12.08 2.99 5.23.06 9.2-.89 11.94-2.86 2.7-1.93 4.36-4.6 4.95-7.97h-9.03c-.83 4.5-3.53 6.76-8.14 6.8zm-30.01-5.85c0 1.64-.7 2.89-2.11 3.77a9.88 9.88 0 01-5.33 1.35c-1.9.03-3.6-.4-5.13-1.25a4.13 4.13 0 01-2.32-3.87V.79h-7.68v16.6c0 1.8.52 3.31 1.56 4.5 1 1.18 2.28 2.13 3.84 2.85 1.56.71 3.21 1.22 4.92 1.51 1.76.3 3.35.43 4.8.46 1.32 0 2.84-.13 4.58-.4 1.76-.29 3.42-.78 4.98-1.47a11.78 11.78 0 003.95-2.89 6.47 6.47 0 001.62-4.56V.8h-7.68V16.8z" fill="#D91433"/></svg>
                    </div>
                </section>

                {/* Boost your sales with AR experience. */}
                <section className="intro divided" style={{background: '#FAD000', paddingTop: 60, paddingBottom: 64}}>
                    <div id="overview" className="container">
                        <h3 className={"product-name"}>OmniFit.</h3>
                        <Title dark={true} center={true} text={'Boost your sales with AR experience.'}/>
                        <p className="section-text centered" style={{color: '#000000'}}>
                            We’ve created hyper-realistic AR models of all UR robots, additional hardware and&nbsp;even
                            complete robotic cells. So you can showcase your solutions anytime and&nbsp;anywhere.
                        </p>
                        <div className="action-mobile" style={{display: 'flex', justifyContent: 'center', maxWidth: 'none'}}>
                            <ActionButton dark="true" onClick={() => {
                                this.navToSection('form')
                            }} label={'Request Demo'}/>
                        </div>
                        <div id="ipad-ar-preview" className="fanuc">
                            <img src={arPreview} alt={"OmniFit preview screenshot."}/>
                        </div>
                    </div>
                </section>

                {/* Gallery cards. */}
                <section className="gallery">
                    <div className="container">
                        <Title small={false} text={"Interactive simulations at your fingertips."} center={true}/>
                        <p className="section-text centered">
                            All these models are interactive and customizable already in the app, so you can find the
                            solution, which is just for you.
                        </p>
                        <div className="gallery-tabs">
                            <div className="gallery-row">
                                <AppTab title={'Palletizing'}
                                        previewUrl={previewPallets}
                                        description={'Fit your system on the customer factory floor and show how exactly the whole system will look like, how much space it takes, how it moves, and how fast it is.'}/>
                                <AppTab title={'Machine Tending'}
                                        previewUrl={previewTend}
                                        description={'Maecenas sed nisi congue, convallis risus at, auctor eros. Quisque efficitur neque et elit elementum tristique. Ut et suscipit augue.'}/>
                                <AppTab title={'Case Folding'}
                                        previewUrl={previewCaseFold}
                                        description={'In sollicitudin commodo elit in aliquet. Maecenas malesuada eget erat vel elementum. Donec scelerisque elit dui, vitae posuere odio aliquet eget. Mauris nisi mi, sodales hendrerit lectus nec, molestie finibus ipsum.'}/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visualize instantly */}
                <section id={'why-omnifit'}>
                    <div className="container">
                        <div className="padhor mirrored">
                            <div className="padhor-text">
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Visualize instantly.'}/>
                                    <p className="section-text">
                                        Fit your system on the customer factory floor and show how exactly the whole
                                        system will look like, how much space it takes, how it moves, and how fast it
                                        is.
                                    </p>
                                </div>
                            </div>
                            <Padview image={previewAR}/>
                        </div>
                    </div>
                </section>

                {/* Place anywhere */}
                <section>
                    <div className="container">
                        <div className="padhor photo">
                            <div className="padhor-text">
                                <div className="padhor-text--title">
                                    <Title small={true} text={`Place the robot anywhere.`}/>
                                    <p className="section-text">
                                        Check robot reachability for various applications. You have a full range of UR
                                        robots at your fingertips, even if you brought only UR-3 with you.
                                    </p>
                                </div>
                            </div>
                            <Padview image={photoTend}/>
                        </div>
                    </div>
                </section>

                {/* Attract attention */}
                {/* <section>
                    <div className="container">
                        <div className="padhor mirrored photo">
                            <div className="padhor-text">
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Attract\u00A0attention.'}/>
                                    <p className="section-text">
                                        Show case your solutions to anyone and anywhere even in the conference room.
                                    </p>
                                    <div className={'tabletop'}/>
                                </div>
                            </div>
                            <div className="photo" style={{
                                backgroundImage: 'url(' + photoBluesun + ')',
                                zIndex: 1,
                                position: 'relative'
                            }}/>
                        </div>
                    </div>
                </section> */}

                {/* Make it interactive */}
                <section className={'divided'} id="interactive">
                    <div className="container">
                        <div className="padhor mirrored">
                            <div className="padhor-text">
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Make it interactive.'}/>
                                    <p className="section-text">
                                        Bring hands-on experience and show how easy it will be to set up the robot.<br/><br/>We
                                        remove the fear of complexity and hidden operational costs on reconfiguration.
                                    </p>
                                    <div className={'omnipack-link'}>
                                        <a href={'/omnipack'} target={'_blank'} />
                                        <p>See OmniPack</p>
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 10.5V19.125C18 19.3712 17.9515 19.615 17.8573 19.8425C17.763 20.07 17.6249 20.2767 17.4508 20.4508C17.2767 20.6249 17.07 20.763 16.8425 20.8573C16.615 20.9515 16.3712 21 16.125 21H4.875C4.37772 21 3.90081 20.8025 3.54917 20.4508C3.19754 20.0992 3 19.6223 3 19.125V7.875C3 7.37772 3.19754 6.90081 3.54917 6.54917C3.90081 6.19754 4.37772 6 4.875 6H12.7256" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M15.75 3H21V8.25" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M10.5 13.5L20.625 3.375" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Padview image={previewLayout}/>
                        </div>
                    </div>
                </section>

                {/* AR Demos right on the plant */}
                <section>
                    <div className="container">
                        <Title text={"Create AR demos right on the plant."} center/>
                        <p className="section-text centered">
                            Customize the system according to technical requirements&nbsp;and record a video with AR
                            simulations.
                        </p>
                        <div style={{width: 150, margin: "24px auto 0"}}>
                            <ActionButton onClick={() => {
                                this.navToSection('form')
                            }} label={'Request Demo'}/>
                        </div>
                        <div className={'iphone-video'}>
                            <video preload={'metadata'}
                                   poster={vidpreview}
                                   controls={false}
                                   muted={true}
                                   autoPlay={true}
                                   loop
                                   playsInline={true}
                                   ref={this.videoRef}>
                                <source src={robovid} type={"video/mp4"}/>
                            </video>
                            <div className="device-border"/>
                        </div>
                    </div>
                </section>

                <section className="light" id={"features"}>
                    <div className="container">
                        <div className="padhor mirrored">
                            <div className="padhor-text margined">
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Create catchy visualizations.'}/>
                                    <p className="section-text">
                                        Attach the illustrations to your commercial proposal.
                                    </p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="letter-content">
                                    <div className="letter-logo" style={{height: 24}}>
                                        <object data={logoLetter} type={'image/svg+xml'}/>
                                    </div>
                                    <div className="letter-text">
                                        Dear Luis,<br/><br/>Thank you for your interest in our products. The below
                                        summarizes technical and commercial details of the system.
                                    </div>
                                    <div className="letter-photo fanuc-catchy"/>
                                    <div className="letter-photo--label">Figure 1. Rielic box folding station.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="light">
                    <div className="container">
                        <div className="padhor">
                            <div className="padhor-text leftMargined">
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Make it personal.'}/>
                                    <p className="section-text">
                                        Personalize the note to your client and attach a video of the system operation.
                                    </p>
                                </div>
                            </div>
                            <div className="outlook">
                                <img src={outlook}/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'light'}>
                    <div className="container">
                        <div className="padhor mirrored photo">
                            <div className="padhor-text">
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Exhibit anywhere.'}/>
                                    <p className="section-text">
                                        Interactive and immersive content for any presentation. And up to
                                        40m<sup>2</sup> of free space!
                                    </p>
                                </div>
                            </div>
                            <Padview image={photoExhibit}/>
                        </div>
                    </div>
                </section>

                {/* <section className="light" id={"request-form"}>
                    <div className="container" style={{padding: '60px 0 120px 0'}}>
                        <Title center={true} text={'Try OmniFit now.'}/>
                        {
                            !this.state.formSent &&
                            <p className="section-text centered" style={{fontSize: 18}}>
                                Request a free demo by filling out the form below.
                            </p>
                        }
                        {
                            this.state.formSent &&
                            <p className="section-text centered" style={{fontSize: 21}}>
                                Thank you! We will contact you soon.
                            </p>
                        }
                        {
                            !this.state.formSent &&
                            <form
                                style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40}}>
                                <input type="text" onChange={this.onChange} onBlur={this.checkName} name={'name'}
                                       value={this.state.name} placeholder={'Name'}
                                       className={'form-input' + (this.state.nameValid ? "" : " error")}/>
                                <input type="text" onChange={this.onChange} onBlur={this.checkEmail} name={'mail'}
                                       value={this.state.mail} placeholder={'E-mail'}
                                       className={'form-input' + (this.state.mailValid ? "" : " error")}/>
                                <div className="submit-button" onClick={this.sendRequest}>Request Demo</div>
                            </form>
                        }
                    </div>
                </section> */}

                <ContactForm demoUrl="requestDemo" product="OmniFit" title="Begin for free" description="You can get a one month OmniFit demo for free. Drop us a message - we will be happy to speak with you and showcase our solutions."  />
            </div>
        )
    }

}

export default Omnifit;
