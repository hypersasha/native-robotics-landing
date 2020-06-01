import React from 'react';

import './opack-text.less';
import classNames from "../../../lib/classNames";
import PropTypes from "prop-types";

const Text = props => {
    return (
        <div className={classNames('opack-text', props.align, {['wide']: props.wide})}>
            <p>{props.children}</p>
        </div>
    )
};

Text.propTypes = {
    align: PropTypes.oneOf(['left', 'center']),
    wide: PropTypes.bool
};

Text.defaultProps = {
    align: 'left',
    wide: false
};

export default Text;
