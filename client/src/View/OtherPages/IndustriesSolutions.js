import React from "react";
// import "./common.css";

const IndustriesSolutions = () => (
  <div className="industries-container">
    <section className="industries-hero">
      <h1>Industries & Solutions</h1>
      <p>
        Empowering teams across industries with smart productivity tools and
        tailored business solutions.
      </p>
    </section>

    <section className="industry-grid">
      <div className="industry-card">
        <h2>📦 E-commerce</h2>
        <p>
          Manage products, track orders, and drive customer engagement with
          powerful dashboards.
        </p>
      </div>
      <div className="industry-card">
        <h2>💼 Project Management</h2>
        <p>
          Use our Kanban boards, to-do lists, and calendars to streamline
          complex workflows.
        </p>
      </div>
      <div className="industry-card">
        <h2>🧠 Education</h2>
        <p>
          Create tasks, share blogs, and organize course schedules in one
          integrated workspace.
        </p>
      </div>
      <div className="industry-card">
        <h2>🏥 Healthcare</h2>
        <p>
          Manage appointments, records, and team collaboration securely and
          efficiently.
        </p>
      </div>
      <div className="industry-card">
        <h2>🎨 Creatives & Agencies</h2>
        <p>
          From content planning to client collaboration, simplify creative
          project tracking.
        </p>
      </div>
      <div className="industry-card">
        <h2>📊 Startups</h2>
        <p>
          Track your KPIs, roadmap, and daily goals with a single, elegant
          dashboard system.
        </p>
      </div>
    </section>

    <section className="solutions-section">
      <h2>💡 Our Solutions</h2>
      <ul>
        <li>✔️ All-in-one Productivity Suite</li>
        <li>✔️ Customizable Dashboards per Team</li>
        <li>✔️ Easy Integration with Tools like Slack, Google Calendar</li>
        <li>✔️ Real-time Collaboration & Notifications</li>
        <li>✔️ Advanced Task & Project Analytics</li>
      </ul>
    </section>
  </div>
);

export default IndustriesSolutions;
