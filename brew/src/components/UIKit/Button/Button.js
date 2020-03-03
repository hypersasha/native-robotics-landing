import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './button.less';

class Button extends Component {

    render() {
        const {label, level, ...restProps} = this.props;
        return (
            <div className="nr-button">
                <div
                    className={"nr-button--box" + (level === 'secondary' ? ' secondary' : '')
                    + (level === 'danger' ? ' danger' : '')
                    + (level === 'white' ? ' white' : '')}>
                    {this.props.icon &&
                    <div className="nr-button--box-icon">
                        <img src={this.props.icon} width={this.props.width || 21}/>
                    </div>
                    }
                    <div className={'nr-button--box-label' + (this.props.icon ? ' icon' : '') + (level === 'white' ? ' white' : '')}>
                        {label}
                    </div>
                </div>
            </div>
        )
    }
}

Button.propTypes = {
    label: PropTypes.string,
    level: PropTypes.oneOf(['secondary', 'danger', 'white'])
};

Button.defaultProps = {
    label: 'Button'
};

export default Button;