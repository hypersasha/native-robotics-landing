import React from 'react';

import PropTypes from 'prop-types';

import './app-mock.less';
import classNames from "../../../lib/classNames";

const ipad = require('../../../assets/imgs/omnipack/ipad-11-border.jpg');

const AppMock = props => {
    return (
        <div className={classNames("app-mock", {['inline']: props.inline})}>
            <div className="app-mock--image" style={{backgroundImage: "url(" + props.image + ")"}}/>
            <img src={ipad} />
        </div>
    )
};

AppMock.propTypes = {
    'inline': PropTypes.bool
};

AppMock.defaultProps = {
    'inline': false
};

export default AppMock;
