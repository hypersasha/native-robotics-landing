import React, {Component} from 'react';
import './omnifit.less';
import ActionButton from "./components/OmniFit/ActionButton/ActionButton";
import Title from "./components/OmniFit/Title/Title";
import AppRouter from "./Router";
import AppTab from "./components/OmniFit/ApplicationTab/AppTab";
import Padview from "./components/OmniFit/Padview/Padview";

const logo = require('./assets/nr-logo-omnikit.svg');

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

class Omnifit extends Component {
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
                                <div className="nav-link">Why OmniFit</div>
                                <div className="nav-link">Features</div>
                            </div>
                            <ActionButton label={'Request Demo'}/>
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

                <section>
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
                                        Check robot reachability for various applications. You have a full time of UR robots at your fingertips, even if you brought only UR-5 with you.
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
            </div>
        )
    }

}

export default Omnifit;
