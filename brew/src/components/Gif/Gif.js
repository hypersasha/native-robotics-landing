import React, {Component} from 'react';

import PropTypes from 'prop-types';

import './gif.less';
import Dots from "../Dots/Dots";

class Gif extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false,
            isLoaded: false
        };

        this.Play = this.Play.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    Play() {
        this.setState({
            isPlaying: true
        });
    }

    onLoad() {
        this.setState({
            isLoaded: true
        });
    }

    render() {
        const playing = this.state.isPlaying || this.props.isPlaying;
        const image = playing ? this.props.gifUrl : (this.props.previewUrl || this.props.gifUrl);
        return (
            <div className={'gif-controller'} style={{backgroundImage: `url(${image})`}}>
                {
                    !playing &&
                    <div className={'play-control'} onClick={this.Play}>
                        <div className="play-icon">
                            <svg width="17px" height="21px" viewBox="0 0 17 21" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Native-Robotics" transform="translate(-706.000000, -2104.000000)" fill="#FFFFFF"
                                       fillRule="nonzero">
                                        <g id="oPack" transform="translate(-8.000000, 1609.000000)">
                                            <path
                                                d="M724.06204,498.186584 L731.824252,510.70628 C732.406293,511.645057 732.117102,512.877923 731.178326,513.459965 C730.861831,513.656192 730.496836,513.760159 730.124446,513.760159 L714.600023,513.760159 C713.495454,513.760159 712.600023,512.864729 712.600023,511.760159 C712.600023,511.387769 712.703991,511.022775 712.900218,510.70628 L720.662429,498.186584 C721.244471,497.247807 722.477338,496.958616 723.416114,497.540658 C723.678368,497.703255 723.899443,497.92433 724.06204,498.186584 Z"
                                                id="Triangle"
                                                transform="translate(722.362372, 505.500174) rotate(90.000000) translate(-722.362372, -505.500174) "></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p>Watch</p>
                    </div>
                }
                {
                    playing && !this.state.isLoaded &&
                    <div className={'play-control solid'}>
                        <Dots />
                    </div>
                }
                {
                    playing &&
                    <img onLoad={this.onLoad} src={this.props.gifUrl} style={{display: 'block', width: "100%", position: 'absolute', opacity: 0}} />
                }
            </div>
        );
    }

}

Gif.propTypes = {
    gifUrl: PropTypes.string.isRequired,
    previewUrl: PropTypes.string,
    alt: PropTypes.string,
    isPlaying: PropTypes.bool
};

Gif.defaultProps = {
    alt: 'Loading gif',
    isPlaying: false
};

export default Gif;