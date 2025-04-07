import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>All-in-One Productivity Dashboard</h1>
          <p>
            Manage tasks, plan your day, track projects, write blogs, and run
            your e-commerce — all in one place.
          </p>
          <button className="cta-button" onClick={() => navigate("/login")}>Go to Dashboard</button>
        </div>
      </section>

      <section className="features-section">
        <h2>What's Inside?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📌 Kanban Board</h3>
            <p>
              Track your workflow visually with drag-and-drop task management.
            </p>
          </div>
          <div className="feature-card">
            <h3>✅ To-do List</h3>
            <p>Stay on top of your daily tasks with smart to-do integration.</p>
          </div>
          <div className="feature-card">
            <h3>📅 Calendar</h3>
            <p>
              Organize your events and meetings efficiently with a powerful
              calendar.
            </p>
          </div>
          <div className="feature-card">
            <h3>🛍️ Products</h3>
            <p>Manage and showcase your e-commerce inventory with style.</p>
          </div>
          <div className="feature-card">
            <h3>✍️ Blog Manager</h3>
            <p>Create and manage your content with a built-in blog editor.</p>
          </div>
          <div className="feature-card">
            <h3>👤 User Profile</h3>
            <p>Manage your profile proper profile documentation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
