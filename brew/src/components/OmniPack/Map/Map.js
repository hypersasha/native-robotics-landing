import React, { useEffect, useState } from 'react';

import DistributorCard from '../../../components/OmniPack/DistributorCard/DistributorCard';
import { DISTRIBUTORS } from './distributors';
import { MAP_BOUNDS } from './mapbounds';

import './map.less';

export default function Map(props) {


    const [results, setResults] = useState([]);

    let map = null;
    let markers = [];

    useEffect(() => {
        console.log(DISTRIBUTORS);
    }, []);

    useEffect(() => {
        if (props.country && props.robot) {
            initMap();
        }
    }, [props.country, props.robot])

    function initMap() {
        if (!props.country) return false;
        const { center, zoom, ...latLngBounds } = getMapBoundsByCountry(props.country || 'Spain');
        map = new google.maps.Map(document.getElementById("gmaps"), {
            zoom,
            minZoom: zoom,
            maxZoom: zoom + 6,
            center: center,
            restriction: {
                latLngBounds: latLngBounds,
                strictBounds: false
            }
        });
        createMarkers();
    }

    function createMarkers() {
        let labelsLetters = 'ABCDEFGHIJK';
        let distributors = DISTRIBUTORS[props.country];
        if (!distributors) return false;
        
        let res = [];
        distributors.map((dist) => {
            if (dist.robots.indexOf(props.robot) >= 0) {
                let markerLabel = labelsLetters.split("").shift();
                let marker = new google.maps.Marker({
                    position: dist.coordinates,
                    title: dist.name,
                    label: markerLabel
                });
                marker.setMap(map);
                
                // Update results.
                res.push(<DistributorCard key={dist.url} label={markerLabel} title={dist.name} logo={dist.logo} address={dist.address} url={dist.url} />);
                
                // Update labels string
                let lettersArr = labelsLetters.split("");
                lettersArr.shift();
                labelsLetters = lettersArr.join("");

            }
        })
        setResults(res);
    }

    function getMapBoundsByCountry(country) {
        return MAP_BOUNDS[country] || MAP_BOUNDS.Spain;
    }

    return (
        <div className="omnipack-distributors-map">
            {/* <p>Country: {props.country}</p>
            <p>Robot: {props.robot}</p> */}
            <div className="results">
                <div className="results-cards">
                    {results}
                </div>
                <div className="results-count">
                    <p>{results.length > 0 ? results.length + ' distributors found.' : 'No distributors found.' }</p>
                </div>
            </div>
            <div id="gmaps" className="google-maps"></div>
        </div>
    )
}