import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Users,
  Ambulance,
  Clock3,
  Download,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import "./Reports.css";

function Reports() {
  const stats = [
    {
      title: "Total Incidents",
      value: "148",
      change: "+12%",
      trend: "up",
      icon: AlertTriangle,
    },
    {
      title: "People Assisted",
      value: "8,420",
      change: "+18%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Teams Deployed",
      value: "286",
      change: "+9%",
      trend: "up",
      icon: Ambulance,
    },
    {
      title: "Avg. Response Time",
      value: "18 min",
      change: "-14%",
      trend: "down",
      icon: Clock3,
    },
  ];

  const incidents = [
    {
      type: "Flood",
      incidents: 42,
      percentage: "28%",
    },
    {
      type: "Building Damage",
      incidents: 31,
      percentage: "21%",
    },
    {
      type: "Road Blockage",
      incidents: 28,
      percentage: "19%",
    },
    {
      type: "Fire",
      incidents: 24,
      percentage: "16%",
    },
    {
      type: "Other",
      incidents: 23,
      percentage: "16%",
    },
  ];

  const responseData = [
    {
      area: "Sector 12",
      teams: 8,
      people: 420,
      response: "14 min",
      status: "Excellent",
    },
    {
      area: "Civil Lines",
      teams: 5,
      people: 185,
      response: "19 min",
      status: "Good",
    },
    {
      area: "Mall Road",
      teams: 3,
      people: 120,
      response: "22 min",
      status: "Good",
    },
    {
      area: "Swaroop Nagar",
      teams: 4,
      people: 310,
      response: "26 min",
      status: "Needs Attention",
    },
  ];

  return (
    <div className="reports-page">

      {/* HEADER */}

      <div className="reports-header">

        <div>
          <div className="reports-eyebrow">
            <BarChart3 size={12} />
            EMERGENCY OPERATIONS ANALYTICS
          </div>

          <h1>Response Reports</h1>

          <p>
            Analyze disaster activity, response performance,
            and resource utilization.
          </p>
        </div>

        <div className="reports-actions">

          <button className="date-button">
            <CalendarDays size={15} />
            Last 30 Days
          </button>

          <button className="download-button">
            <Download size={15} />
            Export Report
          </button>

        </div>

      </div>


      {/* STATS */}

      <section className="report-stats">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (
            <div className="report-stat-card" key={stat.title}>

              <div className="report-stat-top">

                <div className="report-stat-icon">
                  <Icon size={20} />
                </div>

                <span
                  className={
                    stat.trend === "up"
                      ? "report-trend up"
                      : "report-trend down"
                  }
                >
                  {stat.trend === "up" ? (
                    <TrendingUp size={13} />
                  ) : (
                    <TrendingDown size={13} />
                  )}

                  {stat.change}
                </span>

              </div>

              <strong>{stat.value}</strong>

              <span>{stat.title}</span>

            </div>
          );
        })}

      </section>


      {/* ANALYTICS GRID */}

      <section className="reports-grid">

        {/* INCIDENT DISTRIBUTION */}

        <div className="report-card incident-distribution">

          <div className="report-card-header">

            <div>
              <h2>Incident Distribution</h2>
              <p>Breakdown of reported emergencies</p>
            </div>

            <button className="small-action">
              Details
              <ChevronRight size={14} />
            </button>

          </div>


          <div className="incident-bars">

            {incidents.map((item) => (

              <div className="incident-bar-row" key={item.type}>

                <div className="bar-label">
                  <span>{item.type}</span>
                  <strong>{item.incidents}</strong>
                </div>

                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{
                      width: item.percentage,
                    }}
                  ></div>
                </div>

                <span className="bar-percentage">
                  {item.percentage}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* RESPONSE PERFORMANCE */}

        <div className="report-card performance-card">

          <div className="report-card-header">

            <div>
              <h2>Response Performance</h2>
              <p>Emergency response efficiency</p>
            </div>

            <div className="performance-score">
              92%
            </div>

          </div>


          <div className="performance-chart">

            <div className="chart-line">
              <span style={{ height: "45%" }}></span>
              <span style={{ height: "62%" }}></span>
              <span style={{ height: "54%" }}></span>
              <span style={{ height: "72%" }}></span>
              <span style={{ height: "65%" }}></span>
              <span style={{ height: "82%" }}></span>
              <span style={{ height: "91%" }}></span>
            </div>

            <div className="chart-days">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

          </div>


          <div className="performance-footer">

            <div>
              <strong>18 min</strong>
              <span>Average response</span>
            </div>

            <div>
              <strong>94%</strong>
              <span>Team availability</span>
            </div>

          </div>

        </div>

      </section>


      {/* RESPONSE TABLE */}

      <div className="report-card response-table-card">

        <div className="report-card-header">

          <div>
            <h2>Area Response Summary</h2>
            <p>
              Performance across currently monitored areas
            </p>
          </div>

          <button className="small-action">
            View Full Report
            <ChevronRight size={14} />
          </button>

        </div>


        <div className="response-table">

          <div className="table-head">
            <span>AREA</span>
            <span>TEAMS</span>
            <span>PEOPLE ASSISTED</span>
            <span>RESPONSE TIME</span>
            <span>STATUS</span>
          </div>


          {responseData.map((row) => (

            <div className="table-row" key={row.area}>

              <strong>{row.area}</strong>

              <span>{row.teams}</span>

              <span>{row.people}</span>

              <span>{row.response}</span>

              <span
                className={`response-status ${
                  row.status === "Excellent"
                    ? "excellent"
                    : row.status === "Good"
                    ? "good"
                    : "attention"
                }`}
              >
                {row.status}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* AI INSIGHT */}

      <div className="report-ai-card">

        <div className="report-ai-icon">
          ✦
        </div>

        <div className="report-ai-content">

          <strong>AI Operational Insight</strong>

          <p>
            Response performance has improved by 14% this month.
            Sector 12 currently has the fastest response time,
            while Swaroop Nagar may require additional emergency
            resources.
          </p>

        </div>

        <button>
          Open AI Analysis
          <ChevronRight size={14} />
        </button>

      </div>

    </div>
  );
}

export default Reports;