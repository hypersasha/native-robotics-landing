import React, {Component} from 'react';
import './inforow.less';
import PropTypes from 'prop-types';

class InfoRow extends Component {
    render() {
        return (
            <div className="nr-infoRow">
                <div className="nr-infoRow--title">
                    {this.props.title}
                </div>
                <div className="nr-infoRow--content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

InfoRow.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string
};

export default InfoRow;