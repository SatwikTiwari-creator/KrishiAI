# Kisan Hit - AI-Powered Smart Farming Platform

Kisan Hit is a production-ready, full-stack smart farming web application designed to empower farmers with cutting-edge artificial intelligence tools. It features **Crop Health Scanning, Plant Disease Detection, Soil Analysis, Live Mandi Prices, Weekly AI Price Forecasting, and a Multilingual Agronomy Chatbot (Kisan Mitra)**.

---

## 🏗️ Repository Architecture & File Tree

```text
kisan-hit-monorepo/
├── package.json
├── docker-compose.yml
├── README.md
├── backend/
│   ├── package.json
│   ├── Dockerfile
│   ├── server.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Crop.js
│   │   └── MarketPrice.js
│   └── routes/
│       ├── auth.js
│       ├── crops.js
│       ├── market.js
│       └── ai.js
└── frontend/
    ├── package.json
    ├── Dockerfile
    ├── index.html
    └── src/
        ├── main.jsx
        ├── index.css
        └── App.jsx
```

---

## 🚀 Quick Start & Installation

### Option 1: Run Locally (Development)

1. **Install all workspace dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start the Backend Server:**
   ```bash
   npm run dev:backend
   ```

3. **Start the Frontend Development Server:**
   ```bash
   npm run dev:frontend
   ```

### Option 2: Run via Docker Compose (Production Ready)

```bash
docker-compose up --build
```

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Check API server status |
| `POST` | `/api/auth/register` | Register a new farmer account |
| `POST` | `/api/auth/login` | Authenticate farmer login |
| `GET` | `/api/crops/:userId` | Fetch registered crops for a user |
| `POST` | `/api/crops/scan-disease`| AI plant disease scanner & remedy recommendation |
| `GET` | `/api/market` | Live mandi prices and weekly AI price forecast |
| `POST` | `/api/ai/chat` | Multilingual Kisan Mitra AI agricultural chatbot |