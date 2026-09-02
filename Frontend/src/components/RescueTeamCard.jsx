import {
  Users,
  MapPin,
  Clock3,
  Radio,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import "./RescueTeamCard.css";

function RescueTeamCard({
  name,
  teamId,
  members,
  location,
  status = "Available",
  eta,
  mission,
  onSelect,
}) {
  const statusClass = status.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="rescue-team-card">

      {/* HEADER */}
      <div className="rescue-team-header">

        <div className="rescue-team-icon">
          <Users size={20} />
        </div>

        <div className="rescue-team-title">
          <h3>{name}</h3>

          {teamId && (
            <span>Team ID: {teamId}</span>
          )}
        </div>

        <span className={`rescue-team-status ${statusClass}`}>
          {status === "Available" ? (
            <CheckCircle2 size={12} />
          ) : (
            <AlertCircle size={12} />
          )}

          {status}
        </span>

      </div>

      {/* DETAILS */}
      <div className="rescue-team-details">

        <div className="rescue-detail">
          <Users size={14} />
          <div>
            <span>Members</span>
            <strong>{members}</strong>
          </div>
        </div>

        <div className="rescue-detail">
          <MapPin size={14} />
          <div>
            <span>Location</span>
            <strong>{location}</strong>
          </div>
        </div>

        {eta && (
          <div className="rescue-detail">
            <Clock3 size={14} />
            <div>
              <span>ETA</span>
              <strong>{eta}</strong>
            </div>
          </div>
        )}

      </div>

      {/* MISSION */}
      {mission && (
        <div className="rescue-team-mission">
          <Radio size={13} />
          <span>{mission}</span>
        </div>
      )}

      {/* ACTION */}
      {onSelect && (
        <button
          className="rescue-team-button"
          onClick={onSelect}
        >
          View Team
        </button>
      )}

    </div>
  );
}

export default RescueTeamCard;