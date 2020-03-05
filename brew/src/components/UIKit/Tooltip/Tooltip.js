import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './tooltip.less';

class Tooltip extends Component {

    constructor(props) {
        super(props);

        this.state = {
            left: 0,
            top: 0
        };

        this.childRef = React.createRef();
    }

    componentDidMount() {
        if (this.refs[0]) {
            let child = ReactDOM.findDOMNode(this.refs[0]);
            console.log(child.offsetWidth, child.offsetTop);
            this.setState({
                left: child.clientWidth - 10,
                top: child.offsetHeight - 4
            })
        }
    }

    render() {
        return (
            <div className="nr-tooltip-box">
                {React.Children.map(this.props.children, (element, idx) => {
                    return React.cloneElement(element, { ref: idx });
                })}
                <div className="nr-tooltip" ref={this.childRef} style={{marginLeft: this.state.left, marginTop: -this.state.top}}>
                    <div className="nr-tooltip--corner">
                        <svg width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 17L7.5 17L7.5 16.9996L7.5 1.00043L7.5 1L7 1C6.5 1 6.5 0.9998 6.5 0.999605L6.5 0.999247L6.49985 1.00475C6.49965 1.01219 6.49919 1.02533 6.49815 1.04379C6.49607 1.08074 6.49169 1.13888 6.4825 1.21517C6.46409 1.36789 6.4265 1.59235 6.34992 1.86463C6.19686 2.40884 5.88888 3.14153 5.26785 3.87756C4.33622 4.98172 2.44052 6.88097 1.38401 7.92357C0.783927 8.51575 0.783927 9.48426 1.38401 10.0764C2.44052 11.119 4.33622 13.0183 5.26785 14.1224C5.88888 14.8585 6.19686 15.5912 6.34992 16.1354C6.4265 16.4077 6.46409 16.6321 6.4825 16.7848C6.49169 16.8611 6.49607 16.9193 6.49815 16.9562C6.49919 16.9747 6.49965 16.9878 6.49985 16.9952L6.5 17.0021M7 17L6.5 17.0022C6.50001 17.0025 6.50001 17.0025 6.5 17.0021M7 17C6.5 17 6.5 17.0002 6.5 17.0004M7 17L6.5 17.0004M6.5 17.0021L6.5 17.0014M6.5 17.0021L6.5 17.0014M6.5 17.0014L6.5 17.0008M6.5 17.0014L6.5 17.0008M6.5 17.0008L6.5 17.0004M6.5 17.0008L6.5 17.0004M6.5 0.997942L6.5 0.997845C6.50001 0.997503 6.50001 0.997538 6.5 0.997942Z"
                                fill="#0077FF" stroke="#0077FF" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className="nr-tooltip--container">
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Tooltip;