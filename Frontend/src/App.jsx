import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Incidents from "./pages/Incidents";
import SafeRoutes from "./pages/SafeRoutes";
import Copilot from "./pages/Copilot";
import Resources from "./pages/Resources";
import RescueTeams from "./pages/RescueTeams";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= AUTH ================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* ================= MAIN APPLICATION ================= */}

        <Route element={<Layout />}>

          {/* Default application page */}
          <Route
            path="/"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Incidents */}
          <Route
            path="/incidents"
            element={<Incidents />}
          />

          {/* Safe Routes */}
          <Route
            path="/safe-routes"
            element={<SafeRoutes />}
          />

          {/* AI Copilot */}
          <Route
            path="/copilot"
            element={<Copilot />}
          />

          {/* Resources */}
          <Route
            path="/resources"
            element={<Resources />}
          />

          {/* Rescue Teams */}
          <Route
            path="/rescue-teams"
            element={<RescueTeams />}
          />

          {/* Alerts */}
          <Route
            path="/alerts"
            element={<Alerts />}
          />

          {/* Reports */}
          <Route
            path="/reports"
            element={<Reports />}
          />

        </Route>


        {/* ================= UNKNOWN URL ================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;