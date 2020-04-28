import React, {Component} from 'react';
import './omnifit.less';
import ActionButton from "./components/OmniFit/ActionButton/ActionButton";
import Title from "./components/OmniFit/Title/Title";
import AppRouter from "./Router";
import AppTab from "./components/OmniFit/ApplicationTab/AppTab";
import Padview from "./components/OmniFit/Padview/Padview";

import axios from 'axios';

const logo = require('./assets/nr-logo-omnikit.svg');
const logoLetter = require('./assets/logo-letter.svg');
const logoFooter = require('./assets/nr-logo-footer.svg');

const arPreview = require('./assets/imgs/ipad-ar-peview.png');

const previewPallets = require('./assets/imgs/preview-palletizing.png');
const previewDispencing = require('./assets/imgs/preview-dispencing.png');
const previewCaseFold = require('./assets/imgs/preview-casefold.png');
const previewTend = require('./assets/imgs/preview-tending.png');
const previewPlain = require('./assets/imgs/preview-plain.png');
const previewScrew = require('./assets/imgs/preview-screw.png');
const previewLayout = require('./assets/imgs/preview-layout.png');
const previewAR = require('./assets/imgs/preview-ar.png');
const photoTend = require('./assets/imgs/photo-view.png');
const photoBluesun = require('./assets/imgs/photo-bluesun.png');
const photoTabletop = require('./assets/imgs/photo-tabletop.png');
const photoLetter = require('./assets/imgs/photo-letter.png');
const photoExhibit = require('./assets/imgs/photo-exhibit.png');

