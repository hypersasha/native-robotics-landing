import React, {Component} from 'react';
import './omnifit.less';
import ActionButton from "./components/OmniFit/ActionButton/ActionButton";
import Title from "./components/OmniFit/Title/Title";
import AppTab from "./components/OmniFit/ApplicationTab/AppTab";
import Padview from "./components/OmniFit/Padview/Padview";

import axios from 'axios';

const logo = require('./assets/nr-logo-omnikit.svg');
const logoLetter = require('./assets/logo-letter.svg');
const logoFooter = require('./assets/nr-logo-footer.svg');

const arPreview = require('./assets/imgs/ipad-ar-peview.jpg');

const previewPallets = require('./assets/imgs/preview-palletizing.jpg');
const previewDispencing = require('./assets/imgs/preview-dispencing.jpg');
const previewCaseFold = require('./assets/imgs/preview-casefold.jpg');
const previewTend = require('./assets/imgs/preview-tending.jpg');
const previewPlain = require('./assets/imgs/preview-plain.jpg');
const previewScrew = require('./assets/imgs/preview-screw.jpg');
const previewLayout = require('./assets/imgs/preview-layout.jpg');
const previewAR = require('./assets/imgs/preview-ar.jpg');
const photoTend = require('./assets/imgs/photo-view.jpg');
const photoBluesun = require('./assets/imgs/photo-bluesun.jpg');
const photoExhibit = require('./assets/imgs/photo-exhibit.jpg');
const outlook = require('./assets/imgs/outlook.png');

const insta = require('./assets/imgs/icons/insta.png');
const youtube = require('./assets/imgs/icons/youtube.png');
const linkedin = require('./assets/imgs/icons/linkedin.png');

const robovid = require('./assets/robotend.mp4');
const vidpreview = require('./assets/imgs/vidpreview.png');

class Omnifit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            mail: '',
            mailValid: true,
            nameValid: true,
            formSent: false,
            isVideoPlaying: false
        };

        this.sendRequest = this.sendRequest.bind(this);
        this.onChange = this.onChange.bind(this);
        this.navToSection = this.navToSection.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.checkName = this.checkName.bind(this);

        this.videoRef = React.createRef();
        this.videoPlaying = false;

    }

    componentDidMount() {
        axios.get('https://nr-form-api-test.now.sh/allDemoRequests')
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.error(err);
            });

        this.videoRef.current.pause();

        window.addEventListener('scroll', () => {
            let position = this.videoRef.current.getBoundingClientRect();
            // checking for partial visibility
            if(position.top < window.innerHeight && position.bottom >= 0) {
                if (this.videoPlaying === false) {
                    this.videoPlaying = true;
                    this.videoRef.current.play();
                }
            }
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
            })
        }
    }


    render() {
        return (
            <div id={'omnifit-page'}>
                <header className={'omnifit'}>
                    <div className="container header-content">
                        <div className="logo" style={{height: 37}}>
                            <object data={logo} type={'image/svg+xml'}/>
                        </div>
                        <div className="header-navigation">
                            <div className="header-navigation--links">
                                <div className="nav-link active">Overview</div>
                                <div className="nav-link" onClick={() => {
                                    this.navToSection('why-omnifit')
                                }}>Why OmniFit
                                </div>
                            </div>
                            <ActionButton onClick={() => {
                                this.navToSection('request-form')
                            }} label={'Request Demo'}/>
                        </div>
                    </div>
                </header>

                {/* Boost your sales with AR experience. */}
                <section className="intro divided">
                    <div className="container">
                        <h3 className={"product-name"}>OmniFit.</h3>
                        <Title text={'Boost your sales with AR experience.'}/>
                        <p className="section-text">
                            We’ve created hyper-realistic AR models of all UR robots, additional hardware and&nbsp;even
                            complete robotic cells. So you can showcase your solutions anytime and&nbsp;anywhere.
                        </p>
                        <div className="action-mobile">
                            <ActionButton onClick={() => {
                                this.navToSection('request-form')
                            }} label={'Request Demo'}/>
                        </div>
                        <div id="ipad-ar-preview">
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
                            <div className="gallery-row">
                                <AppTab title={'Screwdriving'}
                                        previewUrl={previewScrew}
                                        description={'Fit your system on the customer factory floor and show how exactly the whole system will look like, how much space it takes, how it moves, and how fast it is.'}/>
                                <AppTab title={'Dispencing'}
                                        previewUrl={previewDispencing}
                                        description={'Fit your system on the customer factory floor and show how exactly the whole system will look like, how much space it takes, how it moves, and how fast it is.'}/>
                                <AppTab title={'Plain Robot'}
                                        previewUrl={previewPlain}
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
                <section>
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
                </section>

                {/* Make it interactive */}
                <section className={'divided'}>
                    <div className="container">
                        <div className="padhor">
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
                                this.navToSection('request-form')
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
                                    <div className="letter-photo"/>
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

                <section className={'light divided'}>
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

                <section className="light" id={"request-form"}>
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

export default Omnifit;
