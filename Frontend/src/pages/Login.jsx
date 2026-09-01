import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ShieldAlert,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend login.
    // Later this will call the FastAPI authentication endpoint.
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
            EMERGENCY INTELLIGENCE
          </span>

          <h1>
            Smarter decisions
            <br />
            when every second
            <br />
            matters.
          </h1>

          <p>
            ResQAI helps emergency teams understand incidents,
            coordinate resources, and identify lower-risk routes
            during disasters.
          </p>

        </div>

        <div className="auth-security">

          <ShieldCheck size={19} />

          <div>
            <strong>Secure Emergency Platform</strong>
            <span>
              Designed for responsible disaster response.
            </span>
          </div>

        </div>

      </div>

      {/* ================= LOGIN FORM ================= */}

      <div className="auth-form-panel">

        <div className="auth-form-container">

          <div className="mobile-auth-logo">

            <div className="auth-logo">
              <ShieldAlert size={23} />
            </div>

            <strong>ResQAI</strong>

          </div>

          <div className="auth-heading">

            <span>WELCOME BACK</span>

            <h1>Sign in to ResQAI</h1>

            <p>
              Access your emergency operations dashboard.
            </p>

          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

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

            {/* PASSWORD */}

            <div className="form-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert("Password recovery will be connected to the backend.")
                  }
                >
                  Forgot password?
                </button>

              </div>

              <div className="input-wrapper">

                <Lock size={18} />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
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

            {/* SUBMIT */}

            <button
              type="submit"
              className="auth-submit"
            >
              Sign in to Command Center
              <ArrowRight size={18} />
            </button>

          </form>

          {/* REGISTER */}

          <div className="auth-switch">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create account
            </Link>

          </div>

          <div className="auth-disclaimer">

            <ShieldCheck size={15} />

            <span>
              Your emergency operations data is handled
              through secure system channels.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;