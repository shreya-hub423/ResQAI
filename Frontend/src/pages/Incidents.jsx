import { useState } from "react";
import {
  AlertTriangle,
  MapPin,
  Users,
  Clock3,
  Plus,
  Search,
  Filter,
  Image,
  X,
  Send,
} from "lucide-react";

import "./Incidents.css";

function Incidents() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [incidents, setIncidents] = useState([
    {
      id: 1,
      type: "Flood",
      location: "Sector 12, Kanpur",
      severity: "Critical",
      people: 420,
      time: "8 min ago",
      status: "Active",
    },
    {
      id: 2,
      type: "Building Damage",
      location: "Civil Lines",
      severity: "High",
      people: 85,
      time: "21 min ago",
      status: "Active",
    },
    {
      id: 3,
      type: "Road Blockage",
      location: "Mall Road",
      severity: "Medium",
      people: 120,
      time: "34 min ago",
      status: "Monitoring",
    },
    {
      id: 4,
      type: "Water Logging",
      location: "Kalyanpur",
      severity: "Medium",
      people: 65,
      time: "51 min ago",
      status: "Monitoring",
    },
    {
      id: 5,
      type: "Fire",
      location: "Panki Industrial Area",
      severity: "High",
      people: 42,
      time: "1 hr ago",
      status: "Active",
    },
  ]);

  const [form, setForm] = useState({
    type: "",
    location: "",
    severity: "Medium",
    people: "",
    description: "",
    image: null,
  });

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch =
      incident.type.toLowerCase().includes(search.toLowerCase()) ||
      incident.location.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || incident.severity === filter;

    return matchesSearch && matchesFilter;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImage = (e) => {
    setForm((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const submitIncident = (e) => {
    e.preventDefault();

    if (!form.type || !form.location) {
      alert("Please enter incident type and location.");
      return;
    }

    const newIncident = {
      id: Date.now(),
      type: form.type,
      location: form.location,
      severity: form.severity,
      people: Number(form.people) || 0,
      time: "Just now",
      status: "Active",
    };

    setIncidents((prev) => [newIncident, ...prev]);

    setForm({
      type: "",
      location: "",
      severity: "Medium",
      people: "",
      description: "",
      image: null,
    });

    setShowModal(false);
  };

  return (
    <div className="incidents-page">

      {/* HEADER */}

      <div className="incidents-header">

        <div>
          <div className="incidents-eyebrow">
            <span></span>
            EMERGENCY MONITORING
          </div>

          <h1>Incidents</h1>

          <p>
            Monitor, report, and coordinate active disaster incidents
            across affected areas.
          </p>
        </div>

        <button
          className="new-incident-btn"
          onClick={() => setShowModal(true)}
        >
          <Plus size={17} />
          Report Incident
        </button>

      </div>


      {/* SUMMARY */}

      <div className="incident-summary">

        <div className="summary-item">
          <div className="summary-icon critical">
            <AlertTriangle size={19} />
          </div>

          <div>
            <strong>04</strong>
            <span>Critical</span>
          </div>
        </div>

        <div className="summary-item">
          <div className="summary-icon high">
            <AlertTriangle size={19} />
          </div>

          <div>
            <strong>08</strong>
            <span>High Priority</span>
          </div>
        </div>

        <div className="summary-item">
          <div className="summary-icon people">
            <Users size={19} />
          </div>

          <div>
            <strong>1,240</strong>
            <span>People Affected</span>
          </div>
        </div>

        <div className="summary-item">
          <div className="summary-icon active">
            <MapPin size={19} />
          </div>

          <div>
            <strong>12</strong>
            <span>Active Incidents</span>
          </div>
        </div>

      </div>


      {/* INCIDENT TABLE */}

      <div className="incidents-card">

        <div className="incidents-card-header">

          <div>
            <h2>Active Disaster Incidents</h2>
            <p>Latest emergency reports and situation updates</p>
          </div>

          <div className="incident-controls">

            <div className="incident-search">
              <Search size={15} />

              <input
                type="text"
                placeholder="Search incidents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="incident-filter">
              <Filter size={14} />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="All">All Severity</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
              </select>
            </div>

          </div>

        </div>


        {/* TABLE HEADER */}

        <div className="incident-table-head">
          <span>INCIDENT</span>
          <span>LOCATION</span>
          <span>PEOPLE</span>
          <span>REPORTED</span>
          <span>STATUS</span>
          <span>SEVERITY</span>
        </div>


        {/* ROWS */}

        <div className="incident-table">

          {filteredIncidents.length === 0 ? (

            <div className="no-incidents">
              No incidents found.
            </div>

          ) : (

            filteredIncidents.map((incident) => (

              <div
                className="incident-table-row"
                key={incident.id}
              >

                <div className="incident-name">

                  <div
                    className={`incident-icon ${incident.severity.toLowerCase()}`}
                  >
                    <AlertTriangle size={16} />
                  </div>

                  <div>
                    <strong>{incident.type}</strong>
                    <span>Incident #{incident.id}</span>
                  </div>

                </div>


                <div className="table-location">
                  <MapPin size={14} />
                  {incident.location}
                </div>


                <div className="table-people">
                  <Users size={14} />
                  {incident.people}
                </div>


                <div className="table-time">
                  <Clock3 size={14} />
                  {incident.time}
                </div>


                <div>
                  <span
                    className={`status-pill ${
                      incident.status === "Active"
                        ? "status-active"
                        : "status-monitoring"
                    }`}
                  >
                    {incident.status}
                  </span>
                </div>


                <div>
                  <span
                    className={`severity-pill severity-${incident.severity.toLowerCase()}`}
                  >
                    {incident.severity}
                  </span>
                </div>

              </div>

            ))

          )}

        </div>

      </div>


      {/* NEW INCIDENT MODAL */}

      {showModal && (

        <div className="incident-modal-overlay">

          <div className="incident-modal">

            <div className="modal-header">

              <div>
                <h2>Report New Incident</h2>
                <p>
                  Provide information about the emergency situation.
                </p>
              </div>

              <button
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                <X size={18} />
              </button>

            </div>


            <form onSubmit={submitIncident}>

              <div className="form-grid">

                <div className="form-group">

                  <label>Incident Type</label>

                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option value="">Select incident</option>
                    <option value="Flood">Flood</option>
                    <option value="Fire">Fire</option>
                    <option value="Building Damage">
                      Building Damage
                    </option>
                    <option value="Road Blockage">
                      Road Blockage
                    </option>
                    <option value="Landslide">
                      Landslide
                    </option>
                    <option value="Water Logging">
                      Water Logging
                    </option>
                    <option value="Other">Other</option>
                  </select>

                </div>


                <div className="form-group">

                  <label>Severity</label>

                  <select
                    name="severity"
                    value={form.severity}
                    onChange={handleChange}
                  >
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                  </select>

                </div>


                <div className="form-group">

                  <label>Location</label>

                  <div className="input-with-icon">
                    <MapPin size={15} />

                    <input
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="e.g. Sector 12, Kanpur"
                    />
                  </div>

                </div>


                <div className="form-group">

                  <label>Estimated People Affected</label>

                  <input
                    type="number"
                    name="people"
                    value={form.people}
                    onChange={handleChange}
                    placeholder="e.g. 250"
                    min="0"
                  />

                </div>

              </div>


              <div className="form-group">

                <label>Description</label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe the current situation..."
                  rows="4"
                />

              </div>


              {/* IMAGE */}

              <div className="form-group">

                <label>Incident Image</label>

                <label className="image-upload">

                  <Image size={21} />

                  <div>
                    <strong>
                      {form.image
                        ? form.image.name
                        : "Upload incident image"}
                    </strong>

                    <span>
                      AI image analysis can be connected here
                    </span>
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                  />

                </label>

              </div>


              <div className="modal-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="submit-incident-btn"
                >
                  <Send size={15} />
                  Submit Incident
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Incidents;