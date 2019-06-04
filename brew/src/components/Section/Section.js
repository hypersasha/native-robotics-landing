import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './section.less';
import classNames from "../../lib/classNames";


class Section extends Component {

    render() {
        return(
            <section id={this.props.id} className={classNames('nr-section', this.props.background)}>
                {this.props.children}
                <div className="divider" style={{background: this.props.dividerColor}}/>
            </section>
        )
    }
}

Section.propTypes = {
    id: PropTypes.string.isRequired,
    background: PropTypes.oneOf(['WhiteGrey', 'GreyWhite', 'Black']),
    dividerColor: PropTypes.string
};

Section.defaultProps = {
    background: 'WhiteGrey',
    dividerColor: '#FFFFFF'
};

export default Section;