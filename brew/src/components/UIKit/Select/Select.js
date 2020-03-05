import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './select.less';
import Cell from "../Cell/Cell";

class Select extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showOptions: false,
            selectedOption: null
        };

        this.showOptions = this.showOptions.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.optionClick = this.optionClick.bind(this);
        this.optionsRef = React.createRef();
    }

    componentDidMount() {

    }

    showOptions() {
        this.setState({
            showOptions: true
        }, () => {
            if (this.state.showOptions) {
                document.addEventListener('click', this.hideOptions);
            }
        });
    }

    hideOptions() {
        console.log('hide options.');
        this.setState({
            showOptions: false
        }, () => {
            document.removeEventListener('click', this.hideOptions);
        });
    }

    optionClick(option) {
        if (typeof option === 'string') {
            console.log('picking option --> ', option);
            this.setState({
                selectedOption: option
            })
        }
    }

    render() {

        const options = [];
        for (let key in this.props.options) {
            options.push(
                <Cell key={Math.random()*1000} after={this.state.selectedOption === key ?
                    <div style={{width: 15, height: 12, lineHeight: '12px'}}>
                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1L4.9 11L1 7.25" stroke="#FF9500" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                    </div> : null
                } onClick={(e) => {this.optionClick(key) }}>{this.props.options[key]}</Cell>
            )
        }

        return(
            <div className="nr-select">
                {this.props.label && <div className="nr-select--label">{this.props.label}</div>}
                <div className={"nr-select--container" + (this.state.showOptions ? ' focused' : '')} onClick={this.showOptions}>
                    <div className={"selected-option" + (this.state.selectedOption ? ' selected' : '')}>
                        {this.state.selectedOption ? this.props.options[this.state.selectedOption] : this.props.placeholder}
                    </div>
                    <div className="arrow">
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 5L11 1" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                <div className={'optionsContainer'}>
                    {
                        this.state.showOptions &&
                        <div className="options" ref={this.optionsRef}>
                            {options}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

Select.propTypes = {
    options: PropTypes.object,
    placeholder: PropTypes.string
};

Select.defaultProps = {
    placeholder: 'Choose Gripper',
    options: {
        'front': 'Front',
        'right': 'Right',
        'back': 'Back',
        'left': 'Left'
    }
};

export default Select;