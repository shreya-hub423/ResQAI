# 🚨 ResQAI — AI Disaster Response Copilot

<p align="center">
  <img src="docs/resqai-cover.png" alt="ResQAI — AI Disaster Response Copilot" width="100%">
</p>

<p align="center">
  <b>From Disaster Data to Life-Saving Decisions — in Seconds.</b>
</p>

<p align="center">
  <b>Build with भारत 2.0 • National Level Hackathon</b>
</p>

---

## 🌍 What is ResQAI?

**ResQAI** is an AI-powered disaster-response decision-support platform designed to help emergency responders understand rapidly changing situations and turn scattered information into **prioritized, explainable and actionable response intelligence**.

Instead of giving responders another dashboard or another chatbot, ResQAI brings together:

**🛰️ Satellite Data + 🌦️ Weather + 🗺️ GIS + 📱 Citizen Reports + 🚨 Alerts + 👨‍🚒 Field Information**

and converts them into:

> **SEE → UNDERSTAND → PRIORITIZE → ACT**

ResQAI is designed as a **human-in-the-loop system**: AI analyzes information and recommends actions, while authorized responders remain in control of critical decisions.

---

# 🚨 The Problem

When a disaster strikes, information comes from everywhere.

* Satellite imagery
* Weather systems
* Maps and GIS
* Emergency reports
* Citizen inputs
* Government alerts
* Hospitals and shelters
* Field response teams

The challenge is not simply the absence of data.

### The real challenge is:

> **Too much fragmented information + too little time + difficult prioritization.**

Responders need quick answers to questions like:

> **Which area should we rescue first?**

> **Where is the highest risk?**

> **Which route is safest?**

> **Which shelter should receive evacuees?**

> **Where should limited emergency resources be deployed?**

ResQAI is designed to help answer these questions from one operational interface.

---

# 💡 Our Solution

ResQAI follows a six-stage intelligence workflow:

```text
        ┌───────────────┐
        │    OBSERVE    │
        │ Collect Data  │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │  UNDERSTAND   │
        │   AI Analysis │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │  PRIORITIZE   │
        │   Risk Score  │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │  RECOMMEND    │
        │ Routes / Help  │
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │  COORDINATE   │
        │ Response Teams│
        └───────┬───────┘
                ↓
        ┌───────────────┐
        │     LEARN     │
        │ Field Feedback│
        └───────────────┘
```

---

# 🧠 Core Features

### 🤖 AI Disaster Copilot

Responders can interact with the system using natural language.

Example:

```text
"Show me the highest-risk flood zones."

"Which area should we prioritize?"

"Find a safer route for Rescue Team Alpha."

"Why is Zone A marked critical?"

"Which nearby shelter has available capacity?"
```

---

### 🛰️ Satellite Damage Intelligence

Analyze before/after imagery to support identification of:

* Flood-affected areas
* Infrastructure changes
* Damaged regions
* Road disruption
* Potential landslide zones

---

### 🚨 Dynamic Risk Scoring

ResQAI can rank affected zones using a conceptual **0–100 priority score**.

Potential factors include:

```text
Hazard Severity
       +
Population Exposure
       +
Infrastructure Vulnerability
       +
Accessibility
       +
Weather Conditions
       +
Verified Incident Reports
```

Example:

| Zone   |   Priority | Status      |
| ------ | ---------: | ----------- |
| Zone A | **94/100** | 🔴 Critical |
| Zone B | **81/100** | 🟠 High     |
| Zone C | **63/100** | 🟡 Moderate |
| Zone D | **31/100** | 🟢 Low      |

The score should also explain **why** a zone received its priority.

---

### 🛣️ Intelligent Rescue Routing

> **Shortest route ≠ safest route**

ResQAI can consider:

* Distance
* Travel time
* Road accessibility
* Blocked roads
* Disaster-risk zones
* Bridges
* Field reports

The goal is:

### **SAFE + FAST + ACCESSIBLE**

---

### 👥 AI-Assisted Incident Triage

Example citizen report:

> *"Water has entered our house. Elderly people are trapped."*

AI can extract:

```text
Location       → Identified
Disaster       → Flood
Severity       → High
Vulnerability  → Elderly persons
Urgency        → Immediate
```

The system can then flag the incident for responder verification.

---

