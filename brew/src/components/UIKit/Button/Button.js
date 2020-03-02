import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './button.less';

class Button extends Component {

    render() {
        return(
            <div className="nr-button">
                <div className="nr-button--box">
                    {this.props.label}
                </div>
            </div>
        )
    }
}

Button.propTypes = {
    label: PropTypes.string
};

Button.defaultProps = {
    label: 'Button'
};

export default Button;