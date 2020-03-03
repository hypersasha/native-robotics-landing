import React, {Component} from 'react';
import Container from "../Container/Container";
import PropTypes from 'prop-types';

import './inlinebutton.less';

class InlineButton extends Component {
    render() {
        return (
            <Container>
                <div className="nr-inlineButton">
                    {this.props.icon &&
                    <div className="nr-inlineButton--icon">
                        <img src={this.props.icon} width={21}/>
                    </div>
                    }
                    <div className="nr-inlineButton--label">
                        {this.props.label}
                    </div>
                </div>
            </Container>
        )
    }
}

export default InlineButton;