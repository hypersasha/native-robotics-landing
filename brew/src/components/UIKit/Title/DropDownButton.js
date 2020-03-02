import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './dropdownbutton.less';

class DropDownButton extends Component {
    render() {
        return (
            <div className={'nr-title--dropdown'}>
                <p>{this.props.label}</p>
                <div className={'dropdown-icon'}>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 5L11 1" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>
        );
    }
}

DropDownButton.propTypes = {
    label: PropTypes.string.isRequired
};

export default DropDownButton;
