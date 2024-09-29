import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  { markerOffset: -15, name: "Rabat, Maroc", coordinates: [-6.8498, 33.9716] },
  { markerOffset: 25, name: "Paris, France", coordinates: [2.3522, 48.8566] }
];

const WorldPresenceSection = () => {
  return (
    <section className="world-presence-section">
      <h2 className="world-presence-title">Présence mondiale</h2>
      <ComposableMap
        projection="geoMercator"
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </section>
  );
};

export default WorldPresenceSection;
