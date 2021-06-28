import React, {Component} from 'react';
import './padview.less';

import iPad from '../../../assets/imgs/omnifit/ipad-pro-mock.png';

const Padview = props =>
    <div className="padview">
        <img className={"iPadMockMobile"} src={iPad} title={'iPad.'} />
        <div className="padview-image" style={{backgroundImage: "url(" + props.image + ")"}} />
    </div>;

export default Padview;
