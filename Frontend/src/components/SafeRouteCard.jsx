import {
  ShieldCheck,
  MapPin,
  Clock3,
  Route,
  AlertTriangle,
  CheckCircle2,
  Navigation,
} from "lucide-react";

import "./SafeRouteCard.css";

function SafeRouteCard({
  name,
  distance,
  eta,
  safety = "Safe",
  start,
  destination,
  hazards = [],
  recommendation,
  selected = false,
  onSelect,
}) {
  const safetyClass = safety.toLowerCase();

  return (
    <div
      className={`safe-route-card ${
        selected ? "safe-route-selected" : ""
      }`}
    >
      {/* HEADER */}
      <div className="safe-route-header">

        <div className={`safe-route-icon ${safetyClass}`}>
          <ShieldCheck size={20} />
        </div>

        <div className="safe-route-title">
          <h3>{name}</h3>

          <span className={`safe-route-safety ${safetyClass}`}>
            {safety === "Safe" || safety === "Safest" ? (
              <CheckCircle2 size={11} />
            ) : (
              <AlertTriangle size={11} />
            )}

            {safety}
          </span>
        </div>

        {selected && (
          <span className="route-selected-badge">
            Selected
          </span>
        )}

      </div>

      {/* ROUTE */}
      <div className="safe-route-path">

        <div className="route-point">
          <span className="route-start-dot"></span>

          <div>
            <small>FROM</small>
            <strong>{start}</strong>
          </div>
        </div>

        <div className="route-line"></div>

        <div className="route-point">
          <span className="route-end-dot"></span>

          <div>
            <small>TO</small>
            <strong>{destination}</strong>
          </div>
        </div>

      </div>

      {/* STATS */}
      <div className="safe-route-stats">

        <div>
          <Route size={14} />
          <span>
            <small>Distance</small>
            <strong>{distance}</strong>
          </span>
        </div>

        <div>
          <Clock3 size={14} />
          <span>
            <small>ETA</small>
            <strong>{eta}</strong>
          </span>
        </div>

      </div>

      {/* HAZARDS */}
      {hazards.length > 0 && (
        <div className="route-hazards">

          <div className="route-hazards-title">
            <AlertTriangle size={13} />
            <span>Route conditions</span>
          </div>

          <div className="route-hazard-list">
            {hazards.map((hazard, index) => (
              <span key={index}>
                {hazard}
              </span>
            ))}
          </div>

        </div>
      )}

      {/* RECOMMENDATION */}
      {recommendation && (
        <div className="route-recommendation">
          <ShieldCheck size={14} />
          <span>{recommendation}</span>
        </div>
      )}

      {/* BUTTON */}
      {onSelect && (
        <button
          className={`safe-route-button ${
            selected ? "selected" : ""
          }`}
          onClick={onSelect}
        >
          {selected ? (
            <>
              <CheckCircle2 size={15} />
              Route Selected
            </>
          ) : (
            <>
              <Navigation size={15} />
              Choose This Route
            </>
          )}
        </button>
      )}

    </div>
  );
}

export default SafeRouteCard;