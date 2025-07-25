import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional: if you have custom styling

// Backend API base URL: uses env variable if available, otherwise defaults to deployed URL
const BASE_URL = process.env.REACT_APP_API_URL || "https://week-7-devops-deployment-assignment-smek.onrender.com/api";

function App() {
  const [status, setStatus] = useState("Checking backend status...");
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    axios.get(`${BASE_URL}/healthz`)
      .then((response) => {
        setStatus(response.data.message || "Backend is healthy!");
        setTimestamp(new Date().toLocaleTimeString());
      })
      .catch((error) => {
        setStatus("❌ Backend is down or unreachable.");
        console.error("API error:", error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🚀 MERN Deployment Status</h1>
      <p style={styles.status}>{status}</p>
      {timestamp && <p style={styles.timestamp}>Last checked: {timestamp}</p>}
      <p style={styles.note}>
        Frontend is live on Vercel <br />
        Backend is hosted on Render
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    backgroundColor: '#1e1e1e',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  },
  status: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  timestamp: {
    color: '#aaa',
    fontSize: '0.9rem',
  },
  note: {
    marginTop: '3rem',
    fontSize: '1rem',
    color: '#888',
  },
};

export default App;