### 📦 Resource Intelligence

Help responders visualize and prioritize:

* 🚑 Ambulances
* 👨‍🚒 Rescue teams
* 🏠 Shelters
* 💧 Water supplies
* 🍱 Food supplies
* 🧰 Emergency equipment

---

### 🔎 Explainable Recommendations

ResQAI should not simply say:

> **"Zone A is critical."**

It should explain:

> **WHY?**

For example:

```text
ZONE A — 94/100

✓ Severe flooding
✓ High population exposure
✓ Multiple blocked roads
✓ Limited accessibility
✓ Verified emergency reports
```

---

# 🗺️ Ask the Disaster Map

One of ResQAI's signature concepts is natural-language interaction with geospatial information.

### Responder:

> **"Show me the 5 highest-risk flood zones within 10 km."**

### ResQAI:

```text
1. Zone A — 94
2. Zone B — 88
3. Zone C — 81
4. Zone D — 76
5. Zone E — 71
```

The map then visualizes the priority areas.

This transforms complicated spatial analysis into a simple conversational workflow.

---

# 🏗️ System Architecture

```text
┌──────────────────────────────────────────────────┐
│                 DATA SOURCES                     │
│                                                  │
│ Satellite │ Weather │ GIS │ Citizens │ Agencies │
│                 │ Field Reports                  │
└───────────────────────┬──────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│              DATA INGESTION LAYER                │
│                                                  │
│       FastAPI │ ETL │ Validation │ APIs         │
└───────────────────────┬──────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│             DATA & GEO LAYER                     │
│                                                  │
│        PostgreSQL + PostGIS + Geospatial Data   │
└───────────────────────┬──────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│             AI INTELLIGENCE LAYER                │
│                                                  │
│ Computer Vision │ Risk Engine │ RAG │ LLM       │
│ Geospatial AI   │ Analytics                      │
└───────────────────────┬──────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│              DECISION SUPPORT                    │
│                                                  │
│ Risk Zones │ Triage │ Routing │ Shelters        │
│ Resource Allocation │ Alerts                     │
└───────────────────────┬──────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────┐
│             RESPONSE INTERFACES                  │
│                                                  │
│ Command Center │ Responder Interface │ Citizen  │
└───────────────────────┬──────────────────────────┘
                        ↓
                FIELD FEEDBACK
                        ↓
                CONTINUOUS UPDATE
```

---

# 🛠️ Technology Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Leaflet / MapLibre
* Recharts

## Backend

* Python
* FastAPI
* Pydantic
* Uvicorn

## AI / ML

* PyTorch
* Hugging Face Transformers
* Computer Vision
* LLM
* RAG
* scikit-learn

## Geospatial

* PostgreSQL
* PostGIS
* GeoPandas
* Rasterio
* Shapely
* GDAL
* OpenStreetMap

## Development

* Git
* GitHub
* Docker
* REST APIs

---

# 🔐 Human-in-the-Loop Safety

ResQAI is designed around:

```text
AI ANALYZES
     ↓
AI RECOMMENDS
     ↓
HUMAN VERIFIES
     ↓
AUTHORIZED ACTION
     ↓
FIELD FEEDBACK
```

This is especially important because disaster-response decisions can be safety-critical.

Potential trust mechanisms include:

* Explainable recommendations
* Confidence scores
* Source-aware responses
* Data validation
* Audit logs
* Role-based access
* Human approval
* Fail-safe behavior

> **ResQAI assists responders — it does not replace them.**

---

# 🎯 Hackathon MVP

For the initial prototype, ResQAI focuses on a:

## 🌊 Flood Emergency Command Center

The MVP can demonstrate:

```text
Interactive Map
       ↓
Flood-Affected Zones
       ↓
Risk Heatmap
       ↓
AI Copilot
       ↓
Incident Prioritization
       ↓
Safe Route Recommendation
       ↓
Shelter Recommendation
       ↓
Resource Planning
       ↓
Human Verification
```

### Example Demo

**Responder:**

> "Where should I send the first rescue team?"

**ResQAI:**

> **Zone A — Priority 94/100.**
> High hazard severity, significant population exposure, limited accessibility and multiple verified emergency reports make it the current highest-priority zone.

---

# ⚡ Why ResQAI?

