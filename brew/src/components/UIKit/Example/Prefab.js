import React from "react";
import UnityPrefabIcon from "../../../assets/imgs/UnityPrefabIcon.png";

const Prefab = props => (
    <div className={"prefab"} style={{paddingLeft: (props.level || 1) * 8}}>
        <div className="prefab-arrow">
            <svg width="10" transform={`rotate(${props.expanded ? '0' : '-90'})`} height="9" viewBox="0 0 10 9" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M5 8.90804L9.33013 0.658035H0.669873L5 8.90804Z" fill="#777777"/>
            </svg>
        </div>
        <img src={UnityPrefabIcon} width={18} height={19} className={'prefabIcon'}/>
        <p className={'prefab-label'}>{props.label || 'Prefab Name'}</p>
    </div>
);

export default Prefab;