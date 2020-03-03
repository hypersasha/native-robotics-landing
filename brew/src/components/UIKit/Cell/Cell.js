import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SettingsIcon from '../../../assets/imgs/icons/settings.png';
import './cell.less';

class Cell extends Component {

    render() {
        return (
            <div onClick={() => {this.props.onClick && this.props.onClick()}} className={'nr-cell' + (this.props.selected ? ' selected' : '')}>
                {this.props.icon &&
                <div className="nr-cell--icon">
                    <img src={this.props.icon || SettingsIcon} width={28}/>
                </div>
                }
                <p className={'nr-cell--label' + (this.props.danger ? ' danger' : '')}>{this.props.children}</p>
                <div className="nr-cell--after">
                    {this.props.after}
                </div>
            </div>
        )
    }
}

Cell.propTypes = {
    selected: PropTypes.bool,
    after: PropTypes.element,
    danger: PropTypes.bool
};

Cell.defaultProps = {
    selected: false,
    danger: false
};

export default Cell;