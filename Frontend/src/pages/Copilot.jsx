import { useState } from "react";
import {
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  Users,
  Ambulance,
  MapPin,
  ArrowRight,
  Send,
  Bot,
  Clock3,
} from "lucide-react";

import "./Copilot.css";

function Copilot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const recommendations = [
    {
      icon: AlertTriangle,
      title: "Prioritize Sector 12",
      text: "Critical flooding requires immediate evacuation support.",
      type: "critical",
    },
    {
      icon: Users,
      title: "Deploy 3 rescue teams",
      text: "Nearest available teams should be assigned to Sector 12.",
      type: "team",
    },
    {
      icon: Ambulance,
      title: "Prepare medical support",
      text: "Keep emergency medical transport ready near Civil Lines.",
      type: "medical",
    },
    {
      icon: ShieldCheck,
      title: "Activate Shelter B",
      text: "Shelter B has capacity for approximately 500 people.",
      type: "safe",
    },
  ];

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = message.trim();

    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
      {
        sender: "ai",
        text:
          "Based on current incident data, I recommend prioritizing the critical flood zone, deploying nearby rescue teams, and directing civilians toward the nearest active shelter.",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="copilot-page">

      {/* HEADER */}

      <div className="copilot-page-header">

        <div>
          <div className="copilot-eyebrow">
            <Sparkles size={15} />
            RESQAI INTELLIGENCE ENGINE
          </div>

          <h1>AI Copilot</h1>

          <p>
            Get AI-assisted disaster analysis, response priorities,
            and operational recommendations.
          </p>
        </div>

        <div className="copilot-online">
          <span></span>
          AI Online
        </div>

      </div>


      {/* ALERT BANNER */}

      <div className="copilot-alert">

        <div className="copilot-alert-icon">
          <AlertTriangle size={21} />
        </div>

        <div className="copilot-alert-content">

          <div className="copilot-alert-title">
            Critical situation detected
          </div>

          <p>
            Sector 12 flood reports indicate elevated risk.
            Immediate evacuation and rescue coordination are recommended.
          </p>

        </div>

        <div className="copilot-alert-time">
          <Clock3 size={14} />
          8 min ago
        </div>

      </div>


      {/* MAIN GRID */}

      <div className="copilot-main-grid">

        {/* AI ANALYSIS */}

        <div className="copilot-analysis-card">

          <div className="copilot-card-header">

            <div className="copilot-card-title">

              <div className="copilot-bot-icon">
                <Bot size={20} />
              </div>

              <div>
                <h2>Response Analysis</h2>
                <span>AI-generated operational assessment</span>
              </div>

            </div>

            <span className="analysis-badge">
              ANALYZED
            </span>

          </div>


          <div className="analysis-summary">

            <h3>Situation Summary</h3>

            <p>
              A critical flood incident has been reported in Sector 12,
              Kanpur. Current estimates indicate approximately
              <strong> 420 people </strong>
              may be affected.
            </p>

            <p>
              Based on the current situation, evacuation assistance,
              rescue team deployment, and medical preparedness should
              be prioritized.
            </p>

          </div>


          {/* PRIORITY */}

          <div className="priority-box">

            <div className="priority-header">

              <div>
                <span>RESPONSE PRIORITY</span>
                <strong>CRITICAL</strong>
              </div>

              <AlertTriangle size={23} />

            </div>

            <div className="priority-bar">
              <div></div>
            </div>

            <p>
              Immediate action recommended within the affected zone.
            </p>

          </div>


          {/* INCIDENT DETAILS */}

          <div className="incident-analysis">

            <h3>Incident Details</h3>

            <div className="analysis-details">

              <div>
                <MapPin size={16} />
                <span>
                  <small>Location</small>
                  Sector 12, Kanpur
                </span>
              </div>

              <div>
                <Users size={16} />
                <span>
                  <small>Estimated affected</small>
                  420 people
                </span>
              </div>

              <div>
                <AlertTriangle size={16} />
                <span>
                  <small>Severity</small>
                  Critical
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* RECOMMENDATIONS */}

        <div className="recommendations-card">

          <div className="copilot-card-header">

            <div>
              <h2>Recommended Actions</h2>
              <span>Suggested response priorities</span>
            </div>

            <Sparkles size={20} />

          </div>


          <div className="recommendation-list">

            {recommendations.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  className={`copilot-recommendation ${item.type}`}
                  key={item.title}
                >

                  <div className="recommendation-number">
                    {index + 1}
                  </div>

                  <div className="recommendation-icon">
                    <Icon size={17} />
                  </div>

                  <div className="recommendation-content">

                    <strong>{item.title}</strong>

                    <p>{item.text}</p>

                  </div>

                  <ArrowRight size={15} />

                </div>
              );

            })}

          </div>


          <button className="execute-button">
            Review Response Plan
            <ArrowRight size={16} />
          </button>

        </div>

      </div>


      {/* CHAT */}

      <div className="copilot-chat-card">

        <div className="chat-header">

          <div className="chat-title">

            <div className="chat-avatar">
              <Bot size={18} />
            </div>

            <div>
              <h2>Ask ResQAI</h2>
              <span>Emergency response assistant</span>
            </div>

          </div>

          <div className="chat-status">
            <span></span>
            Ready
          </div>

        </div>


        {/* CHAT MESSAGES */}

        <div className="chat-messages">

          {chat.length === 0 ? (

            <div className="chat-empty">

              <Sparkles size={24} />

              <strong>
                How can I help with this emergency?
              </strong>

              <span>
                Ask about incidents, evacuation, resources,
                rescue teams or response priorities.
              </span>

            </div>

          ) : (

            chat.map((item, index) => (

              <div
                key={index}
                className={`chat-message ${item.sender}`}
              >

                {item.sender === "ai" && (
                  <div className="small-ai-avatar">
                    <Bot size={14} />
                  </div>
                )}

                <div className="message-bubble">
                  {item.text}
                </div>

              </div>

            ))

          )}

        </div>


        {/* INPUT */}

        <div className="chat-input-area">

          <input
            type="text"
            placeholder="Ask ResQAI about the current emergency..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>
            <Send size={17} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default Copilot;