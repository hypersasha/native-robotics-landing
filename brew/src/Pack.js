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
                            Настройте свой пост паллетизации за насколько простых шагов. OmniPack позволяет быстро изменить параметры раскладки и переналадить робота без специалиста.
                        </SectionDescription>
                        <div className="download-offer">
                            <a href={'https://drive.google.com/file/d/120sqFITfTkIN_iXdc7fYcW5UFgbJyHeC/view?usp=sharing'} target={'_blank'}>Скачать спецификацию</a>
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
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section id={'codegain'} background={"GreyWhite"}>
                        <SectionHeader>CodeGain</SectionHeader>
                        <SectionDescription>
                            Технология для автоматической генерации исполняемой программы промышленных роботов. CodeGain лежит в основе платформы OmniKit и позволяет превратить компьютерную симуляцию в реальную программу для Вашего конкретного робота.
                        </SectionDescription>
                        <SectionCaption>Как это работает?</SectionCaption>
                        <div className="codegain-steps">
                            <div className="step">
                                <div className="icon-terminal"></div>
                                <p>Введите информацию о задании.</p>
                            </div>
                            <div className="step">
                                <div className="icon-pad"></div>
                                <p>Проверьте сгенерированную программу в симуляторе.</p>
                            </div>
                            <div className="step">
                                <div className="icon-robot"></div>
                                <p>Отправьте программу в робота для исполнения.</p>
                            </div>
                        </div>
                    </Section>
                    <Section id={'coming-soon'} background={"Black"} dividerColor={'#000000'}>
                        <SectionHeader icon={oDev}/>
                        <SectionHeader white={true} className={"smaller"} fontSize={32}>Скоро в CodeGain</SectionHeader>
                        <div className="soon-tabs">
                            <div className="tab">
                                <h3>oBend</h3>
                                <p>Решение для гибочных машин.</p>
                            </div>
                            <div className="tab">
                                <h3>oTend</h3>
                                <p>Генерация кода для машинного обслуживания.</p>
                            </div>
                            <div className="tab">
                                <h3>oWeld</h3>
                                <p>Поддержка сварочных приложений.</p>
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
