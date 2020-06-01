import React from 'react';
import classNames from "../../../lib/classNames";
import PropTypes from "prop-types";

import './opack-title.less';

const Title = props =>
    <div className={classNames('opack-title', props.align)}>
        {props.level === "primary" && <h1>{props.children}</h1>}
        {props.level === "secondary" && <h2>{props.children}</h2>}
    </div>;

Title.propTypes = {
    align: PropTypes.oneOf(['left', 'center']),
    level: PropTypes.oneOf(['primary', 'secondary'])
};

Title.defaultProps = {
    align: 'left',
    level: 'secondary'
};

export default Title;
