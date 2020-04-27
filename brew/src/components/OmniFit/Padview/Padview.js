import React, {Component} from 'react';
import './padview.less';

const Padview = props =>
    <div className="padview">
        <div className="padview-image" style={{backgroundImage: "url(" + props.image + ")"}} />
    </div>;

export default Padview;