class Omnifit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            mail: ''
        };

        this.sendRequest = this.sendRequest.bind(this);
        this.onChange = this.onChange.bind(this);
        this.navToSection = this.navToSection.bind(this);

    }

    componentDidMount() {
        axios.get('https://nr-form-api-test.now.sh/allDemoRequests')
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.error(err);
            })
    }

    onChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    navToSection(section_id) {
        document.getElementById(section_id).scrollIntoView({block: 'start'});
    }

    sendRequest() {
        if (this.state.name.trim().length === 0 || this.state.mail.trim().length === 0) {
            console.log('Enter your name and mail.');
        } else {
            let name = this.state.name.trim();
            let mail = this.state.mail.trim();
            console.log('Sending data: ' + name + ' - ' + mail);

            axios.post('https://nr-form-api-test.now.sh', {
                name: name,
                email: mail
            }).then((response) => {
                console.log(response)
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
                                <div className="nav-link" onClick={() => {this.navToSection('why-omnifit')}}>Why OmniFit</div>
                                <div className="nav-link" onClick={() => {this.navToSection('features')}}>Features</div>
                            </div>
                            <ActionButton onClick={() => {this.navToSection('request-form')}} label={'Request Demo'}/>
                        </div>
                    </div>
                </header>

                {/* Boost your sales with AR experience. */}
                <section className="intro divided">
                    <div className="container">
                        <Title text={'Boost your sales with AR experience.'}/>
                        <p className="section-text">
                            We’ve created hyper-realistic AR models of all UR robots, additional hardware and&nbsp;even
                            complete robotic cells. So you can showcase your solutions anytime and&nbsp;anywhere.
                        </p>
                        <div id="ipad-ar-preview"/>
                    </div>
                </section>

                {/* Gallery cards. */}
                <section className="gallery">
                    <div className="container">
                        <Title text={"Interactive simulations at your fingertips."} center={true}/>
                        <p className="section-text centered">
                            All these models are interactive and customizable already in the app, so you can find the solution, which is just for you.
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

                <section id={'why-omnifit'}>
                    <div className="container">
                        <div className="padhor mirrored">
                            <div className="padhor-text">
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Visualize instantly.'}/>
                                    <p className="section-text">
                                        Fit your system on the customer factory floor and show how exactly the whole system will look like, how much space it takes, how it moves, and how fast it is.
                                    </p>
                                </div>
                            </div>
                            <Padview image={previewAR}/>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="padhor photo">
                            <div className="padhor-text">
                                <div className="padhor-text--title">
                                    <Title small={true} text={`Place the robot anywhere.`}/>
                                    <p className="section-text">
                                        Check robot reachability for various applications. You have a full time of UR robots at your fingertips, even if you brought only UR-5 with you.
                                    </p>
                                </div>
                            </div>
                            <div className="photo" style={{backgroundImage: 'url(' + photoTend + ')'}} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="padhor mirrored photo">
                            <div className="padhor-text">
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Break the ice & attract\u00A0attention.'}/>
                                    <p className="section-text">
                                        Show case your solutions to anyone and anywhere even in the conference room.
                                    </p>
                                    <div style={{width: 316, height: 144, backgroundImage: "url(" + photoTabletop + ")", backgroundSize: 'cover', marginTop: 20, borderRadius: 4, marginLeft: -140, boxShadow: '0 8px 24px rgba(0,0,0,0.6)', position: 'relative', zIndex: 99999}} />
                                </div>
                            </div>
                            <div className="photo" style={{backgroundImage: 'url(' + photoBluesun + ')', zIndex: 1, position: 'relative'}} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="padhor">
                            <div className="padhor-text">
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Make it interactive.'}/>
                                    <p className="section-text">
                                        Bring hands-on experience and show how easy it will be to set up the robot.<br/><br/>We remove the fear of complexity and hidden operational costs on reconfiguration.
                                    </p>
                                </div>
                            </div>
                            <Padview image={previewLayout}/>
                        </div>
                    </div>
                </section>

                <section className="light" id={"features"}>
                    <div className="container">
                        <div className="padhor mirrored">
                            <div className="padhor-text" style={{marginRight: 80}}>
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Create catchy visualizations.'}/>
                                    <p className="section-text">
                                        Attach the visuals to your commercial proposal.
                                    </p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="letter-content">
                                    <div className="letter-logo" style={{height: 24}}>
                                        <object data={logoLetter} type={'image/svg+xml'}/>
                                    </div>
                                    <div className="letter-text">
                                        Dear Luis,<br/><br/>Thank you for your interest in our products. The below summarizes technical and commercial details of the system.
                                    </div>
                                    <div className="letter-photo" />
                                    <div className="letter-photo--label">Figure 1. Rielic box folding station.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="light">
                    <div className="container">
                        <div className="padhor">
                            <div className="padhor-text" style={{marginLeft: 156}}>
                                <div className="padhor-text--title">
                                    <Title small={true} text={'Make it personal.'}/>
                                    <p className="section-text">
                                        Personalize the note to your client and attach a video of the system operation.
                                    </p>
                                </div>
                            </div>
                            <div className="outlook" />
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
                                        Interactive and immersive content for any presentation and exhibition. And up to 40m of free space!
                                    </p>
                                </div>
                            </div>
                            <div className="photo" style={{backgroundImage: 'url(' + photoExhibit + ')', zIndex: 1, position: 'relative'}} />
                        </div>
                    </div>
                </section>

                <section className="light" id={"request-form"}>
                    <div className="container" style={{padding: '60px 0 120px 0'}}>
                        <Title center={true} text={'Try OmniFit now.'} />
                        <p className="section-text centered">
                            Fill out the form below and we will contact you shortly.
                        </p>
                        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40}}>
                            <input type="text" onChange={this.onChange} name={'name'} value={this.state.name} placeholder={'Name'} className={'form-input'} />
                            <input type="text" onChange={this.onChange} name={'mail'} value={this.state.mail} placeholder={'E-mail'} className={'form-input'} />
                            <div className="submit-button" onClick={this.sendRequest}>Request Demo</div>
                        </form>
                    </div>
                </section>

                <section className={'light'}>
                    <div className="container" style={{borderTop: '1px solid #EFEFF3'}}>
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
                                <div className="link"><a href="https://www.linkedin.com/company/native-robotics" target={'_blank'}>Linked.in</a></div>
                                <div className="link"><a href="https://instagram.com/native.robotics" target={'_blank'}>Instagram</a></div>
                                <div className="link"><a href="https://www.youtube.com/watch?v=8wh053Fhqy8&list=PLwsuOQ_v2UBNFWOdnEIp-qCWFU5VEXzQJ" target={'_blank'}>YouTube</a></div>
                                <div className="link">hello@native-robotics.com</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Omnifit;
