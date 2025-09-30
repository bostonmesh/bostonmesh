import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import loadNodesAndMap from '@site/src/components/meshcore/RepeatersList/script.js';
import React, { useEffect } from 'react';

import repeatersData from "@site/src/components/meshcore/RepeatersList/repeaters.json";

export default function RepeatersList() {
  useEffect(() => {
    // This code will run after the component mounts and the DOM is ready.
    // It's similar to componentDidMount in class components.
    loadNodesAndMap();

  }, []); // The empty dependency array ensures this effect runs only once after initial render.

  return (
    <div>
      <section id="repeaters" className="repeaters">
        <div className="container">
          <h2>Active Repeater Stations</h2>
          <div className="repeater-grid" id="repeater-grid">
          </div>
        </div>
      </section>

      <section id="map-section" className="map-section light-bg">
        <div className="container">
          <h2>Network Coverage Map</h2>
          <div className="map-container">
            <div id="map" className="map"></div>
            <div id="map-legend" className="map-legend"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
