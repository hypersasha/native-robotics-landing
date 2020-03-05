import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './slider.less';

class Slider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            percent: 0,
            x: 0
        };

        this.mouseDown = false;

        this.updatePercentage = this.updatePercentage.bind(this);
        this.onDown = this.onDown.bind(this);
        this.onUp = this.onUp.bind(this);
        this.sliderAreaRef = React.createRef();
        this.sliderTrackRef = React.createRef();
    }

    onDown(e) {
        this.mouseDown = true;
        this.updatePercentage(e);
    }

    onUp(e) {
        this.mouseDown = false;
    }

    updatePercentage(e) {
        if (this.mouseDown) {
            let x = e.pageX - (this.sliderAreaRef.current.offsetLeft);
            let percent = (x / this.sliderTrackRef.current.clientWidth) * 100;
            percent = Slider.clamp(percent, 0, 100);
            x = Slider.clamp(x, 0, this.sliderTrackRef.current.clientWidth);
            this.setState({percent, x}, () => {
                console.log(this.state.percent);
                if (this.props.onUpdate) {
                    this.props.onUpdate(this.state.percent);
                }
            })
        }
    }

    static clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
    }

    render() {
        return(
            <div className="nr-slider" ref={this.sliderAreaRef} onMouseMove={this.updatePercentage} onMouseLeave={this.onUp} onMouseUp={this.onUp} onMouseDown={this.onDown}>
                <div className="nr-slider--pin" style={{marginLeft: this.state.x - 12 + 'px'}} />
                <div className="nr-slider--track" ref={this.sliderTrackRef}>
                    <div className="nr-slider--track-fill" style={{width: this.state.percent + '%'}} />
                </div>
            </div>
        )
    }
}

Slider.propTypes = {
    onUpdate: PropTypes.func
};

export default Slider;