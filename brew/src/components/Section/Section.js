import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './section.less';
import classNames from "../../lib/classNames";


class Section extends Component {

    constructor(props) {
        super(props);
        this.elem = React.createRef();
    }

    get Ref() {
        return this.elem;
    }

    render() {
        return(
            <section ref={this.elem} id={this.props.id} className={classNames('nr-section', this.props.background)}>
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