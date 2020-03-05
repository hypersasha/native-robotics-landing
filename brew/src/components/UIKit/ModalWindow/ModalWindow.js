import React, {Component} from 'react';
import PropTypes from 'prop-types';

import  './modalwindow.less';
import Input from "../Input/Input";

class ModalWindow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isClosing: false
        };

        this.onCancel = this.onCancel.bind(this);
    }

    onCancel() {
        this.setState({
            isClosing: true
        });
    }

    closeWindow() {
        if (this.props.onCancel && this.state.isClosing) {
            this.props.onCancel();
            console.log('Modal Closed...');
        }
    }

    render() {
        return(
            <div className={"nr-modalWindow" + (this.state.isClosing ? ' closing' : '')} onAnimationEnd={() => this.closeWindow()}>
                <div className="nr-modal--container">
                    <div className="nr-modal--cover" onClick={this.onCancel} />
                    <div className="nr-modal--container-box">
                        <div className="nr-modal--title">Preset has changed</div>
                        <div className="nr-modal--description">
                            You can rewrite this preset or change it’s name to create a new one.
                        </div>
                        <div className="nr-modal--after">
                            <Input placeholder={'Preset name'} defaultValue={'Jacobs_Melicano_100x15'} />
                        </div>
                        <div className="nr-modal--actions">
                            <div className="nr-modal--actions-button">
                                Save Preset
                            </div>
                            <div className="nr-modal--actions-button" onClick={this.onCancel}>
                                Cancel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ModalWindow.propTypes = {
    onCancel: PropTypes.func
};

export default ModalWindow;