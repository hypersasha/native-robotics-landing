import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './snackbar.less';

class Snackbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isClosing: false
        };

        this.onClosed = this.onClosed.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isClosing: true
            })
        }, 3500);
    }

    onClosed() {
        if (this.state.isClosing) {
            this.props.onClose();
        }
    }

    render() {
        return(
            <div className={"snackbar-container" + (this.state.isClosing ? ' closing' : '')} onAnimationEnd={this.onClosed}>
                <div className="nr-snackbar">
                    <div className="nr-snackbar--icon">
                        <img src={this.props.icon} width={32}/>
                    </div>
                    <div className="nr-snackbar--description">
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}

Snackbar.propTypes = {
    onClose: PropTypes.func.isRequired,
    description: PropTypes.string
};

export default Snackbar;