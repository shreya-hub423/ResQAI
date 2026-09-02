import {
  Ambulance,
  Package,
  Users,
  Droplets,
  Utensils,
  Radio,
  Plus,
  Minus,
  MapPin,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import "./Resources.css";

function Resources() {
  const resources = [
    {
      name: "Ambulances",
      category: "Medical Transport",
      icon: Ambulance,
      total: 20,
      available: 12,
      deployed: 8,
      location: "Kanpur Emergency Zone",
      status: "Available",
      type: "medical",
    },
    {
      name: "Medical Kits",
      category: "Medical Supplies",
      icon: Package,
      total: 120,
      available: 84,
      deployed: 36,
      location: "Central Supply Center",
      status: "Available",
      type: "supplies",
    },
    {
      name: "Safe Shelters",
      category: "Evacuation",
      icon: Users,
      total: 12,
      available: 8,
      deployed: 4,
      location: "Multiple Locations",
      status: "Available",
      type: "shelter",
    },
    {
      name: "Drinking Water",
      category: "Essential Supplies",
      icon: Droplets,
      total: 5000,
      available: 3200,
      deployed: 1800,
      location: "Relief Warehouse",
      status: "Available",
      type: "water",
    },
    {
      name: "Food Packets",
      category: "Relief Supplies",
      icon: Utensils,
      total: 4000,
      available: 920,
      deployed: 3080,
      location: "Relief Warehouse",
      status: "Low Stock",
      type: "food",
    },
    {
      name: "Emergency Radios",
      category: "Communication",
      icon: Radio,
      total: 60,
      available: 42,
      deployed: 18,
      location: "Operations Center",
      status: "Available",
      type: "communication",
    },
  ];

  return (
    <div className="resources-page">

      {/* HEADER */}

      <div className="resources-header">

        <div>
          <div className="resources-eyebrow">
            <span></span>
            EMERGENCY RESOURCE MANAGEMENT
          </div>

          <h1>Emergency Resources</h1>

          <p>
            Monitor, allocate and coordinate emergency resources
            across affected areas.
          </p>
        </div>

        <button className="add-resource-btn">
          <Plus size={16} />
          Add Resource
        </button>

      </div>


      {/* SUMMARY */}

      <div className="resource-summary">

        <div className="summary-card">
          <div className="summary-number">12</div>
          <div>
            <strong>Resource Types</strong>
            <span>Currently tracked</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-number">08</div>
          <div>
            <strong>Locations</strong>
            <span>Across response zone</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-number">73%</div>
          <div>
            <strong>Availability</strong>
            <span>Overall resources</span>
          </div>
        </div>

        <div className="summary-card warning-summary">
          <div className="summary-number">02</div>
          <div>
            <strong>Low Stock</strong>
            <span>Needs attention</span>
          </div>
        </div>

      </div>


      {/* FILTER */}

      <div className="resources-toolbar">

        <div>
          <h2>Resource Inventory</h2>
          <p>Current availability across emergency operations</p>
        </div>

        <select defaultValue="all">
          <option value="all">All Resources</option>
          <option value="medical">Medical</option>
          <option value="supplies">Supplies</option>
          <option value="shelter">Shelters</option>
          <option value="communication">Communication</option>
        </select>

      </div>


      {/* RESOURCE GRID */}

      <div className="resources-grid">

        {resources.map((resource) => {

          const Icon = resource.icon;

          const percentage = Math.round(
            (resource.available / resource.total) * 100
          );

          const isLow = resource.status === "Low Stock";

          return (
            <div className="resource-card" key={resource.name}>

              {/* CARD TOP */}

              <div className="resource-card-top">

                <div className={`resource-main-icon ${resource.type}`}>
                  <Icon size={21} />
                </div>

                <span
                  className={
                    isLow
                      ? "resource-status low"
                      : "resource-status available"
                  }
                >
                  {isLow ? (
                    <AlertTriangle size={11} />
                  ) : (
                    <CheckCircle2 size={11} />
                  )}

                  {resource.status}
                </span>

              </div>


              {/* TITLE */}

              <div className="resource-title">

                <h3>{resource.name}</h3>

                <span>{resource.category}</span>

              </div>


              {/* NUMBERS */}

              <div className="resource-numbers">

                <div>
                  <strong>{resource.available.toLocaleString()}</strong>
                  <span>Available</span>
                </div>

                <div>
                  <strong>{resource.deployed.toLocaleString()}</strong>
                  <span>Deployed</span>
                </div>

                <div>
                  <strong>{resource.total.toLocaleString()}</strong>
                  <span>Total</span>
                </div>

              </div>


              {/* PROGRESS */}

              <div className="resource-progress">

                <div className="progress-label">
                  <span>Availability</span>
                  <strong>{percentage}%</strong>
                </div>

                <div className="progress-track">
                  <div
                    className={`progress-fill ${
                      isLow ? "low-fill" : ""
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

              </div>


              {/* LOCATION */}

              <div className="resource-location">

                <MapPin size={12} />

                <span>{resource.location}</span>

              </div>


              {/* ACTIONS */}

              <div className="resource-actions">

                <button>
                  <Minus size={13} />
                  Deallocate
                </button>

                <button>
                  <Plus size={13} />
                  Allocate
                </button>

              </div>

            </div>
          );
        })}

      </div>


      {/* AI RESOURCE ALERT */}

      <div className="resource-alert">

        <div className="resource-alert-icon">
          <AlertTriangle size={19} />
        </div>

        <div className="resource-alert-content">

          <strong>Resource Alert</strong>

          <p>
            Food packets are running low in the current response
            zone. Consider replenishing supplies before the next
            evacuation phase.
          </p>

        </div>

        <button>
          Review Resources
        </button>

      </div>

    </div>
  );
}

export default Resources;