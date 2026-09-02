import "./Dashboard.css";
import MapView from "../components/MapView";
import {
  AlertTriangle,
  Users,
  Ambulance,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  MapPin,
  Clock3,
  ShieldCheck,
  Activity,
  ChevronRight,
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Critical Incidents",
      value: "04",
      change: "+2",
      trend: "up",
      description: "in the last 24 hours",
      icon: AlertTriangle,
      type: "danger",
    },
    {
      title: "Active Incidents",
      value: "12",
      change: "-3",
      trend: "down",
      description: "from yesterday",
      icon: Activity,
      type: "warning",
    },
    {
      title: "People Affected",
      value: "1,240",
      change: "+18%",
      trend: "up",
      description: "estimated affected",
      icon: Users,
      type: "people",
    },
    {
      title: "Teams Deployed",
      value: "18",
      change: "+5",
      trend: "up",
      description: "currently active",
      icon: Ambulance,
      type: "success",
    },
  ];

  const incidents = [
    {
      type: "Flood",
      location: "Sector 12, Kanpur",
      severity: "Critical",
      people: "420",
      time: "8 min ago",
    },
    {
      type: "Building Damage",
      location: "Civil Lines",
      severity: "High",
      people: "85",
      time: "21 min ago",
    },
    {
      type: "Road Blockage",
      location: "Mall Road",
      severity: "Medium",
      people: "120",
      time: "34 min ago",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* ================= HEADER ================= */}

      <div className="dashboard-header">

        <div>
          <div className="dashboard-eyebrow">
            <span className="live-dot"></span>
            EMERGENCY OPERATIONS CENTER
          </div>

          <h1>Good evening, Responder</h1>

          <p>
            Monitor disasters, coordinate emergency teams, and make
            faster decisions with AI-powered assistance.
          </p>
        </div>

        <div className="system-status">
          <ShieldCheck size={18} />
          <div>
            <strong>System Operational</strong>
            <span>Last updated just now</span>
          </div>
        </div>

      </div>

      {/* ================= STATISTICS ================= */}

      <section className="stats-grid">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              className={`stat-card stat-${stat.type}`}
              key={stat.title}
            >

              <div className="stat-top">

                <div className="stat-icon">
                  <Icon size={21} />
                </div>

                <div
                  className={`stat-change ${
                    stat.trend === "up"
                      ? "trend-up"
                      : "trend-down"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight size={14} />
                  ) : (
                    <ArrowDownRight size={14} />
                  )}

                  {stat.change}
                </div>

              </div>

              <div className="stat-value">
                {stat.value}
              </div>

              <div className="stat-title">
                {stat.title}
              </div>

              <div className="stat-description">
                {stat.description}
              </div>

            </div>
          );
        })}

      </section>

      {/* ================= MAIN GRID ================= */}

      <section className="dashboard-main-grid">

        {/* LIVE MAP */}

        <div className="dashboard-card map-card">

          <div className="card-header">

            <div>
              <h2>Live Disaster Map</h2>
              <p>Current incidents and emergency locations</p>
            </div>

            <button className="card-action">
              Open Map
              <ChevronRight size={15} />
            </button>

          </div>

          <div className="map-preview">

            <div className="map-grid"></div>

            <div className="map-road road-one"></div>
            <div className="map-road road-two"></div>
            <div className="map-road road-three"></div>

            <div className="map-marker marker-critical">
              <span></span>
            </div>

            <div className="map-marker marker-warning">
              <span></span>
            </div>

            <div className="map-marker marker-safe">
              <span></span>
            </div>

            <div className="map-marker marker-hospital">
              +
            </div>

            <div className="map-location-label label-one">
              Sector 12
            </div>

            <div className="map-location-label label-two">
              Civil Lines
            </div>

            <div className="map-legend">

              <div>
                <span className="legend-dot critical"></span>
                Critical
              </div>

              <div>
                <span className="legend-dot warning"></span>
                Warning
              </div>

              <div>
                <span className="legend-dot safe"></span>
                Safe
              </div>

              <div>
                <span className="legend-dot hospital"></span>
                Hospital
              </div>

            </div>

          </div>

        </div>

        {/* AI COPILOT */}

        <div className="dashboard-card copilot-card">

          <div className="card-header">

            <div className="copilot-title">

              <div className="copilot-icon">
                ✦
              </div>

              <div>
                <h2>AI Copilot</h2>
                <p>Response intelligence</p>
              </div>

            </div>

            <span className="ai-online">
              ● Online
            </span>

          </div>

          <div className="ai-message">

            <div className="ai-avatar">
              ✦
            </div>

            <div className="ai-content">

              <strong>ResQAI Assistant</strong>

              <p>
                I detected a critical flood incident in Sector 12.
                Based on current reports, immediate evacuation and
                medical support are recommended.
              </p>

            </div>

          </div>

          <div className="recommendation">

            <div className="recommendation-header">
              <AlertTriangle size={17} />
              <strong>Priority Recommendation</strong>
            </div>

            <ul>
              <li>Deploy 3 rescue teams to Sector 12</li>
              <li>Notify Civil Lines emergency hospital</li>
              <li>Guide civilians toward Shelter B</li>
            </ul>

          </div>

          <button className="copilot-button">
            Open AI Copilot
            <ArrowUpRight size={16} />
          </button>

        </div>

      </section>

      {/* ================= BOTTOM GRID ================= */}

      <section className="dashboard-bottom-grid">

        {/* INCIDENTS */}

        <div className="dashboard-card incidents-card">

          <div className="card-header">

            <div>
              <h2>Recent Incidents</h2>
              <p>Latest emergency reports</p>
            </div>

            <button className="card-action">
              View all
              <ChevronRight size={15} />
            </button>

          </div>

          <div className="incident-list">

            {incidents.map((incident) => (

              <div className="incident-row" key={incident.location}>

                <div
                  className={`incident-status status-${incident.severity.toLowerCase()}`}
                >
                  <AlertTriangle size={17} />
                </div>

                <div className="incident-info">

                  <strong>{incident.type}</strong>

                  <span>
                    <MapPin size={12} />
                    {incident.location}
                  </span>

                </div>

                <div className="incident-people">
                  <Users size={14} />
                  {incident.people}
                </div>

                <div className="incident-time">
                  <Clock3 size={13} />
                  {incident.time}
                </div>

                <span
                  className={`severity-badge severity-${incident.severity.toLowerCase()}`}
                >
                  {incident.severity}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* RESOURCES */}

        <div className="dashboard-card resources-card">

          <div className="card-header">

            <div>
              <h2>Emergency Resources</h2>
              <p>Current availability</p>
            </div>

            <button className="card-action">
              Manage
              <ChevronRight size={15} />
            </button>

          </div>

          <div className="resource-list">

            <div className="resource-item">

              <div className="resource-icon ambulance">
                <Ambulance size={19} />
              </div>

              <div className="resource-info">
                <strong>Ambulances</strong>
                <span>Emergency medical transport</span>
              </div>

              <div className="resource-count">
                <strong>12</strong>
                <span>Available</span>
              </div>

            </div>

            <div className="resource-item">

              <div className="resource-icon supplies">
                <Package size={19} />
              </div>

              <div className="resource-info">
                <strong>Medical Kits</strong>
                <span>Emergency medical supplies</span>
              </div>

              <div className="resource-count">
                <strong>84</strong>
                <span>Available</span>
              </div>

            </div>

            <div className="resource-item">

              <div className="resource-icon shelter">
                <Users size={19} />
              </div>

              <div className="resource-info">
                <strong>Safe Shelters</strong>
                <span>Active evacuation centers</span>
              </div>

              <div className="resource-count">
                <strong>08</strong>
                <span>Active</span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;