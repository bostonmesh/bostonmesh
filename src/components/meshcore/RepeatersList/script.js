import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import repeatersData from "@site/src/components/meshcore/RepeatersList/repeaters.json";
import otherRepeatersData from "@site/src/components/meshcore/RepeatersList/other-repeaters.json";
import repeaterIconUrl from '@site/static/img/repeater-icon.png';

function loadNodesAndMap() {
  console.log(repeatersData)
  if (ExecutionEnvironment.canUseDOM) {
    // Global variables to store map, markers, and repeaters data
    let map;
    let markers = {};

    // Initialize the map when the DOM is loaded
    async function loadMap() {
      // Preload the icon image
      await preloadIcon('icon.png');

      // Initialize the map centered on the greater Boston area
      map = L.map('map').setView([42.3736, -71.1097], 12);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(map);

      // Create repeater cards
      createRepeaterCards(repeatersData);

      // Add markers to map for regular repeaters and other repeaters
      addMarkersToMap(repeatersData);
      addOtherMarkersToMap(otherRepeatersData);

      // Add legend to map
      addMapLegend();

      // Add smooth scroll behavior for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Add intersection observer for fade-in animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe all animated elements
      document.querySelectorAll('.about-card, .repeater-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
      });
    };

    loadMap();

    // Function to create repeater cards dynamically
    function createRepeaterCards(repeaters) {
      const repeaterGrid = document.getElementById('repeater-grid');

      repeaters.forEach((repeater, index) => {
        const card = document.createElement('div');
        card.className = 'repeater-card';
        card.dataset.repeaterIndex = index;

        const statusClass = repeater.status.toLowerCase() === 'active' ? 'status-active' : 'status-planned';
        const formattedLatLng = `${repeater.locationLatLong[0].toFixed(4)}°, ${repeater.locationLatLong[1].toFixed(4)}°`;

        card.innerHTML = `
              <h3>${repeater.repeaterName}<br>(${repeater.hardwareName})</h3>
              <div class="repeater-info">
                  <div class="info-section">
                      <p>${repeater.locationFriendlyName}</p>
                      <p>${formattedLatLng}</p>
                      <p>${repeater.elevationFeet} ft elevation</p>
                      <p>Hardware: ${repeater.hardwareName}</p>
                      <p>Antenna: ${repeater.antenna}</p>
                  </div>
                  <hr>
                  <div class="info-section radio-section">
                      <p>Preset: ${repeater.presetName}</p>
                      <p>Frequency: ${repeater.frequency}</p>
                      <p>Bandwidth: ${repeater.bandwidth}</p>
                      <p>Spreading Factor: ${repeater.spreadingFactor}</p>
                  </div>
                  <hr>
                  <div class="info-section operator-section">
                      <p>Operator: ${repeater.operator}</p>
                      <p>Pubkey: ${repeater.pubkey.substring(0, 12)}...</p>
                  </div>
                  <hr>
                  <div class="info-section status-section">
                      <p>Status: <span class="${statusClass}">${repeater.status}</span></p>
                  </div>
              </div>
          `;

        // Add click event to select on map
        card.addEventListener('click', () => selectRepeaterOnMap(index));

        repeaterGrid.appendChild(card);
      });
    }

    // Function to add markers to map
    function addMarkersToMap(repeaters) {
      // Add custom CSS for markers
      const style = document.createElement('style');
      style.textContent = `
          .leaflet-marker-icon {
              border-radius: 50%;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          }
          .active-icon {
              filter: grayscale(0.8) brightness(0.9);
          }
          .planned-icon {
              filter: sepia(1) saturate(2) brightness(0.7); /* Makes icon brown */
          }
          .other-icon {
              filter: hue-rotate(35deg) saturate(1.5) brightness(1.1);
          }
          .repeater-popup h4 {
              margin: 0 0 10px 0;
              color: #2196F3;
              font-size: 16px;
          }
          .repeater-popup p {
              margin: 5px 0;
              font-size: 14px;
          }
          .pubkey {
              font-family: monospace;
              font-size: 0.85em;
              color: #666;
              cursor: help;
              text-overflow: ellipsis;
              overflow: hidden;
              max-width: 100%;
              display: inline-block;
          }
          .repeater-card {
              cursor: pointer;
          }
          .repeater-card.selected {
              border-color: #2196F3;
              box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
          }
      `;
      document.head.appendChild(style);

      // Add markers for each repeater
      repeaters.forEach((repeater, index) => {
        const color = repeater.status.toLowerCase() === 'active' ? '#6c757d' : '#FFC107';

        // Create custom icon using icon.png with cache busting
        const timestamp = new Date().getTime();
        const icon = L.icon({
          iconUrl: `${repeaterIconUrl}?v=${timestamp}`,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -16],
          className: repeater.status.toLowerCase() === 'active' ? 'active-icon' : 'planned-icon'
        });

        // Create marker with locationLatLong instead of gps
        const marker = L.marker(repeater.locationLatLong, { icon: icon }).addTo(map);
        markers[index] = marker;

        // Format latitude and longitude
        const formattedLatLng = `${repeater.locationLatLong[0].toFixed(4)}°, ${repeater.locationLatLong[1].toFixed(4)}°`;

        // Create popup content with new data structure
        const popupContent = `
              <div class="repeater-popup">
                  <h4>${repeater.repeaterName}<br>(${repeater.hardwareName})</h4>
                  <p><strong>Antenna:</strong> ${repeater.antenna}</p>
                  <p><strong>Location:</strong> ${repeater.locationFriendlyName}</p>
                  <p><strong>Coordinates:</strong> ${formattedLatLng}</p>
                  <p><strong>Elevation:</strong> ${repeater.elevationFeet} ft</p>
                  <p><strong>Frequency:</strong> ${repeater.frequency}</p>
                  <p><strong>Bandwidth:</strong> ${repeater.bandwidth}</p>
                  <p><strong>Spreading Factor:</strong> ${repeater.spreadingFactor}</p>
                  <p><strong>Status:</strong> ${repeater.status}</p>
                  <p><strong>Operator:</strong> ${repeater.operator}</p>
              </div>
          `;

        // Bind popup to marker
        marker.bindPopup(popupContent);

        // Add click event to marker - only show popup without selecting card
        marker.on('click', () => {
          marker.openPopup();
        });
      });
    }

    // Function to select repeater on map
    function selectRepeaterOnMap(index) {
      const repeater = repeatersData[index];
      const marker = markers[index];

      if (marker && repeater) {
        // Remove selected class from all cards
        document.querySelectorAll('.repeater-card').forEach(card => {
          card.classList.remove('selected');
        });

        // Add selected class to clicked card
        document.querySelector(`[data-repeater-index="${index}"]`).classList.add('selected');

        // Scroll to map section
        const mapSection = document.querySelector('.map-section');
        if (mapSection) {
          mapSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

        // Position the marker in the bottom 40% of the map screen (leaving space for popup)
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
          // Calculate an offset point that will position the marker lower in the map
          // Get the point on the map for the marker
          const markerPoint = map.latLngToContainerPoint(repeater.locationLatLong);

          // Position it at 60% from the top (lower than middle, but higher than before to allow popup space)
          const targetPoint = L.point(markerPoint.x, mapContainer.clientHeight * 0.60);

          // Convert back to lat/lng
          const targetLatLng = map.containerPointToLatLng(targetPoint);

          // Pan and zoom to the offset point
          map.setView(targetLatLng, 13, {
            animate: true,
            duration: 1
          });

          // Delay opening the popup slightly to ensure the map has finished moving
          setTimeout(() => {
            marker.openPopup();
          }, 500);
        } else {
          // Fallback if map container can't be found
          map.setView(repeater.locationLatLong, 13, {
            animate: true,
            duration: 1
          });
          marker.openPopup();
        }
      }
    }

    // Function to select repeater card when marker is clicked
    function selectRepeaterCard(index) {
      const card = document.querySelector(`[data-repeater-index="${index}"]`);

      if (card) {
        // Remove selected class from all cards
        document.querySelectorAll('.repeater-card').forEach(c => {
          c.classList.remove('selected');
        });

        // Add selected class
        card.classList.add('selected');

        // Scroll card into view
        card.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    }

    // Function to add other repeaters to map
    function addOtherMarkersToMap(otherRepeaters) {
      // Add markers for each other repeater
      otherRepeaters.forEach((repeater, index) => {
        // Create custom icon using icon.png with cache busting
        const timestamp = new Date().getTime();
        const icon = L.icon({
          iconUrl: `${repeaterIconUrl}?v=${timestamp}`,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -16],
          className: 'other-icon'
        });

        // Create marker with locationLatLong
        const marker = L.marker(repeater.locationLatLong, { icon: icon }).addTo(map);

        // Format latitude and longitude
        const formattedLatLng = `${repeater.locationLatLong[0].toFixed(4)}°, ${repeater.locationLatLong[1].toFixed(4)}°`;

        // Create popup content for other repeaters (similar to regular repeaters but with N/A handling)
        const popupContent = `
              <div class="repeater-popup">
                  <h4>${repeater.repeaterName}<br>(${repeater.hardwareName})</h4>
                  <p><strong>Antenna:</strong> ${repeater.antenna}</p>
                  <p><strong>Location:</strong> ${repeater.locationFriendlyName}</p>
                  <p><strong>Coordinates:</strong> ${formattedLatLng}</p>
                  <p><strong>Elevation:</strong> ${repeater.elevationFeet} ft</p>
                  <p><strong>Frequency:</strong> ${repeater.frequency}</p>
                  <p><strong>Bandwidth:</strong> ${repeater.bandwidth}</p>
                  <p><strong>Spreading Factor:</strong> ${repeater.spreadingFactor}</p>
                  <p><strong>Status:</strong> ${repeater.status}</p>
                  <p><strong>Operator:</strong> ${repeater.operator}</p>
                  <p><strong>Pubkey:</strong> ${repeater.pubkey.substring(0, 12)}...</p>
              </div>
          `;

        // Bind popup to marker
        marker.bindPopup(popupContent);

        // Add click event to marker - only show popup without selecting card
        marker.on('click', () => {
          marker.openPopup();
        });
      });
    }

    // Function to add map legend
    function addMapLegend() {
      const legendContainer = document.getElementById('map-legend');

      if (legendContainer) {
        const timestamp = new Date().getTime();
        legendContainer.innerHTML = `
              <h4>Legend</h4>
              <div class="legend-item">
                  <img src="${repeaterIconUrl}?v=${timestamp}" class="legend-icon" style="filter: grayscale(0.8) brightness(0.9);">
                  <span class="legend-text">CCMN Repeaters</span>
              </div>
              <div class="legend-item">
                  <img src="${repeaterIconUrl}?v=${timestamp}" class="legend-icon" style="filter: sepia(1) saturate(2) brightness(0.7);">
                  <span class="legend-text">Planned Repeaters</span>
              </div>
              <div class="legend-item">
                  <img src="${repeaterIconUrl}?v=${timestamp}" class="legend-icon" style="filter: hue-rotate(35deg) saturate(1.5) brightness(1.1);">
                  <span class="legend-text">Other Repeaters</span>
              </div>
              <div style="margin-top: 15px; font-size: 12px; color: #666;">
                  Click on a repeater card or marker to view details
              </div>
          `;
      }
    }

    // Function to preload icon image with cache busting
    function preloadIcon(iconUrl) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log('Icon image preloaded successfully');
          resolve();
        };
        img.onerror = () => {
          console.warn('Failed to preload icon image, proceeding anyway');
          resolve(); // Resolve anyway to not block the app
        };
        const timestamp = new Date().getTime();
        img.src = `${iconUrl}?v=${timestamp}`;
      });
    }

    // Add loading animation
    window.addEventListener('load', function () {
      document.body.classList.add('loaded');
    });
  }
}
export default loadNodesAndMap;
