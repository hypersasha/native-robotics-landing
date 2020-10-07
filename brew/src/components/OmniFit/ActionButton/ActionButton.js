import './action-button.less';

import React, {Component} from 'react';

const ActionButton = props =>
    <div onClick={props.onClick} className={'action-button'}>
        {props.label}
    </div>;

export default ActionButton;
