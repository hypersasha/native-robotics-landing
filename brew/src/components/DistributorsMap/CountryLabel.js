import React from "react";
import { Marker } from "react-simple-maps";

const CountryLabel = (props) => {
  return (
    <Marker key={props.label} coordinates={props.coordinates}>
      <text
        fontFamily="Roboto"
        fontSize="16"
        fontWeight={700}
        fill={"#000000"}
        filter="url(#whiteOutlineEffect)"
        textAnchor="middle"
        className="country-label"
        transform={`scale(${1 / props.zoom})`}
      >
        {props.label}
      </text>
    </Marker>
  );
};

export default CountryLabel;
