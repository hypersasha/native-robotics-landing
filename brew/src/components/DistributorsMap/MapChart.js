import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";
import CountryLabel from "./CountryLabel";

import DistributorMarker from "./DistributorMarker";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = (props) => {
  const [mapWidth] = useState(window.innerWidth);
  const [mapHeight] = useState(
    window.innerWidth / 3 > 460 ? window.innerWidth / 3 : 460
  );
  const baseStroke = 1;
  const [pos, setPos] = useState([-6, 45]);

  const { theme, markers } = props;

  const themes = {
    light: {
      background: "#dadada",
      fill: "#ffffff",
      stroke: "#dddddd"
    },
    dark: {
      background: "#111111",
      fill: "#333333",
      stroke: "#111111",
      color: "#ccc"
    },
    retro: {
      background: "#b9d3c2",
      fill: "#DFD2AE",
      stroke: "#C9B2A6"
    },
    twogis: {
      background: "#B2DDF4",
      fill: "#EFECDC",
      stroke: "#DCD2B2"
    }
  };

  function onMoved(position) {
    setPos(position.coordinates || [-6, 45]);
  }

  function blurSelectedMarker(e) {
    if (e.target && e.target.parentNode && e.target.parentElement.className && e.target.parentElement.className.baseVal !== "dist-marker") {
      props.scrollToDist(null);
    }
  }

  useEffect(() => {
    setPos(props.center);
  }, [props.center]);

  return (
    <div
      className="distributorMap"
      style={{ backgroundColor: themes[theme].background }}
    >
      <div className="mapCopy">Native Robotics © 2020</div>
      <ComposableMap
        width={mapWidth}
        height={mapHeight}
        // projection="geoOrthographic"
        onClick={blurSelectedMarker}
        projectionConfig={{
          // rotate: [props.rotation, -30, 0],
          scale: 600
        }}
      >
        <ZoomableGroup
          // translateExtent={[
          //   [0, -mapHeight],
          //   [mapWidth, mapHeight]
          // ]}
          onMoveEnd={onMoved}
          center={pos}
          zoom={props.zoom}
          minZoom={props.zoom}
          maxZoom={props.zoom}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                if (geo.properties.NAME !== "Antarctica") {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      fill={
                        geo.properties.NAME === "Spain" ||
                        geo.properties.NAME === "Norway" ||
                        geo.properties.NAME === "Portugal" ||
                        geo.properties.NAME === "United Kingdom" ||
                        geo.properties.NAME === "Belarus" ||
                        geo.properties.NAME === "Turkey" ||
                        geo.properties.NAME === "Russia" ||
                        geo.properties.NAME === "Mexico"
                          ? "#DDECB2"
                          : themes[theme].fill
                      }
                      stroke={themes[theme].stroke}
                      strokeWidth={baseStroke / props.zoom}
                      geography={geo}
                    />
                  );
                } else {
                  return false;
                }
              })
            }
          </Geographies>
          {markers.map((marker) => {
            return marker.name !== props.pickedMarker ? (
              <DistributorMarker
                key={marker.name}
                zoom={props.zoom}
                isPicked={marker.name === props.pickedMarker}
                scrollToDist={props.scrollToDist}
                name={marker.name}
                city={marker.city}
                color={themes[theme].color}
                coordinates={marker.coordinates}
              />
            ) : null;
          })}

          <CountryLabel
            zoom={props.zoom}
            coordinates={[-3.832101, 38.367043]}
            label="Spain"
          />

          <CountryLabel
            zoom={props.zoom}
            coordinates={[-3.989036, 55.83803]}
            label="UK"
          />

          <CountryLabel
            zoom={props.zoom}
            coordinates={[-8.55787, 39.000379]}
            label="Portugal"
          />

          <CountryLabel
            zoom={props.zoom}
            coordinates={[8.829254, 62.45548]}
            label="Norway"
          />

          <CountryLabel
            zoom={props.zoom}
            coordinates={[35.383654, 39.13145]}
            label="Turkey"
          />

          <CountryLabel
            zoom={props.zoom}
            coordinates={[64.387699, 60.951175]}
            label="Russia"
          />

          <CountryLabel
            zoom={props.zoom}
            coordinates={[27.799236, 52.184065]}
            label="Belarus"
          />

          <CountryLabel
            zoom={props.zoom}
            coordinates={[-102.471382, 23.805431]}
            label="Mexico"
          />

          {markers.map((marker) => {
            return marker.name === props.pickedMarker ? (
              <DistributorMarker
                key={marker.name}
                zoom={props.zoom}
                isPicked={marker.name === props.pickedMarker}
                scrollToDist={props.scrollToDist}
                name={marker.name}
                city={marker.city}
                color={themes[theme].color}
                coordinates={marker.coordinates}
              />
            ) : null;
          })}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
