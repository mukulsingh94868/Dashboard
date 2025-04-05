import React from "react";
import "./common.css";

const About = () => (
  <div className="about-container">
    <section className="about-hero">
      <h1>About Our Dashboard</h1>
      <p>
        Your ultimate productivity hub — manage tasks, track goals, write blogs,
        and grow your business from a single interface.
      </p>
    </section>

    <section className="about-content">
      <div className="about-section">
        <h2>🚀 Our Mission</h2>
        <p>
          We're here to simplify your work life. Whether you're a student,
          developer, manager, or business owner — our dashboard offers tools to
          boost your productivity and keep everything organized.
        </p>
      </div>

      <div className="about-section">
        <h2>💡 Key Features</h2>
        <ul>
          <li>
            <strong>Kanban Board:</strong> Visualize tasks, track progress, and
            streamline your workflow.
          </li>
          <li>
            <strong>To-do List:</strong> Create, prioritize, and complete daily
            goals.
          </li>
          <li>
            <strong>Calendar:</strong> Schedule meetings and manage your time
            effectively.
          </li>
          <li>
            <strong>Product Management:</strong> List, update, and showcase your
            products effortlessly.
          </li>
          <li>
            <strong>Blog Module:</strong> Create and publish engaging content
            with ease.
          </li>
          <li>
            <strong>User Module:</strong> Manage all the users and their
            permissions.
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h2>👥 Meet the Team</h2>
        <p>
          We're a passionate group of developers and designers dedicated to
          building user-first, scalable tools for modern-day productivity.
        </p>
      </div>
    </section>
  </div>
);

export default About;
