import React, {Component} from 'react';

import PropTypes from 'prop-types';
import './switch.less';

class Switch extends Component {
    constructor(props) {
        super(props);

        if (typeof props.isActive !== "undefined") {
            this.isControlledOutside = true;
            this.state = {};
        } else {
            this.state = {
                isActive: false
            };
        }

        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleClick() {
        if (!this.isControlledOutside) {
            this.setState((prevState) => ({
                isActive: !prevState.isActive
            }), () => {
                // Call user's callback.
                if (this.props.onSwitch) {
                    this.props.onSwitch(this.state.isActive);
                }
            });
            return false;
        }

        if (this.props.onSwitch) {
            this.props.onSwitch(this.props.isActive);
        }
    }

    render() {
        let isActive = false;
        if (this.isControlledOutside) {
            isActive = this.props.isActive;
        } else {
            isActive = this.state.isActive;
        }

        return (
            <div className={"nr-switch" + (isActive ? " active" : "")} onClick={this.HandleClick}/>
        )
    }
}

Switch.propTypes = {
    isActive: PropTypes.bool,
    onSwitch: PropTypes.func
};

export default Switch;