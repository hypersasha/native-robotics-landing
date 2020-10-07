import './apptab.less';

import React, {Component} from 'react';

const AppTab = props =>
    <div className={'app'}>
        <div className="content">
            <div className="app-title">{props.title}</div>
            <div className="app-description">{props.description}</div>
        </div>
        <div className="preview" style={{backgroundImage: 'url(' + props.previewUrl + ')'}} />
    </div>;

export default AppTab;
