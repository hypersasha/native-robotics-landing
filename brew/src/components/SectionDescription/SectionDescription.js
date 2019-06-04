import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './section-description.less';
import classNames from "../../lib/classNames";

class SectionDescription extends Component {
    render() {

        const {white, ...restProps} = this.props;

        return (
            <div className={'section-description'}>
                <p className={classNames({['white']: white})}>{this.props.children}</p>
            </div>
        )
    }
}

SectionDescription.propTypes = {
    white: PropTypes.bool
};

SectionDescription.defaultProps = {
    white: false
};

export default SectionDescription;