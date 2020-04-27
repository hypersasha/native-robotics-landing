import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './dropdownbutton.less';

class TitleButton extends Component {
    render() {
        return (
            <div className={'nr-title--dropdown'}>
                <p>{this.props.label}</p>
            </div>
        );
    }
}

TitleButton.propTypes = {
    label: PropTypes.string.isRequired
};

export default TitleButton;
