import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './section-header.less';
import classNames from "../../lib/classNames";

class SectionHeader extends Component {
    render() {
        const {icon, white, ...restProps} = this.props;
        return(
            <div id={this.props.id} className={"section-header"}>
                {icon !== undefined && <img src={icon} className={classNames({['noText']: !this.props.children})} width={41} height={41} alt={"Title Icon"} />}
                <h1 className={classNames({['white']: white, ['isIcon']: icon, ['noText']: !this.props.children}, this.props.className)} style={{fontSize: this.props.fontSize}}>{this.props.children}</h1>
            </div>
        );
    }
}

SectionHeader.propTypes = {
    icon: PropTypes.string,
    white: PropTypes.bool,
    fontSize: PropTypes.number
};

SectionHeader.defaultProps = {
    white: false,
    fontSize: 48
};

export default SectionHeader;