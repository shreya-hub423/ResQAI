import {
  AlertTriangle,
  Bell,
  MapPin,
  Clock3,
  Users,
  ShieldAlert,
  CheckCircle2,
  Siren,
  ChevronRight,
} from "lucide-react";

import "./Alerts.css";

function Alerts() {
  const alerts = [
    {
      title: "Critical Flood Warning",
      message:
        "Water level is rising rapidly. Immediate evacuation is recommended.",
      location: "Sector 12, Kanpur",
      severity: "Critical",
      affected: "420 people",
      time: "8 min ago",
      source: "AI Risk Engine",
    },
    {
      title: "Building Damage Detected",
      message:
        "Structural damage reported. Rescue team assessment required.",
      location: "Civil Lines",
      severity: "High",
      affected: "85 people",
      time: "21 min ago",
      source: "Incident Report",
    },
    {
      title: "Road Blockage",
      message:
        "Main road is blocked. Emergency vehicles should use alternate routes.",
      location: "Mall Road",
      severity: "Medium",
      affected: "120 people",
      time: "34 min ago",
      source: "Traffic Monitoring",
    },
    {
      title: "Shelter Capacity Warning",
      message:
        "Shelter B is approaching maximum capacity. Redirect new evacuees.",
      location: "Swaroop Nagar",
      severity: "Medium",
      affected: "310 people",
      time: "47 min ago",
      source: "Shelter Network",
    },
  ];

  return (
    <div className="alerts-page">

      {/* HEADER */}

      <div className="alerts-header">

        <div>
          <div className="alerts-eyebrow">
            <span></span>
            REAL-TIME EMERGENCY ALERT SYSTEM
          </div>

          <h1>Emergency Alerts</h1>

          <p>
            Monitor critical situations and prioritize emergency
            response actions.
          </p>
        </div>

        <div className="alert-status">

          <Bell size={17} />

          <div>
            <strong>Live Monitoring</strong>
            <span>Alerts updated automatically</span>
          </div>

        </div>

      </div>


      {/* SUMMARY */}

      <div className="alerts-summary">

        <div className="alert-summary-card critical-card">
          <div className="alert-summary-icon">
            <Siren size={19} />
          </div>

          <div>
            <strong>04</strong>
            <span>Active Alerts</span>
          </div>
        </div>


        <div className="alert-summary-card">
          <div className="alert-summary-icon">
            <ShieldAlert size={19} />
          </div>

          <div>
            <strong>01</strong>
            <span>Critical</span>
          </div>
        </div>


        <div className="alert-summary-card">
          <div className="alert-summary-icon">
            <AlertTriangle size={19} />
          </div>

          <div>
            <strong>02</strong>
            <span>High Priority</span>
          </div>
        </div>


        <div className="alert-summary-card">
          <div className="alert-summary-icon">
            <CheckCircle2 size={19} />
          </div>

          <div>
            <strong>08</strong>
            <span>Resolved Today</span>
          </div>
        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="alerts-layout">

        {/* ALERT LIST */}

        <div className="alerts-list-section">

          <div className="section-heading">

            <div>
              <h2>Active Alerts</h2>
              <p>Latest warnings requiring attention</p>
            </div>

            <select defaultValue="all">
              <option value="all">All Alerts</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
            </select>

          </div>


          <div className="alerts-list">

            {alerts.map((alert, index) => {

              const critical =
                alert.severity === "Critical";

              return (
                <div
                  className={`alert-card ${
                    critical ? "critical-alert" : ""
                  }`}
                  key={index}
                >

                  {/* ICON */}

                  <div
                    className={`alert-icon alert-${alert.severity.toLowerCase()}`}
                  >
                    <AlertTriangle size={20} />
                  </div>


                  {/* CONTENT */}

                  <div className="alert-content">

                    <div className="alert-title-row">

                      <h3>{alert.title}</h3>

                      <span
                        className={`severity-label severity-${alert.severity.toLowerCase()}`}
                      >
                        {alert.severity}
                      </span>

                    </div>

                    <p className="alert-message">
                      {alert.message}
                    </p>


                    <div className="alert-meta">

                      <span>
                        <MapPin size={12} />
                        {alert.location}
                      </span>

                      <span>
                        <Users size={12} />
                        {alert.affected}
                      </span>

                      <span>
                        <Clock3 size={12} />
                        {alert.time}
                      </span>

                    </div>


                    <div className="alert-source">
                      Source: <strong>{alert.source}</strong>
                    </div>

                  </div>


                  {/* ACTION */}

                  <div className="alert-actions">

                    <button className="view-alert">
                      View Details
                      <ChevronRight size={13} />
                    </button>

                    <button className="acknowledge-btn">
                      <CheckCircle2 size={13} />
                      Acknowledge
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        {/* PRIORITY PANEL */}

        <aside className="priority-panel">

          <div className="priority-header">

            <div className="priority-header-icon">
              ✦
            </div>

            <div>
              <h2>AI Priority</h2>
              <p>Recommended response order</p>
            </div>

          </div>


          <div className="priority-item priority-first">

            <div className="priority-number">
              01
            </div>

            <div>
              <strong>Sector 12 Flood</strong>

              <span>
                Immediate evacuation
              </span>

              <small>
                Critical · 420 affected
              </small>
            </div>

          </div>


          <div className="priority-item">

            <div className="priority-number">
              02
            </div>

            <div>
              <strong>Civil Lines</strong>

              <span>
                Structural assessment
              </span>

              <small>
                High · 85 affected
              </small>
            </div>

          </div>


          <div className="priority-item">

            <div className="priority-number">
              03
            </div>

            <div>
              <strong>Mall Road</strong>

              <span>
                Clear alternate route
              </span>

              <small>
                Medium · 120 affected
              </small>
            </div>

          </div>


          {/* AI MESSAGE */}

          <div className="ai-alert-message">

            <div className="ai-small-icon">
              ✦
            </div>

            <div>

              <strong>AI Recommendation</strong>

              <p>
                Prioritize Sector 12 because rising water
                levels may increase the affected population.
              </p>

            </div>

          </div>

        </aside>

      </div>


      {/* BROADCAST */}

      <div className="broadcast-card">

        <div className="broadcast-icon">
          <Bell size={19} />
        </div>

        <div className="broadcast-content">

          <strong>Emergency Broadcast</strong>

          <p>
            Send an emergency notification to responders,
            field teams and registered users in affected areas.
          </p>

        </div>

        <button>
          Create Broadcast
          <ChevronRight size={14} />
        </button>

      </div>

    </div>
  );
}

export default Alerts;