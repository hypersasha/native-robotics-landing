import React, {Component} from 'react';
import PropTypes from 'prop-types';

import SettingsIcon from '../../../assets/imgs/icons/settings.png';
import './cell.less';

class Cell extends Component {

    render() {
        const {danger, selected, onClick, children, after, icon, ...restProps} = this.props;
        return (
            <div
                onClick={(e) => {
                    onClick && onClick(e)
                }}
                className={'nr-cell' + (selected ? ' selected' : '')}
                {...restProps}
            >
                {icon &&
                <div className="nr-cell--icon">
                    <img src={icon || SettingsIcon} width={28}/>
                </div>
                }
                <p className={'nr-cell--label' + (danger ? ' danger' : '')}>{children}</p>
                <div className="nr-cell--after">
                    {after}
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