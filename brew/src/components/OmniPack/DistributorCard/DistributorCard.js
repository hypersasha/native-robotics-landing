import React from 'react';
import PropTypes from 'prop-types';

import './distributor-card.less';

export default function DistributorCard(props) {
    return (
        <div className="distributor-card">
            <div className="distributor-card--container">
                <div className="label">{props.label}.</div>
                <div className="dist-info">
                    {props.logo &&
                        <figure className="dist-info--logo">
                            <img src={'assets/images/' + props.logo} alt="Company logo" />
                        </figure>
                    }
                    <div className="title-address">
                        <h2>{props.title}</h2>
                        <p>{props.address}</p>
                    </div>
                    <div className="website">
                        <a href={props.url || "#"} target="_blank"></a>
                        <span>Open website</span>
                        <div className="link-icon">
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.75 3a1 1 0 011-1H21a1 1 0 011 1v5.25a1 1 0 11-2 0V5.41l-8.8 8.8a1 1 0 01-1.4-1.42L18.58 4h-2.84a1 1 0 01-1-1z" fill="#FF9500" /><path d="M4.88 7a.88.88 0 00-.88.88v11.25a.87.87 0 00.88.87h11.25a.87.87 0 00.87-.88V10.5a1 1 0 112 0v8.63A2.88 2.88 0 0116.12 22H4.88A2.87 2.87 0 012 19.12V7.88A2.87 2.87 0 014.88 5h7.85a1 1 0 110 2H4.87z" fill="#FF9500" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

DistributorCard.propTypes = {
    logo: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.string,
    url: PropTypes.string,
    label: PropTypes.string
}