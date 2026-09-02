import { NavLink, Outlet } from "react-router-dom";
import {
  AlertTriangle,
  Bell,
  Bot,
  FileText,
  LayoutDashboard,
  Map,
  Menu,
  Package,
  ShieldAlert,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Incidents",
      path: "/incidents",
      icon: AlertTriangle,
    },
    {
      name: "Safe Routes",
      path: "/safe-routes",
      icon: Map,
    },
    {
      name: "AI Copilot",
      path: "/copilot",
      icon: Bot,
    },
    {
      name: "Resources",
      path: "/resources",
      icon: Package,
    },
    {
      name: "Rescue Teams",
      path: "/rescue-teams",
      icon: Users,
    },
    {
      name: "Alerts",
      path: "/alerts",
      icon: Bell,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: FileText,
    },
  ];

  return (
    <div className="resq-layout">

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}

      <aside className={`resq-sidebar ${mobileOpen ? "open" : ""}`}>

        <div className="sidebar-brand">

          <div className="brand-logo">
            <ShieldAlert size={25} />
          </div>

          <div>
            <h2>ResQAI</h2>
            <span>Emergency Intelligence</span>
          </div>

          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>

        </div>

        <div className="sidebar-section-title">
          OPERATIONS
        </div>

        <nav className="sidebar-navigation">

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}

        </nav>

        {/* Emergency card */}

        <div className="sidebar-emergency">

          <div className="emergency-icon">
            <AlertTriangle size={18} />
          </div>

          <div>
            <strong>Emergency Mode</strong>
            <span>System operational</span>
          </div>

          <div className="status-dot" />

        </div>

        <div className="sidebar-footer">
          <span>ResQAI</span>
          <small>AI Disaster Response</small>
        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <div className="resq-main">

        <header className="resq-topbar">

          <button
            className="mobile-menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>

          <div className="topbar-title">
            <span>EMERGENCY OPERATIONS CENTER</span>
          </div>

          <div className="topbar-right">

            <div className="system-status">
              <span className="status-dot" />
              System Operational
            </div>

            <button className="notification-button">
              <Bell size={19} />
              <span>3</span>
            </button>

            <div className="user-profile">
              <div className="user-avatar">
                R
              </div>

              <div>
                <strong>Responder</strong>
                <small>Emergency Officer</small>
              </div>
            </div>

          </div>

        </header>

        <main className="resq-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}