import { useState } from "react";
import {
  MapPin,
  Navigation,
  ShieldCheck,
  AlertTriangle,
  Clock3,
  Users,
  Route,
  Search,
  Crosshair,
  Hospital,
  Home,
  ChevronRight,
} from "lucide-react";

import "./SafeRoutes.css";

function SafeRoutes() {
  const [from, setFrom] = useState("Current Location");
  const [destination, setDestination] = useState("");
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [search, setSearch] = useState("");

  const shelters = [
    {
      name: "Shelter A",
      location: "Swaroop Nagar",
      capacity: "320 / 500",
      distance: "2.4 km",
      type: "Shelter",
    },
    {
      name: "Shelter B",
      location: "Civil Lines",
      capacity: "180 / 500",
      distance: "3.1 km",
      type: "Shelter",
    },
    {
      name: "Emergency Hospital",
      location: "Mall Road",
      capacity: "Medical facility",
      distance: "3.8 km",
      type: "Hospital",
    },
  ];

  const routes = [
    {
      name: "Recommended Safe Route",
      distance: "2.8 km",
      time: "9 min",
      risk: "Low",
      safety: 92,
      roads: "Via Mall Road → Swaroop Nagar",
      reason: "Avoids reported flood zone in Sector 12",
    },
    {
      name: "Alternative Route",
      distance: "3.4 km",
      time: "12 min",
      risk: "Medium",
      safety: 74,
      roads: "Via Civil Lines → Arya Nagar",
      reason: "Moderate congestion reported",
    },
    {
      name: "Emergency Route",
      distance: "4.1 km",
      time: "14 min",
      risk: "Medium",
      safety: 68,
      roads: "Via GT Road → Kalyanpur",
      reason: "Longer route but avoids critical zones",
    },
  ];

  const filteredShelters = shelters.filter((item) =>
    `${item.name} ${item.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="safe-routes-page">

      {/* HEADER */}

      <div className="safe-routes-header">

        <div>
          <div className="safe-routes-eyebrow">
            <span></span>
            EVACUATION & ROUTE INTELLIGENCE
          </div>

          <h1>Safe Routes</h1>

          <p>
            Find safer paths to shelters, hospitals, and emergency
            evacuation points.
          </p>
        </div>

        <div className="route-status">
          <ShieldCheck size={17} />
          Routes monitored
        </div>

      </div>


      {/* ROUTE SEARCH */}

      <div className="route-search-card">

        <div className="route-input">

          <div className="route-input-icon current">
            <Crosshair size={16} />
          </div>

          <div>
            <label>FROM</label>

            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

        </div>


        <div className="route-arrow">
          <Navigation size={16} />
        </div>


        <div className="route-input">

          <div className="route-input-icon destination">
            <MapPin size={16} />
          </div>

          <div>
            <label>DESTINATION</label>

            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select safe destination</option>
              {shelters.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name} — {item.location}
                </option>
              ))}
            </select>
          </div>

        </div>


        <button className="find-route-button">
          <Route size={16} />
          Find Safe Route
        </button>

      </div>


      {/* MAIN GRID */}

      <div className="safe-routes-grid">

        {/* MAP */}

        <div className="safe-map-card">

          <div className="safe-card-header">

            <div>
              <h2>Evacuation Map</h2>
              <p>
                Safe zones, danger zones and recommended paths
              </p>
            </div>

            <button className="locate-button">
              <Crosshair size={14} />
              Locate me
            </button>

          </div>


          <div className="safe-map">

            {/* FAKE MAP BACKGROUND */}

            <div className="map-background"></div>

            <div className="map-road safe-road-one"></div>
            <div className="map-road safe-road-two"></div>
            <div className="map-road safe-road-three"></div>
            <div className="map-road safe-road-four"></div>

            {/* DANGER ZONES */}

            <div className="danger-zone zone-one">
              <span>Flood Zone</span>
            </div>

            <div className="danger-zone zone-two">
              <span>Blocked Road</span>
            </div>


            {/* ROUTE */}

            <div className="recommended-route">
              <span className="route-start">You</span>

              <div className="route-line line-one"></div>
              <div className="route-line line-two"></div>
              <div className="route-line line-three"></div>

              <span className="route-end">Safe</span>
            </div>


            {/* USER */}

            <div className="map-user-marker">
              <Crosshair size={15} />
            </div>


            {/* SHELTER */}

            <div className="map-shelter shelter-one">
              <Home size={14} />
            </div>

            <div className="map-shelter shelter-two">
              <Home size={14} />
            </div>


            {/* HOSPITAL */}

            <div className="map-hospital">
              <Hospital size={14} />
            </div>


            {/* LEGEND */}

            <div className="safe-map-legend">

              <div>
                <span className="legend-safe"></span>
                Safe Route
              </div>

              <div>
                <span className="legend-danger"></span>
                Danger Zone
              </div>

              <div>
                <span className="legend-shelter"></span>
                Shelter
              </div>

              <div>
                <span className="legend-hospital"></span>
                Hospital
              </div>

            </div>

          </div>

        </div>


        {/* ROUTES */}

        <div className="route-options-card">

          <div className="safe-card-header">

            <div>
              <h2>Recommended Routes</h2>
              <p>AI-ranked evacuation paths</p>
            </div>

            <ShieldCheck size={20} />

          </div>


          <div className="route-options">

            {routes.map((route, index) => (

              <div
                key={route.name}
                className={`route-option ${
                  selectedRoute === index
                    ? "route-selected"
                    : ""
                }`}
                onClick={() => setSelectedRoute(index)}
              >

                <div className="route-option-top">

                  <div className="route-option-icon">
                    <Route size={16} />
                  </div>

                  <div className="route-option-title">
                    <strong>{route.name}</strong>

                    <span>
                      {route.distance} • {route.time}
                    </span>
                  </div>

                  {index === 0 && (
                    <span className="best-route">
                      BEST
                    </span>
                  )}

                </div>


                <div className="route-safety">

                  <div className="safety-label">
                    <span>Safety Score</span>
                    <strong>{route.safety}%</strong>
                  </div>

                  <div className="safety-bar">
                    <div
                      style={{
                        width: `${route.safety}%`,
                      }}
                    ></div>
                  </div>

                </div>


                <div className="route-details">

                  <span>
                    <Clock3 size={12} />
                    {route.time}
                  </span>

                  <span
                    className={`risk-${route.risk.toLowerCase()}`}
                  >
                    <ShieldCheck size={12} />
                    {route.risk} Risk
                  </span>

                </div>


                <p className="route-reason">
                  {route.reason}
                </p>


                {selectedRoute === index && (
                  <button className="use-route-button">
                    Use this route
                    <ChevronRight size={14} />
                  </button>
                )}

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* SAFE DESTINATIONS */}

      <div className="destinations-card">

        <div className="safe-card-header">

          <div>
            <h2>Nearby Safe Destinations</h2>
            <p>
              Available shelters and emergency facilities
            </p>
          </div>

          <div className="destination-search">

            <Search size={14} />

            <input
              placeholder="Search destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>


        <div className="destination-grid">

          {filteredShelters.map((item) => (

            <div
              className="destination-card"
              key={item.name}
            >

              <div
                className={`destination-icon ${
                  item.type === "Hospital"
                    ? "hospital"
                    : "shelter"
                }`}
              >
                {item.type === "Hospital" ? (
                  <Hospital size={18} />
                ) : (
                  <Home size={18} />
                )}
              </div>


              <div className="destination-info">

                <strong>{item.name}</strong>

                <span>
                  <MapPin size={11} />
                  {item.location}
                </span>

                <span>
                  <Users size={11} />
                  {item.capacity}
                </span>

              </div>


              <div className="destination-distance">
                <strong>{item.distance}</strong>
                <span>away</span>
              </div>

            </div>

          ))}

        </div>

      </div>


      {/* SAFETY NOTICE */}

      <div className="route-safety-notice">

        <AlertTriangle size={17} />

        <div>
          <strong>Emergency navigation notice</strong>

          <p>
            Route recommendations are based on currently available
            incident and road-condition data. Conditions can change
            quickly during a disaster. Follow instructions from
            local emergency authorities when available.
          </p>
        </div>

      </div>

    </div>
  );
}

export default SafeRoutes;