import React from "react";
import jsonIcon from "@assets/icons/json.svg";
import { Link } from "react-router-dom";

const tools = [
  {
    id: "json",
    title: "JSON Viewer & Formatter",
    description:
      "Paste or upload JSON, validate syntax, pretty-print with indentation, and explore the tree structure in a clear layout.",
    icon: (
      <img src={jsonIcon} alt="JSON Icon" />
    ),
  }
];

const Tools = () => {
  return (
    <>
      <style>{`
        .tools-page {
          --tools-bg: #121214;
          --tools-surface: #1a1a1f;
          --tools-border: rgba(255, 255, 255, 0.08);
          --tools-text: rgba(255, 255, 255, 0.92);
          --tools-muted: rgba(255, 255, 255, 0.58);
          --tools-accent: #01b78d;
          --tools-accent-soft: rgba(1, 183, 141, 0.15);
          --tools-glow: rgba(1, 183, 141, 0.35);

          min-height: 100vh;
          padding: 5.5rem 1.5rem 4rem;
          background: var(--tools-bg);
          background-image:
            radial-gradient(ellipse 80% 50% at 50% -20%, var(--tools-accent-soft), transparent),
            radial-gradient(ellipse 60% 40% at 100% 0%, rgba(104, 207, 170, 0.08), transparent);
          color: var(--tools-text);
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          box-sizing: border-box;
        }
        .tools-page *,
        .tools-page *::before,
        .tools-page *::after {
          box-sizing: border-box;
        }

        .tools-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .tools-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--tools-accent);
          margin-bottom: 0.75rem;
        }

        .tools-headline {
          font-size: clamp(1.85rem, 4vw, 2.5rem);
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 0.75rem;
          letter-spacing: -0.02em;
        }

        .tools-lead {
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--tools-muted);
          max-width: 36rem;
          margin: 0 0 2.75rem;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }

        .tool-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          width: 100%;
          padding: 1.5rem 1.5rem 1.6rem;
          border-radius: 14px;
          background: var(--tools-surface);
          border: 1px solid var(--tools-border);
          text-decoration: none;
          color: inherit;
          font: inherit;
          cursor: pointer;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
          overflow: hidden;
        }

        .tool-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--tools-accent-soft) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }

        .tool-card:hover {
          transform: translateY(-4px);
          border-color: rgba(1, 183, 141, 0.35);
          box-shadow: 0 16px 40px -20px var(--tools-glow);
        }

        .tool-card:hover::before {
          opacity: 1;
        }

        .tool-card:focus-visible {
          outline: 2px solid var(--tools-accent);
          outline-offset: 3px;
        }

        .tool-card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--tools-accent-soft);
          color: var(--tools-accent);
          margin-bottom: 1.1rem;
        }

        .tool-card-icon svg {
          width: 26px;
          height: 26px;
        }

        .tool-card-title {
          font-size: 1.15rem;
          font-weight: 600;
          margin: 0 0 0.5rem;
          position: relative;
        }

        .tool-card-desc {
          font-size: 0.9rem;
          line-height: 1.55;
          color: var(--tools-muted);
          margin: 0;
          flex-grow: 1;
        }

        .tool-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 1.25rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--tools-accent);
          position: relative;
        }

        .tool-card-cta svg {
          width: 14px;
          height: 14px;
          transition: transform 0.2s ease;
        }

        .tool-card:hover .tool-card-cta svg {
          transform: translateX(3px);
        }
      `}</style>

      <div className="tools-page">
        <div className="tools-inner">
          <header>
            <span className="tools-eyebrow">Utilities</span>
            <h1 className="tools-headline">Tools</h1>
            <p className="tools-lead">
              Small, focused utilities for working with data and code in the browser. Pick a tool below
              to open it when available.
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
                    Open tool
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Tools;