| Capability             | Traditional Dashboard | Basic Chatbot | **ResQAI** |
| ---------------------- | :-------------------: | :-----------: | :--------: |
| Disaster Map           |           ✅           |       ❌       |      ✅     |
| Multimodal Data        |           ⚠️          |       ⚠️      |      ✅     |
| Satellite Intelligence |           ⚠️          |       ❌       |      ✅     |
| Natural Language       |           ❌           |       ✅       |      ✅     |
| Risk Scoring           |           ⚠️          |       ❌       |      ✅     |
| Rescue Routing         |           ⚠️          |       ❌       |      ✅     |
| Incident Triage        |           ❌           |       ⚠️      |      ✅     |
| Resource Intelligence  |           ⚠️          |       ⚠️      |      ✅     |
| Explainability         |           ⚠️          |       ⚠️      |      ✅     |
| Human-in-the-Loop      |           ✅           |       ⚠️      |      ✅     |

### Our USP

> **Not another dashboard. Not another chatbot. A disaster-response decision-support copilot.**

---

# 📁 Project Structure

```text
ResQAI/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── ai/
│   │   ├── models/
│   │   ├── services/
│   │   └── main.py
│   └── requirements.txt
│
├── ml/
│   ├── models/
│   ├── preprocessing/
│   └── inference/
│
├── data/
│
├── docs/
│   └── resqai-cover.png
│
├── tests/
│
├── .gitignore
├── README.md
└── docker-compose.yml
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/shreya-hub423/ResQAI.git
cd ResQAI
```

## 2. Backend

```bash
cd backend

python -m venv .venv
```

### Windows

```powershell
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run:

```bash
uvicorn app.main:app --reload
```

---

## 3. Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file based on `.env.example`.

```env
DATABASE_URL=
LLM_API_KEY=
WEATHER_API_KEY=
MAP_API_KEY=
```

⚠️ **Never commit real API keys to GitHub.**

---

# 🧪 Testing

Backend:

```bash
pytest
```

Frontend:

```bash
npm run build
```

---

# 🗺️ Roadmap

### Phase 1 — Prototype

* [x] Concept
* [x] System architecture
* [x] UI prototype
* [x] Disaster-response workflow

### Phase 2 — Intelligence

* [ ] Live satellite pipeline
* [ ] Advanced computer vision
* [ ] Dynamic geospatial risk engine
* [ ] RAG knowledge system

### Phase 3 — Operations

* [ ] Multi-agency coordination
* [ ] Responder mobile interface
* [ ] Offline-first capabilities
* [ ] Real-time field updates

### Phase 4 — Expansion

* [ ] Flood
* [ ] Cyclone
* [ ] Earthquake
* [ ] Landslide
* [ ] Wildfire
* [ ] Urban emergencies

---

# 📈 Measuring Impact

Rather than using unverified claims, ResQAI can eventually be evaluated using measurable indicators such as:

* Response prioritization time
* Incident verification time
* Route planning time
* Resource allocation efficiency
* Report classification quality
* False-positive rate
* Recommendation confidence
* Human acceptance rate

---

# 📸 Project Preview

<p align="center">
  <img src="docs/resqai-cover.png" alt="ResQAI Project Preview" width="95%">
</p>

---

# 👥 Team TechMinds

| Member              |
| ------------------- |
| **Salonika Tiwari** |
| **Shreya Pal**      |
| **Rajni Pal**       |
| **Saina Singh**     |

### 🏫 Maharana Pratap Engineering College, Kanpur

### 🏆 Build with भारत 2.0 — National Level Hackathon

---

# 🔗 Project Links

### GitHub

[https://github.com/shreya-hub423/ResQAI](https://github.com/shreya-hub423/ResQAI)

### Live Demo

`Coming Soon`

### Demo Video

`Coming Soon`

### Presentation

`Coming Soon`

---

# 🌱 Future Vision

ResQAI's long-term vision is to become a **unified intelligence layer for emergency response**.

From:

**Data**

to

**Understanding**

to

**Prioritization**

to

**Action**

to

**Resilience**

---

# 🏆 Our Vision

> ## **When disaster strikes, information is everywhere. ResQAI helps turn it into action.**

### **SEE → THINK → PRIORITIZE → ACT**

**ResQAI — AI Disaster Response Copilot**

*Smarter AI. Faster Response. Safer Lives.*
