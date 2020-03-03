import React from "react";

const Tip = props => (
    <div className={'st-tip'}>
        <div className="st-tip--title">
            <div className="st-tip--title-icon">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.5 0C4.71036 0 0 4.71036 0 10.5C0 16.2896 4.71036 21 10.5 21C16.2896 21 21 16.2896 21 10.5C21 4.71036 16.2896 0 10.5 0ZM11.5096 16.1493H9.49038V14.1301H11.5096V16.1493ZM11.3077 12.9231H9.69231L9.38942 4.84615H11.6106L11.3077 12.9231Z"
                        fill="#E3E3E3"/>
                </svg>
            </div>
            <div className="st-tip--title-text">
                {props.title || "Подсказка"}
            </div>
        </div>
        <div className={'st-tip--content'}>{props.children}</div>
    </div>
);

export default Tip;