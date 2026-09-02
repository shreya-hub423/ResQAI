import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./MapView.css";

// Fix Leaflet marker icons in Vite
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = defaultIcon;


/*
  Default demo routes around Kanpur.

  IMPORTANT:
  These are demo coordinates for the frontend prototype.
  Later your FastAPI backend can provide real routes.
*/

const defaultRoutes = [
  {
    id: 1,
    name: "Safest Route",
    color: "#16a34a",
    positions: [
      [26.4499, 80.3319],
      [26.4525, 80.3285],
      [26.4565, 80.325],
      [26.461, 80.322],
    ],
  },
  {
    id: 2,
    name: "Alternate Route",
    color: "#f59e0b",
    positions: [
      [26.4499, 80.3319],
      [26.4475, 80.326],
      [26.4505, 80.320],
      [26.455, 80.316],
    ],
  },
];


function RouteMap({
  center = [26.4499, 80.3319],
  zoom = 14,
  routes = defaultRoutes,
  startLocation = "Current Location",
  destination = "Safe Shelter",
  onRouteSelect,
}) {
  return (
    <div className="route-map-container">

      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        className="route-map"
      >

        {/* MAP TILES */}
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {/* ROUTES */}
        {routes.map((route) => (
          <Polyline
            key={route.id}
            positions={route.positions}
            pathOptions={{
              color: route.color,
              weight: 6,
              opacity: 0.85,
            }}
            eventHandlers={{
              click: () => {
                if (onRouteSelect) {
                  onRouteSelect(route);
                }
              },
            }}
          >
            <Popup>
              <strong>{route.name}</strong>
              <br />
              Click the route to select it.
            </Popup>
          </Polyline>
        ))}


        {/* START */}
        <Marker position={routes[0]?.positions[0] || center}>
          <Popup>
            <strong>📍 {startLocation}</strong>
            <br />
            Starting point
          </Popup>
        </Marker>


        {/* DESTINATION */}
        <Marker
          position={
            routes[0]?.positions[
              routes[0].positions.length - 1
            ] || center
          }
        >
          <Popup>
            <strong>🏠 {destination}</strong>
            <br />
            Recommended safe destination
          </Popup>
        </Marker>

      </MapContainer>


      {/* MAP LEGEND */}
      <div className="route-map-legend">

        <div className="route-map-legend-title">
          Route Safety
        </div>

        <div className="route-map-legend-item">
          <span className="legend-line safe-line"></span>
          Safest route
        </div>

        <div className="route-map-legend-item">
          <span className="legend-line alternate-line"></span>
          Alternate route
        </div>

      </div>

    </div>
  );
}

export default RouteMap;