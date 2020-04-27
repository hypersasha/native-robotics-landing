import React, {Component} from 'react';
import './microbutton.less';

import IconClear from '../../../assets/imgs/icons/clear.png'

class MicroButton extends Component {
    render() {
        return(
            <div className="nr-microButton">
                <div className="nr-microButton--icon">
                    <img src={IconClear} width={21}/>
                </div>
                <div className="nr-microButton--label">{this.props.label}</div>
            </div>
        )
    }
}

export default MicroButton;