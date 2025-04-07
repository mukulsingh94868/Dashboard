import React from "react";
import "./common.css";

const Resource = () => (
  <div className="resource-container">
    <section className="resource-hero">
      <h1>Resources</h1>
      <p>
        Your one-stop hub for learning, exploring, and mastering our
        productivity platform.
      </p>
    </section>

    <section className="resource-grid">
      <div className="resource-card">
        <h3>📚 Documentation</h3>
        <p>
          Explore comprehensive guides and API references to understand every
          feature in depth.
        </p>
        <a href="#">View Docs →</a>
      </div>
      <div className="resource-card">
        <h3>📰 Blogs</h3>
        <p>
          Stay updated with the latest articles, tips, and stories from our
          product team and users.
        </p>
        <a href="#">Read Blogs →</a>
      </div>
      <div className="resource-card">
        <h3>🎓 Tutorials</h3>
        <p>
          Step-by-step tutorials to help you set up projects, dashboards, and
          integrations easily.
        </p>
        <a href="#">Start Learning →</a>
      </div>
      <div className="resource-card">
        <h3>🎥 Video Walkthroughs</h3>
        <p>
          Watch how to get the most out of our features through curated
          walkthroughs and demos.
        </p>
        <a href="#">Watch Videos →</a>
      </div>
      <div className="resource-card">
        <h3>🛠️ Developer Tools</h3>
        <p>
          Access SDKs, CLI tools, and open-source libraries to build your custom
          workflows.
        </p>
        <a href="#">Explore Tools →</a>
      </div>
      <div className="resource-card">
        <h3>💬 Community & Support</h3>
        <p>
          Join our forum, connect with peers, and get expert support whenever
          you need it.
        </p>
        <a href="#">Join Now →</a>
      </div>
    </section>
  </div>
);

export default Resource;
