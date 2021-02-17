import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './select.less';

function Select(props) {

    const [value, setValue] = useState(props.defaultValue);
    const [isFocused, setIsFocused] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        if (selectRef && selectRef.current) {
            setValue(selectRef.current.value);
        }
    }, [])

    useEffect(() => {
        if (props.onChange && typeof props.onChange === 'function') {
            props.onChange(value);
        }
    }, [value])

    function onValueChange(e) {
        let new_val = e.target.value;
        setValue(new_val);
    }

    let options = [];
    let selectedLabel = value;
    if (props.options) {
        options = props.options.map(option => {
            return <option key={'option-' + option.value} value={option.value}>{option.label || option.value}</option>
        });
        let selectedOption = props.options.filter((option) => {
            return option.value === value;
        });

        selectedLabel = selectedOption[0] && (selectedOption[0].label || selectedOption[0].value) || value;
    }

   

    return (
        <div className={"select" + (isFocused ? ' focused' : '')}>
            <h3 className="select-label">{props.label}</h3>
            <div className="select-pole">
                <select
                    ref={selectRef}
                    defaultValue={props.defaultValue}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={onValueChange}
                    value={value}
                    className="hidden-select"
                    name={props.name}
                    >
                        {options}
                </select>
                <div className={"select-pole--value" + (!value ? ' placeholder' : '')}>{selectedLabel || 'Choose'}</div>
                <div className="icon-arrow">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.2L6.64 9.73a1 1 0 00-1.28 1.54l6 5a1 1 0 001.28 0l6-5a1 1 0 10-1.28-1.54L12 14.2z" fill="#B7B7B9" /></svg>
                </div>
            </div>
        </div>
    )
}


Select.defaultProps = {
    label: 'Sample select',
    name: 'select-name'
};

Select.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string.isRequired, label: PropTypes.string })).isRequired
};

export default Select;