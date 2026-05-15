import React from "react";
import jsonIcon from "@assets/icons/json.svg";
import { Link } from "react-router-dom";
import "@assets/scss/pages/_tools.scss";
import rightDirectionIcon from "@assets/icons/right-direction.svg";

const tools = [
  {
    id: "json",
    title: "JSON Viewer & Formatter",
    description:
      "Paste JSON, validate syntax, pretty-print with indentation, and explore the tree structure in a clear layout.",
    icon: <img src={jsonIcon} alt="JSON Icon" />,
  },
];

const Tools = () => {
  return (
    <div className="tools-page">
      <div className="tools-inner">
        <header>
          <span className="tools-eyebrow">Utilities</span>
          <h1 className="tools-headline">Tools</h1>
          <p className="tools-lead">
            Small, focused utilities for working with data. (These are personal
            required tools for me that I normally use 🎅)
          </p>
        </header>

        <section aria-label="Available tools">
          <div className="tools-grid">
            {tools.map((tool) => (
              <Link to={tool.id} key={tool.id}>
                <button type="button" className="tool-card">
                  <span className="tool-card-icon">{tool.icon}</span>
                  <h2 className="tool-card-title">{tool.title}</h2>
                  <p className="tool-card-desc">{tool.description}</p>
                  <span className="tool-card-cta">
                    Open tool{" "}
                    <img src={rightDirectionIcon} alt="Right Direction Icon" />
                  </span>
                </button>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tools;
