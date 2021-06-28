import './title.less';

import React, {Component} from 'react';

const Title = props =>
    <div className={'title' + (props.center ? ' centered' : '') + (props.small ? ' small' : '') + (props.dark ? ' dark' : '')}>
        {props.text}
    </div>;

export default Title;
