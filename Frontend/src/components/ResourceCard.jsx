import {
  Ambulance,
  Package,
  Users,
  Truck,
  HeartPulse,
  Droplets,
  Boxes,
} from "lucide-react";

import "./ResourceCard.css";

function ResourceCard({
  name,
  type,
  available,
  total,
  status = "Available",
  description,
  icon,
}) {
  const iconMap = {
    ambulance: Ambulance,
    medical: HeartPulse,
    supplies: Package,
    shelter: Users,
    vehicle: Truck,
    water: Droplets,
    equipment: Boxes,
  };

  const Icon = icon || iconMap[type?.toLowerCase()] || Package;

  const availability =
    total && Number(total) > 0
      ? Math.round((Number(available) / Number(total)) * 100)
      : null;

  let statusClass = "available";

  if (status.toLowerCase() === "limited") {
    statusClass = "limited";
  }

  if (
    status.toLowerCase() === "unavailable" ||
    status.toLowerCase() === "offline"
  ) {
    statusClass = "unavailable";
  }

  return (
    <div className={`resource-card resource-${statusClass}`}>

      {/* ICON */}
      <div className="resource-card-top">

        <div className="resource-card-icon">
          <Icon size={21} />
        </div>

        <span className={`resource-status ${statusClass}`}>
          <span className="resource-status-dot"></span>
          {status}
        </span>

      </div>

      {/* NAME */}
      <h3 className="resource-card-name">
        {name}
      </h3>

      {description && (
        <p className="resource-card-description">
          {description}
        </p>
      )}

      {/* COUNT */}
      <div className="resource-card-count">

        <div>
          <strong>{available}</strong>
          {total && (
            <span> / {total}</span>
          )}
        </div>

        <small>Available</small>

      </div>

      {/* PROGRESS */}
      {availability !== null && (
        <div className="resource-progress-wrapper">

          <div className="resource-progress">
            <div
              className="resource-progress-fill"
              style={{
                width: `${Math.min(availability, 100)}%`,
              }}
            ></div>
          </div>

          <span>{availability}%</span>

        </div>
      )}

    </div>
  );
}

export default ResourceCard;