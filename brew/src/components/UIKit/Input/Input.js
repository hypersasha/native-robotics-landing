import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './input.less';

class Input extends Component {
    render() {
        return(
            <div className={'nr-input'}>
                {this.props.label && <div className="nr-input--label">{this.props.label}</div>}
                <input type={'text'} placeholder={this.props.placeholder} />
            </div>
        )
    }
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    placeholder: '100'
};

export default Input;