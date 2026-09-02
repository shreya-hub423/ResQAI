import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "Emergency Responder",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    // Temporary frontend registration.
    // Later this will connect to FastAPI.
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      {/* ================= LEFT PANEL ================= */}

      <div className="auth-brand-panel">

        <div className="auth-brand">

          <div className="auth-logo">
            <ShieldAlert size={25} />
          </div>

          <div>
            <h2>ResQAI</h2>
            <span>AI Disaster Response Copilot</span>
          </div>

        </div>

        <div className="auth-hero">

          <span className="auth-eyebrow">
            JOIN THE RESPONSE NETWORK
          </span>

          <h1>
            Coordinate.
            <br />
            Respond.
            <br />
            Protect.
          </h1>

          <p>
            Create your ResQAI account and access an intelligent
            emergency operations platform built to support faster,
            safer disaster response.
          </p>

        </div>

        <div className="auth-security">

          <ShieldCheck size={19} />

          <div>
            <strong>Built for Emergency Operations</strong>

            <span>
              Connect incidents, teams, resources and AI assistance
              in one place.
            </span>
          </div>

        </div>

      </div>

      {/* ================= REGISTER FORM ================= */}

      <div className="auth-form-panel">

        <div className="auth-form-container register-container">

          {/* MOBILE LOGO */}

          <div className="mobile-auth-logo">

            <div className="auth-logo">
              <ShieldAlert size={23} />
            </div>

            <strong>ResQAI</strong>

          </div>

          {/* HEADING */}

          <div className="auth-heading">

            <span>GET STARTED</span>

            <h1>Create your account</h1>

            <p>
              Set up your emergency response profile.
            </p>

          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="form-group">

              <label htmlFor="name">
                Full name
              </label>

              <div className="input-wrapper">

                <User size={18} />

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                Email address
              </label>

              <div className="input-wrapper">

                <Mail size={18} />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="responder@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* ORGANIZATION */}

            <div className="form-group">

              <label htmlFor="organization">
                Organization
              </label>

              <div className="input-wrapper">

                <Building2 size={18} />

                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="Organization / department"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* ROLE */}

            <div className="form-group">

              <label htmlFor="role">
                Response role
              </label>

              <div className="input-wrapper">

                <ShieldCheck size={18} />

                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option>Emergency Responder</option>
                  <option>Incident Commander</option>
                  <option>Medical Coordinator</option>
                  <option>Relief Coordinator</option>
                  <option>Disaster Management Officer</option>
                  <option>Administrator</option>
                </select>

              </div>

            </div>

            {/* PASSWORD */}

            <div className="form-group">

              <label htmlFor="password">
                Password
              </label>

              <div className="input-wrapper">

                <Lock size={18} />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div className="form-group">

              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <div className="input-wrapper">

                <Lock size={18} />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (previous) => !previous
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* ERROR */}

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            {/* SUBMIT */}

            <button
              type="submit"
              className="auth-submit"
            >
              Create ResQAI Account
              <ArrowRight size={18} />
            </button>

          </form>

          {/* LOGIN */}

          <div className="auth-switch">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign in
            </Link>

          </div>

          {/* SECURITY */}

          <div className="auth-disclaimer">

            <ShieldCheck size={15} />

            <span>
              By creating an account, you agree to use ResQAI
              responsibly for emergency response operations.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;