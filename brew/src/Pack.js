import React, {Component} from 'react';
import {platform, IOS, iPhone} from './lib/platform';

import device from 'current-device';

import Header from './components/Header/Header';

// Import your styles after all components!
import './test.less'

import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Layout from "./components/Layout/Layout";
import Section from "./components/Section/Section";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import SectionDescription from "./components/SectionDescription/SectionDescription";

const oFit = require('./assets/imgs/o-fit-icon.png');
const oPack = require('./assets/imgs/o-pack-icon.png');
const oDev = require('./assets/imgs/o-dev.png');
const arVideo = require('./assets/imgs/ar-video.gif');
const arVideoPreview = require('./assets/imgs/ar-video-preview.png');
const opackVideo = require('./assets/imgs/pack-video.gif');
const opackVideoPreview = require('./assets/imgs/pack-video-preview.png');

import './main-styles.less';
import SectionCaption from "./components/SectionCaption/SectionCaption";
import Footer from "./components/Footer/Footer";
import Touch from "./components/Touch/Touch";
import Gif from "./components/Gif/Gif";


class Pack extends Component {

    constructor(props) {
        super(props);

        this.state = {
            darkTheme: false,
            packPlaying: false,
            playingAr: false,
            playingPack: false
        };

        this.changeTheme = this.changeTheme.bind(this);
        this.playPack = this.playPack.bind(this);

        this.arRef = React.createRef();
        this.packRef = React.createRef();
    }

    changeTheme() {
        this.setState(prevState => ({
            darkTheme: !prevState.darkTheme
        }))
    }

    playPack() {
        this.setState({
            packPlaying: true
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <Header>
                    <HeaderMenu packOnly={true}/>
                </Header>
                <Layout style={{marginTop: 50, padding: 0}}>
                    <Section id={'omnipack'} ref={this.packRef}>
                        <SectionHeader icon={oPack}>Pack</SectionHeader>
                        <SectionDescription>
                            Setup your palletization robot in a few easy steps. It is fast, flexible and allows you to track the status of each robot at any time.
                        </SectionDescription>
                        <SectionCaption>
                            OmniPack supports most of all industrial robots.
                        </SectionCaption>
                        <div className="download-offer">
                            <a href={'https://drive.google.com/file/d/120sqFITfTkIN_iXdc7fYcW5UFgbJyHeC/view?usp=sharing'} target={'_blank'}>Download Specification</a>
                            <div className="download-icon">
                                <svg width="28px" height="28px" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Native-Robotics" transform="translate(-854.000000, -1643.000000)">
                                            <g id="Group-3" transform="translate(855.000000, 1644.000000)">
                                                <circle id="Oval-4" stroke="#FF3C58" fillRule="nonzero" cx="13" cy="13" r="13.5"></circle>
                                                <g id="baseline-arrow_downward-24px" transform="translate(1.000000, 1.000000)">
                                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                                    <polygon id="Shape" fill="#FF3C58" fillRule="nonzero" points="20 12 18.59 10.59 13 16.17 13 4 11 4 11 16.17 5.42 10.58 4 12 12 20"></polygon>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="opack-demo">
                            <div className="demo-ipad">
                                <div className="screen">
                                    <Gif gifUrl={opackVideo} isPlaying={this.state.playingAr} previewUrl={opackVideoPreview} />
                                    {/*{ this.state.packPlaying || device.desktop() ?*/}
                                    {/*    <img src={opackVideo} width={'100%'} alt={'oPack demonstration video.'}/>*/}
                                    {/*    :*/}
                                    {/*    <div className={'play-control'} onClick={this.playPack}>*/}
                                    {/*        <div className="play-icon">*/}
                                    {/*            <svg width="17px" height="21px" viewBox="0 0 17 21" version="1.1" xmlns="http://www.w3.org/2000/svg">*/}
                                    {/*                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">*/}
                                    {/*                    <g id="Native-Robotics" transform="translate(-706.000000, -2104.000000)" fill="#FFFFFF" fillRule="nonzero">*/}
                                    {/*                        <g id="oPack" transform="translate(-8.000000, 1609.000000)">*/}
                                    {/*                            <path d="M724.06204,498.186584 L731.824252,510.70628 C732.406293,511.645057 732.117102,512.877923 731.178326,513.459965 C730.861831,513.656192 730.496836,513.760159 730.124446,513.760159 L714.600023,513.760159 C713.495454,513.760159 712.600023,512.864729 712.600023,511.760159 C712.600023,511.387769 712.703991,511.022775 712.900218,510.70628 L720.662429,498.186584 C721.244471,497.247807 722.477338,496.958616 723.416114,497.540658 C723.678368,497.703255 723.899443,497.92433 724.06204,498.186584 Z" id="Triangle" transform="translate(722.362372, 505.500174) rotate(90.000000) translate(-722.362372, -505.500174) "></path>*/}
                                    {/*                        </g>*/}
                                    {/*                    </g>*/}
                                    {/*                </g>*/}
                                    {/*            </svg>*/}
                                    {/*        </div>*/}
                                    {/*        <p>Watch</p>*/}
                                    {/*    </div>*/}
                                    {/*}*/}
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section id={'codegain'} background={"GreyWhite"}>
                        <SectionHeader>CodeGain</SectionHeader>
                        <SectionDescription>
                            Solution for automatic generation of the program for robots in common applications. CodeGain is a base part of all OmniKit solutions.
                        </SectionDescription>
                        <SectionCaption>How does it work?</SectionCaption>
                        <div className="codegain-steps">
                            <div className="step">
                                <div className="icon-terminal"></div>
                                <p>Input all initial data related to the task.</p>
                            </div>
                            <div className="step">
                                <div className="icon-pad"></div>
                                <p>Preview generated program in simulation.</p>
                            </div>
                            <div className="step">
                                <div className="icon-robot"></div>
                                <p>Upload the program to robot.</p>
                            </div>
                        </div>
                    </Section>
                    <Section id={'coming-soon'} background={"Black"} dividerColor={'#000000'}>
                        <SectionHeader icon={oDev}/>
                        <SectionHeader white={true} className={"smaller"} fontSize={32}>Coming soon with CodeGain</SectionHeader>
                        <div className="soon-tabs">
                            <div className="tab">
                                <h3>oBend</h3>
                                <p>Solution for bending machines.</p>
                            </div>
                            <div className="tab">
                                <h3>oTend</h3>
                                <p>Code generation for machine tending.</p>
                            </div>
                            <div className="tab">
                                <h3>oWeld</h3>
                                <p>Support of the welding applications.</p>
                            </div>
                        </div>
                    </Section>
                </Layout>
                <Footer/>
            </div>
        );
    }
}

export default Pack;
