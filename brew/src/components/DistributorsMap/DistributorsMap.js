import React, { useState, useRef, useEffect } from "react";
import "./distributors-map.css";
import "./zoom.css";
import "./map-legend.css";

import MapChart from "./MapChart";

export default function DistributorsMap() {
  const [theme] = useState("twogis");
  const [markers] = useState([
    {
      name: "Inser Robotica",
      country: "Spain",
      address: "Derio Bidea, 55, 48100, Mungia, Bizkaia",
      city: "Bilbao",
      url: "https://www.inser-robotica.com/",
      coordinates: [-2.866836, 43.33368]
    },
    {
      name: "CFZ Cobots",
      country: "Spain",
      address: "C Jose Maria Castano Martinez, 44, 03202, Elch, Alicante",
      city: "Alicante",
      url: "https://cfzcobots.com/",
      coordinates: [-0.686868, 38.272803]
    },
    {
      name: "Robot+",
      country: "Spain",
      address:
        "Calle Londres, 10, Local comercial C-5, 28805, Alcalá de Henares, Madrid",
      city: "Madrid",
      url: "https://robotplus.es/",
      coordinates: [-3.335421, 40.498045]
    },
    {
      name: "ELEKTRES",
      country: "Spain",
      address: "Carrer de Santa Coloma, 82, 2b, 17005, Girona",
      city: "Girona",
      url: "https://www.elektres.cat/",
      coordinates: [2.78902, 42.283948]
    },
    {
      name: "Native Robotics",
      country: "UK",
      address: "2 Oscar Wilde Road, Reading",
      city: "Reading",
      url: "https://native-robotics.com/",
      coordinates: [-0.956806, 51.45691]
    },
    {
      name: "EPL",
      country: "Portugal",
      address: "Rua do Visconde de São João da Madeira",
      city: "São João da Madeira",
      url: "https://epl-si.com/",
      coordinates: [-8.502577, 40.894312]
    },
    {
      name: "Imperietek AS",
      country: "Norway",
      city: "Rogaland",
      address: "Kvartsvegen 32, 4104, Jorpeland, Rogaland",
      url: "https://www.imperietek.no/",
      coordinates: [6.043271, 59.032508]
    },
    {
      name: "ANT Company",
      country: "Russia",
      city: "Saint Petersburg",
      address: "Saint Petersburg, Glinyanaya st., b. 5/1, office 202",
      url: "https://easypallet.ru",
      coordinates: [30.392697, 59.91621]
    },
    {
      name: "Indutech",
      country: "Russia",
      city: "Saint Petersburg",
      address: "Saint Petersburg, Kondratievski pr., b. 15",
      url: "https://www.indutech.ru/",
      coordinates: [34.382759, 61.964114]
    },
    {
      name: "Technored",
      country: "Russia",
      city: "Moscow",
      address: "Moscow, Antonova-Ovseenko st., b. 15",
      url: "https://technored.ru/",
      coordinates: [37.536375, 55.756717]
    },
    {
      name: "Promenergo",
      country: "Russia",
      city: "Moscow",
      address: "Moscow,  Ryazanski pr., 8A, build. 46",
      url: "https://промэнергоавтоматика.рф",
      coordinates: [39.536375, 58.756717]
    },
    {
      name: "PNS",
      country: "Republic of Belarus",
      city: "Minsk",
      address: "Cnyanka, Dzerzhinskogo st., b. 75",
      url: "https://www.pns.by/",
      coordinates: [27.595241, 53.908582]
    },
    {
      name: "Kenttur",
      country: "Turkey",
      city: "İstanbul",
      address: "Şerifali Mh. Hattat Sok. No: 34 Ümraniye - İstanbul, 34775",
      url: "http://www.kenttur.com",
      coordinates: [28.979578, 41.007788]
    }
  ]);

  const maxZoom = 5;
  const minZoom = 1.5;
  const zoomStep = 0.4;
  const [zoom, setZoom] = useState(1.5);

  const distRef = useRef(null);
  const zoomRef = useRef(null);

  const [pickedMarker, setPickedMarker] = useState(null);
  const [center, setCenter] = useState([-4, 49]);

  const [isDistShow, setIsDistShow] = useState(false);

  useEffect(() => {
    const onZoomWheel = (e) => {
      e = e || window.event;
      var delta = e.deltaY || e.detail || e.wheelDelta;

      let step = delta > 0 ? zoomStep * -1 : zoomStep * 1;
      setZoom(Math.min(Math.max(zoom + step, minZoom), maxZoom));

      e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    };

    let zoomButtons = zoomRef.current;
    if (zoomButtons) {
      if (zoomButtons.addEventListener) {
        if ("onwheel" in document) {
          zoomButtons.addEventListener("wheel", onZoomWheel);
        } else if ("onmousewheel" in document) {
          zoomButtons.addEventListener("mousewheel", onZoomWheel);
        } else {
          zoomButtons.addEventListener("MozMousePixelScroll", onZoomWheel);
        }
      } else {
        // IE8-
        zoomButtons.attachEvent("onmousewheel", onZoomWheel);
      }
    }

    return () => {
      if (zoomButtons) {
        if (zoomButtons.removeEventListener) {
          if ("onwheel" in document) {
            zoomButtons.removeEventListener("wheel", onZoomWheel);
          } else if ("onmousewheel" in document) {
            zoomButtons.removeEventListener("mousewheel", onZoomWheel);
          } else {
            zoomButtons.removeEventListener("MozMousePixelScroll", onZoomWheel);
          }
        } else {
          // IE8-
          zoomButtons.removeEvent("onmousewheel", onZoomWheel);
        }
      }
    };
  }, [zoom]);

  function scrollToDist(dist_id) {
    if (!dist_id) {
      setPickedMarker(null)
    };
    if (!document.getElementById(dist_id)) return false; 
    const top = document.getElementById(dist_id).offsetTop;
    console.log(document.getElementById(dist_id).offsetTop - 68);
    distRef.current.scrollTop = top - 76;
    if (document.getElementsByClassName("distributor highlight")[0]) {
      document.getElementsByClassName("distributor highlight")[0].className =
        "distributor";
    }
    document.getElementById(dist_id).className = "distributor highlight";
    setPickedMarker(dist_id);
  }

  function removeHighlightClass(dist_id) {
    document.getElementById(dist_id).className = "distributor";
  }

  function showDistributors() {
    if (isDistShow) {
      if (document.getElementsByClassName("distributorMap")[0]) {
        document
          .getElementsByClassName("distributorMap")[0]
          .scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsDistShow(!isDistShow);
  }

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    let tmp = [];
    markers.map((marker) => {
      return tmp.indexOf(marker.country) < 0 && tmp.push(marker.country);
    });
    // tmp.sort();
    setCountries(tmp);
  }, []);

  return (
    <div className="distributors-map">
      <div className={"mapContainer " + (theme === "dark" ? "darkd" : "")}>
        <MapChart
          markers={markers}
          pickedMarker={pickedMarker}
          scrollToDist={scrollToDist}
          theme={theme}
          zoom={zoom}
          center={center}
        />
        <div className="mapZoom noselect" ref={zoomRef}>
          <div
            className="zoomOut button"
            onTouchStart={(e) => {
              e.preventDefault();
            }}
            onClick={() => {
              setZoom(Math.min(Math.max(zoom - zoomStep, minZoom), maxZoom));
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11 11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H11C12 13 12 13 13 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13C12 11 12 11 11 11Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            className="zoomIn button"
            onClick={() => {
              setZoom(Math.min(Math.max(zoom + zoomStep, minZoom), maxZoom));
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5C11.4477 5 11 5.44772 11 6V11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H11V18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18V13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H13V6C13 5.44772 12.5523 5 12 5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className={"mapLegend " + (isDistShow ? "show" : "")}>
          <h2>Distributors</h2>
          <div className="distributors" ref={distRef}>
            {countries.map((c) => {
              return (
                <div className="country-section" key={c + "-section"}>
                  <div className="country">
                    <h3>{c}</h3>
                  </div>
                  {markers.map((marker) => {
                    return marker.country === c ? (
                      <div
                        id={marker.name}
                        className="distributor"
                        onClick={() => {
                          setPickedMarker(marker.name);
                          setCenter(marker.coordinates);
                          setZoom(maxZoom);
                        }}
                        key={marker.name}
                        onAnimationEnd={() => {
                          removeHighlightClass(marker.name);
                        }}
                      >
                        <h3>{marker.name}</h3>
                        <p className="distributorAddress">{marker.address}</p>
                        <div className="distributorLinks">
                          <a href={marker.url} target="_blank" rel="noreferrer">
                            Go to website
                          </a>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="showMore" onClick={showDistributors}>
          {isDistShow ? "Hide all distributors" : "Show all distributors"}
        </div>
      </div>
    </div>
  );
}
