import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './header.less';

class Header extends Component {

    render() {
        return (
            <div className={"header"}>
                <div className={"header-container"}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Header;