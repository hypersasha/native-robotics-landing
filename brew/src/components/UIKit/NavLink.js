import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NavLink extends Component {

    constructor(props) {
        super(props);

        this.goNav = this.goNav.bind(this);
    }

    goNav() {
        let section = document.getElementById(this.props.hash || 'intro');
        if (section) {
            let scrollOffset = section.offsetTop;
            window.scrollTo(0, scrollOffset - 108);

            if (this.props.onNavigate) this.props.onNavigate(this.props.hash);
        }
    }

    render() {
        return (
            <div className={"st-menu--tab" + (this.props.activeTab === this.props.hash ? ' active' : '') + (this.props.head ? ' category' : '')}
                 onClick={this.goNav}>
                {this.props.children}
            </div>
        )
    }
}

NavLink.propTypes = {
    children: PropTypes.string,
    activeTab: PropTypes.string,
    hash: PropTypes.string,
    onNavigate: PropTypes.func
};

NavLink.defaultProps = {
    children: 'Link Label',
    activeTab: 'intro',
    hash: 'nohash'
};

export default NavLink;