import {
  AlertTriangle,
  MapPin,
  Users,
  Clock3,
  ChevronRight,
} from "lucide-react";

import "./IncidentCard.css";

function IncidentCard({
  type,
  location,
  severity,
  people,
  time,
  description,
  onClick,
}) {
  const severityClass = severity
    ? severity.toLowerCase()
    : "medium";

  return (
    <div className="incident-card">

      {/* LEFT ICON */}
      <div className={`incident-card-icon ${severityClass}`}>
        <AlertTriangle size={18} />
      </div>

      {/* MAIN INFO */}
      <div className="incident-card-content">

        <div className="incident-card-title-row">
          <h3>{type}</h3>

          <span
            className={`incident-card-badge ${severityClass}`}
          >
            {severity}
          </span>
        </div>

        <div className="incident-card-location">
          <MapPin size={12} />
          <span>{location}</span>
        </div>

        {description && (
          <p className="incident-card-description">
            {description}
          </p>
        )}

        <div className="incident-card-meta">

          <span>
            <Users size={12} />
            {people} affected
          </span>

          <span>
            <Clock3 size={12} />
            {time}
          </span>

        </div>

      </div>

      {/* ACTION */}
      <button
        className="incident-card-action"
        onClick={onClick}
        aria-label={`View ${type} incident`}
      >
        <ChevronRight size={17} />
      </button>

    </div>
  );
}

export default IncidentCard;