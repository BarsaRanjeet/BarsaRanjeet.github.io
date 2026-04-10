import React from "react";
import JsonView from "@uiw/react-json-view";
import { useState } from "react";

const Json = () => {
  const [jsonInput, setJsonInput] = useState("");

  const handleInputChange = (e) => {
    setJsonInput(JSON.parse(e.target.value));
  }

  return (
    <>
      <style>{`
        .json-page {
          --bg: #ffffff;
          --surface: #ffffff;
          --surface-2: #fafafa;
          --border: rgba(0, 0, 0, 0.22);
          --text: rgba(0, 0, 0, 0.92);
          --muted: rgba(0, 0, 0, 0.58);
          --accent: #111111;
          --accent-soft: rgba(0, 0, 0, 0.05);
          --shadow: rgba(0, 0, 0, 0.18);
          --header-bg: #111111;
          --header-text: #ffffff;
          --header-muted: rgba(255, 255, 255, 0.72);

          min-height: 100vh;
          min-height: 100dvh;
          height: 100vh;
          height: 100dvh;
          padding: 0.75rem 1rem 1rem;
          background: var(--bg);
          color: var(--text);
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          width: 100%;
          max-width: none;
        }
        .json-page *,
        .json-page *::before,
        .json-page *::after { box-sizing: border-box; }

        .json-inner {
          width: 100%;
          max-width: none;
          margin: 0;
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
        }

        .json-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.55fr) minmax(0, 1.45fr);
          gap: 1rem;
          margin-top: 0;
          align-items: stretch;
          flex: 1;
          min-height: 0;
          width: 100%;
          overflow: hidden;
        }

        .panel {
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 22px 60px -48px var(--shadow);
          min-height: 0;
          height: 100%;
          max-height: 100%;
          display: flex;
          flex-direction: column;
        }
        .panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.95rem 1rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.35);
          background: var(--header-bg);
          color: var(--header-text);
        }
        .panel-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.95rem;
          font-weight: 650;
          margin: 0;
        }
        .panel-title svg { width: 18px; height: 18px; color: var(--header-text); }
        .panel-meta {
          font-size: 0.8rem;
          color: var(--header-muted);
          white-space: nowrap;
        }

        .panel-body {
          padding: 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          overflow: hidden;
        }

        .json-input {
          width: 100%;
          flex: 1;
          min-height: 0;
          resize: none;
          padding: 0.95rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: var(--surface-2);
          color: var(--text);
          outline: none;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.9rem;
          line-height: 1.55;
          overflow: auto;
          overscroll-behavior: contain;
        }
        .json-input::placeholder { color: rgba(0,0,0,0.40); }

        .viewer-split {
          display: grid;
          grid-template-rows: auto 1fr;
          gap: 0.85rem;
          height: 100%;
        }

        .viewer-tabs {
          display: inline-flex;
          padding: 0.25rem;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.02);
          gap: 0.25rem;
        }
        .viewer-tab {
          padding: 0.45rem 0.7rem;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 650;
          color: var(--muted);
          border: 0;
          background: transparent;
          cursor: default;
        }
        .viewer-tab.active {
          color: var(--text);
          background: rgba(0, 0, 0, 0.06);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.14);
        }

        .viewer-box {
          border: 1px solid rgba(0, 0, 0, 0.12);
          background: var(--surface-2);
          border-radius: 12px;
          padding: 0.95rem 1rem;
          flex: 1;
          min-height: 0;
          overflow: auto;
          overscroll-behavior: contain;
        }

        .codeblock {
          margin: 0;
          white-space: pre;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(0,0,0,0.88);
        }

        .tree {
          list-style: none;
          padding-left: 0;
          margin: 0;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.88rem;
          line-height: 1.7;
          color: rgba(0,0,0,0.88);
        }
        .tree li { margin: 0.1rem 0; }
        .tree .k { color: rgba(0,0,0,0.86); }
        .tree .t { color: rgba(0,0,0,0.78); }
        .tree .v { color: rgba(0,0,0,0.62); }
        .tree .indent { padding-left: 1.05rem; border-left: 1px dashed rgba(0,0,0,0.16); margin-left: 0.35rem; }

        @media (max-width: 900px) {
          .json-layout {
            grid-template-columns: 1fr;
            grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
            overflow: hidden;
          }
          .panel { max-height: none; }
        }
      `}</style>

      <div className="json-page">
        <div className="json-inner">
          <div className="json-layout">
            <section className="panel" aria-label="JSON input">
              <div className="panel-head">
                <h2 className="panel-title">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M7 8h10M7 12h7M7 16h10" />
                    <path d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  </svg>
                  Input JSON
                </h2>
                <span className="panel-meta">Paste • Upload • Validate</span>
              </div>
              <div className="panel-body">
                <textarea
                  onChange={handleInputChange}
                  className="json-input"
                  placeholder={`Paste your JSON here…\n\nExample:\n{\n  "name": "Ranjeet",\n  "skills": ["Node.js", "React"],\n  "active": true\n}`}
                />
              </div>
            </section>

            <section className="panel" aria-label="JSON output viewer">
              <div className="panel-head">
                <h2 className="panel-title">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M12 2l10 6-10 6L2 8l10-6z" />
                    <path d="M2 16l10 6 10-6" />
                    <path d="M2 12l10 6 10-6" />
                  </svg>
                  Output
                </h2>
                <span className="panel-meta">Formatter • Viewer</span>
              </div>
              <div className="panel-body">
                <div className="viewer-box" aria-label="Viewer canvas">
                  <div style={{ display: "grid", gap: "0.9rem" }}>
                    {jsonInput ? (
                      <JsonView value={jsonInput} displayDataTypes={false} />
                    ) : (
                      <div aria-label="Formatted JSON">
                        <pre className="codeblock">{`{\n  "name": "Ranjeet",\n  "skills": [\n    "Node.js",\n    "React"\n  ],\n  "active": true\n}`}</pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Json;
