import React, {Component} from 'react';

const logo = require('./assets/black-logo.svg');
const logoFooter = require('./assets/nr-logo-footer.svg');

import './omnipack.less'
import Title from "./components/OmniPack/Title/Title";
import Text from "./components/OmniPack/Text/Text";
import AppMock from "./components/OmniPack/AppMock/AppMock";
import axios from "axios";
import Loader from "./components/OmniPack/Loader/Loader";

// images
const introScreen = require('./assets/imgs/omnipack/intro-screen.jpg');
const palletScreen = require('./assets/imgs/omnipack/pallet-screen.jpg');
const trajectories = require('./assets/imgs/omnipack/trajectories.jpg');
const urPlusSupport = require('./assets/imgs/omnipack/ur-plus-support.jpg');
const urComponents = require('./assets/imgs/omnipack/components.jpg');

const insta = require('./assets/imgs/icons/insta.png');
const youtube = require('./assets/imgs/icons/youtube.png');
const linkedin = require('./assets/imgs/icons/linkedin.png');

class OmniPack extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            name: '',
            mailValid: true,
            nameValid: true,
            formSent: false,
            sending: false
        };

        this.onChange = this.onChange.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkName = this.checkName.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
    }


    componentDidMount() {
        document.querySelectorAll('html,body').forEach((element) => {
            element.style.background = "#FFFFFF";
        });
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

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    checkName(e) {
        const value = this.state.name;
        this.setState({
            nameValid: (value.trim().length > 2)
        });
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

            this.setState({
                sending: true
            });

            axios.post('https://nr-form-api-test.now.sh/opackDemo', {
                    name: name,
                    email: mail
                }
            ).then((response) => {
                console.log(response);
                this.setState({
                    formSent: true,
                    sending: false
                })
            }).catch((err) => {
                console.error(err);
                this.setState({
                    sending: false
                })
            })
        }
    }

    render() {
        return (
            <div>
                <header className={'opack-container'}>
                    <div style={{height: 37}}>
                        <object data={logo} type={'image/svg+xml'}/>
                    </div>
                </header>

                {/* Intro */}
                <section className={'opack-container'}>
                    <div className="opack-content row">
                        <div>
                            <Title level={"primary"}>OmniPack</Title>
                            <Text>Reduce your costs and simplify operations with a cutting-edge palletization
                                software.</Text>
                            <div className="blue-button" onClick={() => this.navToSection('form')}>Try it for Free</div>
                        </div>
                        <AppMock image={introScreen}/>
                    </div>
                </section>

                {/* As Simple as Possible */}
                <section className={'opack-container'}>
                    <div className="opack-content row mirror">
                        <div>
                            <Title>As simple as possible</Title>
                            <Text>
                                Use your robot the same way you are using your smartphone.<br/><br/>No code. No hustle.
                                Zero knowledge required. Just tell the robot what to do and enjoy.
                            </Text>
                        </div>
                        <AppMock image={palletScreen}/>
                    </div>
                </section>

                {/* As efficient as Possible */}
                <section className={'opack-container'}>
                    <div className="opack-content row">
                        <div>
                            <Title>As efficient as possible</Title>
                            <Text>
                                State-of-the-art trajectory planning algorithm makes the robot work faster
                                and&nbsp;incredibly smoother.
                            </Text>
                        </div>
                        <AppMock inline={true} image={trajectories}/>
                    </div>
                </section>

                {/* Smart and Reliable */}
                <section className={'opack-container'}>
                    <div className="opack-content column">
                        <div className="smart-camera"/>
                        <Title align={'center'}>Smart and Reliable</Title>
                        <Text align={'center'}>
                            Comprehensive error handling system automatically analyze and try to recover from any issue
                            to secure non-stop production.
                        </Text>
                        <div className="blue-button" onClick={() => this.navToSection('form')}>Request Demo</div>
                    </div>
                </section>

                {/* Plug-n-Play */}
                <section className={'opack-container gray'}>
                    <div className="opack-content column" style={{paddingBottom: 60}}>
                        <Title align={'center'}>Plug-n-Play</Title>
                        <Text align={'center'}>
                            If we were showing you the live demo, we would have finished it before you got here.
                        </Text>
                    </div>
                    <div className="opack-plug-scheme">
                        <div className="ipad-big"/>
                        <div className="connector">
                            <div className="line"/>
                            <div className="line"/>
                        </div>
                        <div className="intel-pc"/>
                        <div className="connector">
                            <div className="line" style={{background: '#FF9A00'}}/>
                            <div className="line" style={{background: '#FF9A00'}}/>
                        </div>
                        <div className="palletization-stand"/>
                    </div>
                </section>

                {/* What is means for my business */}
                <section className={'opack-container'}>
                    <div className="opack-content column">
                        <Title align={'center'}>What it means<br/>for your business</Title>
                        <div className="benefits">
                            {/* Easy */}
                            <div className="easy">
                                <div className="benefit-title">
                                    <div className="icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M29.2194 15.5517C28.0694 10.353 26.3637 7.03671 23.63 6.22859C23.1005 6.07414 22.5515 5.99709 22 5.99984C20.3194 5.99984 18.9931 6.99984 16 6.99984C13.0069 6.99984 11.6781 5.99984 9.99999 5.99984C9.42546 5.99686 8.8533 6.07385 8.29999 6.22859C5.56249 7.03671 3.87124 10.3561 2.70812 15.5517C1.52062 20.8586 1.73562 25.0517 4.05687 25.8567C5.68187 26.4192 7.13499 25.2561 8.51124 23.5442C10.0737 21.5942 11.9981 20.9942 16 20.9942C20.0019 20.9942 21.8512 21.5942 23.4162 23.5442C24.7912 25.2573 26.2981 26.4061 27.88 25.8667C30.4437 24.9911 30.4075 20.9211 29.2194 15.5517Z"
                                                stroke="#34C759" strokeWidth="2" strokeMiterlimit="10"/>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11V13H7C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H9V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H11V11ZM21 12.5C21.6904 12.5 22.25 11.9404 22.25 11.25C22.25 10.5596 21.6904 10 21 10C20.3096 10 19.75 10.5596 19.75 11.25C19.75 11.9404 20.3096 12.5 21 12.5ZM19.5 14C19.5 14.6904 18.9404 15.25 18.25 15.25C17.5596 15.25 17 14.6904 17 14C17 13.3096 17.5596 12.75 18.25 12.75C18.9404 12.75 19.5 13.3096 19.5 14ZM20.3052 17.7891C20.5108 17.9266 20.7526 18 21 18C21.331 18 21.6485 17.8687 21.8828 17.635C22.1171 17.4012 22.2492 17.0841 22.25 16.7531C22.2506 16.5058 22.1778 16.2638 22.0409 16.0578C21.9039 15.8518 21.7089 15.6911 21.4805 15.5961C21.2522 15.501 21.0007 15.4758 20.7581 15.5236C20.5154 15.5715 20.2924 15.6903 20.1172 15.865C19.9421 16.0397 19.8227 16.2624 19.7743 16.505C19.7258 16.7475 19.7503 16.999 19.8449 17.2276C19.9394 17.4562 20.0996 17.6516 20.3052 17.7891ZM25 14C25 14.6904 24.4404 15.25 23.75 15.25C23.0596 15.25 22.5 14.6904 22.5 14C22.5 13.3096 23.0596 12.75 23.75 12.75C24.4404 12.75 25 13.3096 25 14Z"
                                                  fill="#34C759"/>
                                        </svg>
                                    </div>
                                    <div className="text">
                                        <h3>Easy</h3>
                                    </div>
                                </div>
                                <div className="benefit-content">
                                    <div className="item">— Intuitive Plug-n-Play set up</div>
                                    <div className="item">— Flexible automated production</div>
                                    <div className="item">— Full control and independence</div>
                                </div>
                            </div>

                            {/* Efficient */}
                            <div className="efficient">
                                <div className="benefit-title">
                                    <div className="icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M28.8631 3.36321C28.8525 3.31192 28.8274 3.26473 28.7909 3.22719C28.7544 3.18966 28.7079 3.16334 28.6569 3.15134C25.2581 2.32009 17.4069 5.28196 13.1488 9.53696C12.3899 10.2896 11.6979 11.1069 11.0806 11.9795C9.76812 11.8607 8.45563 11.9607 7.33813 12.4482C4.1825 13.8357 3.26437 17.4595 3.00812 19.0151C2.99424 19.1003 3.00017 19.1876 3.02546 19.2702C3.05074 19.3528 3.0947 19.4284 3.15393 19.4913C3.21316 19.5541 3.28606 19.6025 3.36699 19.6326C3.44793 19.6628 3.53471 19.6739 3.62062 19.6651L8.6875 19.1088C8.69101 19.491 8.71395 19.8727 8.75625 20.2526C8.78269 20.5151 8.89983 20.7602 9.0875 20.9457L11.0494 22.9076C11.235 23.0954 11.4804 23.2125 11.7431 23.2388C12.1207 23.2809 12.5001 23.3039 12.88 23.3076L12.3244 28.3701C12.3157 28.4559 12.3269 28.5425 12.357 28.6233C12.3872 28.7041 12.4355 28.7769 12.4983 28.8361C12.561 28.8952 12.6366 28.9391 12.719 28.9644C12.8015 28.9897 12.8886 28.9957 12.9738 28.982C14.53 28.732 18.1612 27.8138 19.5406 24.6588C20.0281 23.5401 20.1281 22.2345 20.0156 20.9282C20.8908 20.3115 21.7104 19.6195 22.465 18.8601C26.7387 14.6101 29.6819 6.93134 28.8631 3.36321ZM18.6663 13.3545C18.293 12.9813 18.0387 12.5057 17.9357 11.988C17.8327 11.4703 17.8855 10.9337 18.0875 10.446C18.2894 9.95832 18.6315 9.54148 19.0704 9.24821C19.5093 8.95494 20.0253 8.7984 20.5531 8.7984C21.081 8.7984 21.597 8.95494 22.0359 9.24821C22.4748 9.54148 22.8168 9.95832 23.0188 10.446C23.2208 10.9337 23.2736 11.4703 23.1706 11.988C23.0675 12.5057 22.8133 12.9813 22.44 13.3545C22.1924 13.6026 21.8983 13.7994 21.5745 13.9338C21.2507 14.0681 20.9037 14.1372 20.5531 14.1372C20.2026 14.1372 19.8555 14.0681 19.5317 13.9338C19.208 13.7994 18.9138 13.6026 18.6663 13.3545V13.3545Z"
                                                stroke="#FF9500" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M6.8525 22C6.22945 22.0765 5.6498 22.3589 5.20563 22.8025C4.10438 23.9075 4 28 4 28C4 28 8.095 27.8956 9.19687 26.7931C9.64224 26.3496 9.92517 25.769 10 25.145"
                                                stroke="#FF9500" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="text">
                                        <h3>Efficient</h3>
                                    </div>
                                </div>
                                <div className="benefit-content">
                                    <div className="item">— Trajectory optimization</div>
                                    <div className="item">— Faster Cycle-time</div>
                                    <div className="item">— Palletizer life-time increase</div>
                                </div>
                            </div>

                            {/* Reliable */}
                            <div className="efficient">
                                <div className="benefit-title">
                                    <div className="icon">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 11L14.075 19L11 15.9875" stroke="#007AFF" strokeWidth="2"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                            <path
                                                d="M28.9437 7.02313C23.355 6.02063 21.0444 5.27813 16 3C10.9556 5.27813 8.645 6.02063 3.05625 7.02313C2.04375 23.0706 15.0362 28.6119 16 29C16.9637 28.6119 29.9562 23.0706 28.9437 7.02313Z"
                                                stroke="#007AFF" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="text">
                                        <h3>Reliable</h3>
                                    </div>
                                </div>
                                <div className="benefit-content">
                                    <div className="item">— Comprehensive error handling</div>
                                    <div className="item">— Self-Recovering</div>
                                    <div className="item">— Non-stop production</div>
                                </div>
                            </div>
                        </div>
                        {/* 50% cost reduction */}
                        <div className="cost-reduction">
                            <div className="text">
                                <div className="percent">50%</div>
                                <Text wide={true}>Cost reduction on maintenance and reprogramming.</Text>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UR+ products support */}
                <section className={'opack-container'}>
                    <div className="opack-content row mirror">
                        <div>
                            <Title>UR+ products support</Title>
                            <Text>
                                The app has advanced settings and callback functionality, supports Modbus TCP and
                                Ethernet IP protocols as well as Omron and Siemens PLC communication.
                                <br/>
                                <br/>
                                We can include your custom hardware as well.
                            </Text>
                            <div className="logos">
                                <div className="schmalz"/>
                                <div className="onrobot"/>
                                <div className="piab"/>
                                <div className="rollon"/>
                            </div>
                        </div>
                        <AppMock inline={true} image={urComponents} customHeight={766}/>
                    </div>
                </section>

                {/* UR+ Certified */}
                <section className={'opack-container'}>
                    <div className="opack-content column">
                        <Text align={'center'}>
                            OmniPack software is certified by the leading collaborative robots' producer.
                        </Text>
                        <div className="ur-certified"/>
                        <Text align={'center'}>
                            OmniPack is recognized by the Distributors and Integrators all over the world.
                        </Text>
                        <div className="integrators">
                            <div className="fluitronic"/>
                            <div className="vicosystems"/>
                            <div className="cfz-robot"/>
                            <div className="robot-plus"/>
                            <div className="sinterpack"/>
                        </div>
                    </div>
                </section>

                {/* Contact form.  */}
                <section id={'form'} className={'opack-container gray'}>
                    <div className="opack-content column">
                        <Title align={'center'}>Try OmniPack now</Title>
                        {!this.state.formSent &&
                        <Text align={'center'}>
                            We will be happy to meet you online, showcase our solutions and perform remote demo on our
                            or even your robot!
                        </Text>
                        }
                        {this.state.formSent &&
                        <Text align={'center'}>
                            Thank you! We will contact you soon.
                        </Text>
                        }

                        {(!this.state.formSent && !this.state.sending) &&
                        <div className="opack-form">
                            <form>
                                <input name={"name"} onChange={this.onChange} onBlur={this.checkName}
                                       placeholder={"Your name"} type="text"
                                       className={'form-input' + (this.state.nameValid ? "" : " error")}/>
                                <input name={"mail"} onChange={this.onChange} onBlur={this.checkEmail}
                                       placeholder={"E-mail"} type="text"
                                       className={'form-input' + (this.state.mailValid ? "" : " error")}/>
                                <div className="submit-button" onClick={this.sendRequest}>Contact me</div>
                            </form>
                        </div>
                        }
                        {this.state.sending && <Loader/>}
                    </div>
                </section>

                <section className={'light gray'}>
                    <div className="container top-border">
                        <h3 className={"footer-header--mobile"}>Contact Us</h3>
                        <div className="footer-content">
                            <div className="footer-logo">
                                <div style={{height: 21}}>
                                    <object data={logoFooter} type={'image/svg+xml'}/>
                                </div>
                                <div className="copy">
                                    © 2020
                                </div>
                            </div>
                            <div className="footer-links">
                                <div className="links">
                                    <div className="link">
                                        <div className={'link-icon'} style={{backgroundImage: "url(" + linkedin + ")"}}/>
                                        <a href="https://www.linkedin.com/company/native-robotics"
                                           target={'_blank'}>Linked.in</a></div>
                                    <div className="link">
                                        <div className={'link-icon'} style={{backgroundImage: "url(" + insta + ")"}}/>
                                        <a href="https://instagram.com/native.robotics" target={'_blank'}>Instagram</a>
                                    </div>
                                    <div className="link">
                                        <div className={'link-icon'} style={{backgroundImage: "url(" + youtube + ")"}}/>
                                        <a href="https://www.youtube.com/watch?v=8wh053Fhqy8&list=PLwsuOQ_v2UBNFWOdnEIp-qCWFU5VEXzQJ"
                                           target={'_blank'}>YouTube</a></div>
                                    <div className="link">hello@native-robotics.com</div>
                                </div>
                                <div className="terms">
                                    <a href="/privacy" target={'_blank'}>Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default OmniPack;
