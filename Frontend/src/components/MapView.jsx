
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
  AlertTriangle,
  Hospital,
  ShieldCheck,
} from "lucide-react";

import "./MapView.css";

/* =========================================================
   CUSTOM MAP ICONS
   ========================================================= */

const criticalIcon = new L.DivIcon({
  className: "custom-map-icon",
  html: `
    <div class="map-pin critical-pin">
      <span>!</span>
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const warningIcon = new L.DivIcon({
  className: "custom-map-icon",
  html: `
    <div class="map-pin warning-pin">
      <span>!</span>
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const safeIcon = new L.DivIcon({
  className: "custom-map-icon",
  html: `
    <div class="map-pin safe-pin">
      <span>✓</span>
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const hospitalIcon = new L.DivIcon({
  className: "custom-map-icon",
  html: `
    <div class="map-pin hospital-pin">
      <span>+</span>
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});


/* =========================================================
   DISASTER DATA
   ========================================================= */

const incidents = [
  {
    id: 1,
    name: "Sector 12 Flood",
    position: [26.4499, 80.3319],
    severity: "Critical",
    affected: 420,
    description:
      "Severe flooding reported. Immediate response recommended.",
    icon: criticalIcon,
  },

  {
    id: 2,
    name: "Civil Lines Building Damage",
    position: [26.4775, 80.3490],
    severity: "High",
    affected: 85,
    description:
      "Building damage reported. Rescue team assessment required.",
    icon: warningIcon,
  },
];

const safeLocations = [
  {
    id: 1,
    name: "Shelter A",
    position: [26.4615, 80.3200],
    capacity: 350,
  },

  {
    id: 2,
    name: "Shelter B",
    position: [26.4355, 80.3500],
    capacity: 500,
  },
];

const hospitals = [
  {
    id: 1,
    name: "Emergency Hospital",
    position: [26.4655, 80.3405],
  },
];


/* =========================================================
   MAP COMPONENT
   ========================================================= */

function MapView() {
  const center = [26.4499, 80.3319];

  return (
    <div className="real-map-wrapper">

      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        className="real-disaster-map"
      >

        {/* OpenStreetMap */}

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {/* ================= INCIDENTS ================= */}

        {incidents.map((incident) => (

          <Marker
            key={incident.id}
            position={incident.position}
            icon={incident.icon}
          >

            <Popup>

              <div className="map-popup">

                <div className="popup-title">
                  <AlertTriangle size={16} />
                  {incident.name}
                </div>

                <div className="popup-severity">
                  {incident.severity}
                </div>

                <p>
                  {incident.description}
                </p>

                <strong>
                  👥 {incident.affected} people affected
                </strong>

              </div>

            </Popup>

          </Marker>

        ))}


        {/* ================= SAFE LOCATIONS ================= */}

        {safeLocations.map((location) => (

          <Marker
            key={location.id}
            position={location.position}
            icon={safeIcon}
          >

            <Popup>

              <div className="map-popup">

                <div className="popup-title safe-title">
                  <ShieldCheck size={16} />
                  {location.name}
                </div>

                <p>
                  Designated emergency evacuation shelter.
                </p>

                <strong>
                  Capacity: {location.capacity} people
                </strong>

              </div>

            </Popup>

          </Marker>

        ))}


        {/* ================= HOSPITAL ================= */}

        {hospitals.map((hospital) => (

          <Marker
            key={hospital.id}
            position={hospital.position}
            icon={hospitalIcon}
          >

            <Popup>

              <div className="map-popup">

                <div className="popup-title hospital-title">
                  <Hospital size={16} />
                  {hospital.name}
                </div>

                <p>
                  Emergency medical support available.
                </p>

              </div>

            </Popup>

          </Marker>

        ))}


        {/* ================= DANGER ZONE ================= */}

        <Circle
          center={[26.4499, 80.3319]}
          radius={900}
          pathOptions={{
            color: "#e5484d",
            fillColor: "#e5484d",
            fillOpacity: 0.10,
          }}
        />

      </MapContainer>


      {/* ================= MAP LEGEND ================= */}

      <div className="real-map-legend">

        <div>
          <span className="legend critical"></span>
          Critical Incident
        </div>

        <div>
          <span className="legend warning"></span>
          Warning
        </div>

        <div>
          <span className="legend safe"></span>
          Safe Shelter
        </div>

        <div>
          <span className="legend hospital"></span>
          Hospital
        </div>

      </div>

    </div>
  );
}

export default MapView;