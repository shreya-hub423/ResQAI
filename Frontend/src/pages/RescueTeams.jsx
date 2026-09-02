import {
  Users,
  MapPin,
  Radio,
  ShieldCheck,
  Clock3,
  Navigation,
  UserCheck,
  AlertTriangle,
  CheckCircle2,
  Search,
} from "lucide-react";

import "./RescueTeams.css";

function RescueTeams() {
  const teams = [
    {
      name: "Alpha Rescue Team",
      id: "RST-001",
      members: 8,
      location: "Sector 12",
      mission: "Flood Evacuation",
      status: "Deployed",
      response: "8 min",
      priority: "Critical",
    },
    {
      name: "Bravo Medical Team",
      id: "RST-002",
      members: 6,
      location: "Civil Lines",
      mission: "Medical Assistance",
      status: "Deployed",
      response: "12 min",
      priority: "High",
    },
    {
      name: "Charlie Rescue Team",
      id: "RST-003",
      members: 10,
      location: "Mall Road",
      mission: "Road Clearance",
      status: "En Route",
      response: "18 min",
      priority: "Medium",
    },
    {
      name: "Delta Search Team",
      id: "RST-004",
      members: 7,
      location: "Kalyanpur",
      mission: "Search & Rescue",
      status: "Available",
      response: "-",
      priority: "Normal",
    },
    {
      name: "Echo Relief Team",
      id: "RST-005",
      members: 9,
      location: "Swaroop Nagar",
      mission: "Relief Distribution",
      status: "Available",
      response: "-",
      priority: "Normal",
    },
    {
      name: "Foxtrot Medical Team",
      id: "RST-006",
      members: 5,
      location: "Rawatpur",
      mission: "Emergency Medical",
      status: "Standby",
      response: "-",
      priority: "High",
    },
  ];

  return (
    <div className="teams-page">

      {/* HEADER */}

      <div className="teams-header">

        <div>
          <div className="teams-eyebrow">
            <span></span>
            EMERGENCY RESPONSE NETWORK
          </div>

          <h1>Rescue Teams</h1>

          <p>
            Track deployed teams, coordinate missions and monitor
            emergency response operations.
          </p>
        </div>

        <button className="deploy-team-btn">
          <UserCheck size={16} />
          Deploy Team
        </button>

      </div>


      {/* SUMMARY */}

      <div className="team-summary">

        <div className="team-summary-card">
          <div className="summary-icon total">
            <Users size={19} />
          </div>

          <div>
            <strong>18</strong>
            <span>Active Teams</span>
          </div>
        </div>


        <div className="team-summary-card">
          <div className="summary-icon deployed">
            <Navigation size={19} />
          </div>

          <div>
            <strong>11</strong>
            <span>Deployed</span>
          </div>
        </div>


        <div className="team-summary-card">
          <div className="summary-icon available">
            <CheckCircle2 size={19} />
          </div>

          <div>
            <strong>05</strong>
            <span>Available</span>
          </div>
        </div>


        <div className="team-summary-card">
          <div className="summary-icon critical">
            <AlertTriangle size={19} />
          </div>

          <div>
            <strong>02</strong>
            <span>Critical Missions</span>
          </div>
        </div>

      </div>


      {/* TOOLBAR */}

      <div className="teams-toolbar">

        <div>
          <h2>Response Teams</h2>
          <p>Live operational status of rescue personnel</p>
        </div>

        <div className="teams-controls">

          <div className="team-search">
            <Search size={14} />
            <input
              type="text"
              placeholder="Search teams..."
            />
          </div>

          <select defaultValue="all">
            <option value="all">All Status</option>
            <option value="deployed">Deployed</option>
            <option value="available">Available</option>
            <option value="enroute">En Route</option>
            <option value="standby">Standby</option>
          </select>

        </div>

      </div>


      {/* TEAM TABLE */}

      <div className="teams-card">

        <div className="teams-table-header">

          <span>TEAM</span>
          <span>MISSION</span>
          <span>LOCATION</span>
          <span>STATUS</span>
          <span>RESPONSE</span>
          <span>ACTION</span>

        </div>


        {teams.map((team) => (

          <div className="team-row" key={team.id}>

            {/* TEAM */}

            <div className="team-name-cell">

              <div className="team-avatar">
                <Users size={17} />
              </div>

              <div>
                <strong>{team.name}</strong>
                <span>{team.id} · {team.members} members</span>
              </div>

            </div>


            {/* MISSION */}

            <div className="team-mission">

              <strong>{team.mission}</strong>

              <span
                className={`priority priority-${team.priority.toLowerCase()}`}
              >
                {team.priority}
              </span>

            </div>


            {/* LOCATION */}

            <div className="team-location">

              <MapPin size={13} />

              <span>{team.location}</span>

            </div>


            {/* STATUS */}

            <div>

              <span
                className={`team-status status-${team.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >

                {team.status === "Deployed" && (
                  <Navigation size={11} />
                )}

                {team.status === "Available" && (
                  <CheckCircle2 size={11} />
                )}

                {team.status === "En Route" && (
                  <Navigation size={11} />
                )}

                {team.status === "Standby" && (
                  <Clock3 size={11} />
                )}

                {team.status}

              </span>

            </div>


            {/* RESPONSE */}

            <div className="response-time">

              {team.response !== "-" && (
                <Clock3 size={12} />
              )}

              <span>{team.response}</span>

            </div>


            {/* ACTION */}

            <button className="team-action">
              View
            </button>

          </div>

        ))}

      </div>


      {/* COMMUNICATION PANEL */}

      <div className="communication-panel">

        <div className="communication-icon">
          <Radio size={20} />
        </div>

        <div className="communication-content">

          <strong>Emergency Communication Network</strong>

          <p>
            All deployed teams are connected to the ResQAI
            command network for real-time coordination.
          </p>

        </div>

        <div className="network-status">

          <span></span>

          <div>
            <strong>Network Online</strong>
            <small>18 teams connected</small>
          </div>

        </div>

      </div>


      {/* SAFETY NOTICE */}

      <div className="team-safety-notice">

        <ShieldCheck size={18} />

        <div>
          <strong>Responder Safety</strong>

          <p>
            Team locations and mission assignments are continuously
            monitored. Automated alerts are generated when a team
            enters a high-risk zone.
          </p>
        </div>

      </div>

    </div>
  );
}

export default RescueTeams;