import { useState } from "react";
import {
  Send,
  Sparkles,
  AlertTriangle,
  MapPin,
  ShieldCheck,
  Bot,
  User,
} from "lucide-react";

import "./CopilotChat.css";

function CopilotChat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I'm ResQAI Copilot. I can help you analyze incidents, prioritize response actions, and find safer evacuation options.",
    },
    {
      id: 2,
      sender: "ai",
      text: "A critical flood has been detected in Sector 12. Would you like me to suggest an immediate response plan?",
    },
  ]);

  const suggestions = [
    {
      icon: AlertTriangle,
      text: "Analyze critical incidents",
    },
    {
      icon: MapPin,
      text: "Find safest evacuation route",
    },
    {
      icon: ShieldCheck,
      text: "Create response plan",
    },
  ];

  const handleSend = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedMessage,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setMessage("");

    // Demo AI response
    setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: "I've analyzed your request. For the current situation, prioritize the critical incident, deploy nearby rescue teams, and guide civilians toward the nearest verified safe shelter.",
        },
      ]);
    }, 700);
  };

  const handleSuggestion = (text) => {
    setMessage(text);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="copilot-chat">

      {/* HEADER */}
      <div className="copilot-chat-header">

        <div className="copilot-chat-brand">

          <div className="copilot-chat-icon">
            <Sparkles size={18} />
          </div>

          <div>
            <h3>ResQAI Copilot</h3>
            <span>
              Emergency response intelligence
            </span>
          </div>

        </div>

        <div className="copilot-status">
          <span></span>
          Online
        </div>

      </div>


      {/* MESSAGES */}
      <div className="copilot-messages">

        {messages.map((item) => (

          <div
            key={item.id}
            className={`copilot-message ${
              item.sender === "user"
                ? "message-user"
                : "message-ai"
            }`}
          >

            <div className="copilot-avatar">

              {item.sender === "ai" ? (
                <Bot size={15} />
              ) : (
                <User size={15} />
              )}

            </div>

            <div className="copilot-bubble">
              {item.text}
            </div>

          </div>

        ))}

      </div>


      {/* QUICK ACTIONS */}
      <div className="copilot-suggestions">

        <span className="suggestion-label">
          Quick actions
        </span>

        <div className="suggestion-list">

          {suggestions.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.text}
                className="suggestion-button"
                onClick={() =>
                  handleSuggestion(item.text)
                }
              >
                <Icon size={13} />
                {item.text}
              </button>
            );
          })}

        </div>

      </div>


      {/* INPUT */}
      <div className="copilot-input-area">

        <textarea
          value={message}
          onChange={(event) =>
            setMessage(event.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Ask ResQAI about an incident, route, team..."
          rows={1}
        />

        <button
          className="copilot-send"
          onClick={handleSend}
          disabled={!message.trim()}
          aria-label="Send message"
        >
          <Send size={16} />
        </button>

      </div>

      <div className="copilot-disclaimer">
        AI recommendations should be verified by emergency
        response personnel before action.
      </div>

    </div>
  );
}

export default CopilotChat;