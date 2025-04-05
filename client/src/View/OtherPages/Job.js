import React from "react";
import "./common.css"; // Make sure this CSS is created

const Job = () => {
  return (
    <div className="job-page">
      <section className="job-hero">
        <h1>Join Our Team</h1>
        <p>
          We’re building tools that make a difference. Come be part of something
          great.
        </p>
      </section>

      <section className="job-values">
        <h2>Why Work With Us?</h2>
        <div className="job-values-grid">
          <div className="value-card">
            <h4>Innovative Projects</h4>
            <p>
              Work on cutting-edge solutions like Kanban boards, task managers,
              eCommerce systems, and more.
            </p>
          </div>
          <div className="value-card">
            <h4>Collaborative Culture</h4>
            <p>
              Our teams work closely, communicate openly, and support one
              another at every step.
            </p>
          </div>
          <div className="value-card">
            <h4>Remote Flexibility</h4>
            <p>
              We offer flexible work arrangements so you can work from where
              you're most productive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Job;
