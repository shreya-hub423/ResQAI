import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  Clock3,
  MapPin,
  ChevronRight,
} from "lucide-react";

import "./AlertCard.css";

function AlertCard({
  title,
  message,
  severity = "warning",
  location,
  time,
  onClick,
  read = false,
}) {
  const severityClass = severity.toLowerCase();

  const icons = {
    critical: AlertTriangle,
    warning: Bell,
    success: CheckCircle2,
    info: Bell,
  };

  const Icon = icons[severityClass] || Bell;

  return (
    <div
      className={`alert-card alert-${severityClass} ${
        read ? "alert-read" : ""
      }`}
    >
      <div className="alert-card-icon">
        <Icon size={18} />
      </div>

      <div className="alert-card-content">

        <div className="alert-card-title-row">
          <h3>{title}</h3>

          {!read && <span className="alert-unread-dot"></span>}
        </div>

        <p className="alert-card-message">
          {message}
        </p>

        <div className="alert-card-meta">

          {location && (
            <span>
              <MapPin size={11} />
              {location}
            </span>
          )}

          {time && (
            <span>
              <Clock3 size={11} />
              {time}
            </span>
          )}

        </div>

      </div>

      {onClick && (
        <button
          className="alert-card-action"
          onClick={onClick}
          aria-label="View alert"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}

export default AlertCard;