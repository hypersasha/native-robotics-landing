import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './title.less';

class Title extends Component {

    render() {
        return(<div className="nr-title">
            <p className="nr-title--text">{this.props.children || 'Category title'}</p>
            <div className={'nr-title--after'}>{this.props.after}</div>
        </div>)
    }
}

Title.propTypes = {
    after: PropTypes.element
};

export default Title;