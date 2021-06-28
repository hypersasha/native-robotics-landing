import React from "react";
import { Marker } from "react-simple-maps";

import "./distributor-marker.css";

const DistributorMarker = (props) => {
  return (
    <Marker key={props.name} coordinates={props.coordinates}>
      {props.zoom < 1.5 && !props.isPicked && (
        <circle
          r={7}
          onClick={() => {
            props.scrollToDist(props.name);
          }}
          fill="#000000"
          transform={`scale(${1 / props.zoom})`}
          stroke="#fff"
          strokeWidth="1"
          className={"marker-circle"}
        />
      )}
      {(props.zoom >= 1.5 || props.isPicked) && (
        <svg
          width="34"
          height="42"
          x={-15 / props.zoom}
          y={-38 / props.zoom}
          viewBox="0 0 34 42"
          className="dist-marker"
          onClick={() => {
            props.scrollToDist(props.name);
          }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="whiteOutlineEffect">
              <feMorphology
                in="SourceAlpha"
                result="MORPH"
                operator="dilate"
                radius="1"
              />
              <feColorMatrix
                in="MORPH"
                result="WHITENED"
                type="matrix"
                values="-1 0 0 1 0, 0 -1 0 1 0, 0 0 -1 1 0, 0 0 0 1 0"
              />
              <feMerge>
                <feMergeNode in="WHITENED" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M29.2061 29.6253C27.1956 33.209 20.257 36.0544 16.8215 37.2808C15.7562 37.6611 14.6317 37.0303 14.401 35.9229C13.657 32.3518 12.4689 24.9471 14.4794 21.3634C16.7609 17.2967 21.907 15.8495 25.9737 18.1309C30.0404 20.4124 31.4876 25.5586 29.2061 29.6253Z"
            fill="black"
            fillOpacity="0.18"
            transform={`scale(${1 / props.zoom})`}
          />
          <path
            d="M29.5 14.5C29.5 22.1746 20.0369 33.4387 16.4003 37.484C15.6441 38.3252 14.3559 38.3252 13.5997 37.484C9.96313 33.4387 0.5 22.1746 0.5 14.5C0.5 6.49187 6.99187 0 15 0C23.0081 0 29.5 6.49187 29.5 14.5Z"
            fill={props.isPicked ? "#ff9500" : "#040506"}
            className="marker-drop"
            transform={`scale(${1 / props.zoom})`}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5053 11.9572V21.7188H9.5V9H18.3915C18.9511 9.00066 19.4876 9.22027 19.883 9.61053C20.2784 10.0008 20.5003 10.5298 20.5 11.0812V21.7188H17.4947L15.6161 17.2335H17.4972V12.7457C17.4969 12.5367 17.4125 12.3363 17.2625 12.1885C17.1125 12.0407 16.9091 11.9576 16.697 11.9572H12.5053ZM15.1344 14.2534H14.4504V15.3594H15.5504V14.6716C15.5504 14.5607 15.5065 14.4543 15.4285 14.3759C15.3505 14.2974 15.2447 14.2534 15.1344 14.2534Z"
            fill="white"
            transform={`scale(${1 / props.zoom})`}
          />
        </svg>
      )}
      {(props.zoom >= 2 || props.isPicked) && (
        <text
          fontFamily="Roboto"
          fontSize="13"
          fontWeight={700}
          fill={props.color ? props.color : "#615E50"}
          y={14}
          filter="url(#whiteOutlineEffect)"
          transform={`scale(${1 / props.zoom})`}
          textAnchor="middle"
        >
          {props.name}
        </text>
      )}
      {(props.zoom >= 2 || props.isPicked) && (
        <text
          fontFamily="Roboto"
          fontSize="12"
          fontWeight={400}
          fill={props.color ? props.color : "#999"}
          y={28}
          transform={`scale(${1 / props.zoom})`}
          textAnchor="middle"
        >
          {props.city}
        </text>
      )}
    </Marker>
  );
};

export default DistributorMarker;
