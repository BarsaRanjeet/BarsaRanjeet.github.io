import React, { useEffect } from "react";
import JsonView from "@uiw/react-json-view";
import { useState } from "react";
import { TriangleSolidArrow } from "@uiw/react-json-view/triangle-solid-arrow";
import "@assets/scss/pages/_json.scss";
import { validateJsonParse } from "@utils/json.util.js";
import toast, { Toaster } from "react-hot-toast";

const Json = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [jsonRawInput, setJsonRawInput] = useState("");
  const [valid, setValid] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setJsonRawInput(inputValue);
    const { value, isValid } = validateJsonParse(inputValue);
    if (isValid) {
      setValid(true);
      setJsonInput(value);
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    const checkValid = () => {
      if (jsonRawInput) {
        const { isValid, error } = validateJsonParse(jsonRawInput);
        if (!isValid) {
          toast.error(error);
        }
      }
    };

    const timeout = setTimeout(checkValid, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [jsonRawInput]);

  return (
    <>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
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
                {jsonRawInput ? (
                  <span
                    className={valid ? "panel-meta-green" : "panel-meta-red"}
                  >
                    Paste • Upload • Validate
                  </span>
                ) : (
                  <span className="panel-meta">Paste • Upload • Validate</span>
                )}
              </div>
              <div className="panel-body">
                <textarea
                  onChange={handleInputChange}
                  className="json-input"
                  placeholder={`Paste your JSON here…\n\nExample:\n{\n  "name": "Ranjeet",\n  "skills": ["Python", "Node.js", "React"],\n  "active": true\n}`}
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
                      <JsonView
                        value={jsonInput}
                        displayDataTypes={false}
                        shortenTextAfterLength={false}
                      >
                        <JsonView.Arrow>
                          <TriangleSolidArrow />
                        </JsonView.Arrow>
                      </JsonView>
                    ) : (
                      <div aria-label="Formatted JSON">
                        <pre className="codeblock">{`{\n  "name": "Ranjeet",\n  "skills": [\n    "Python",\n    "Node.js",\n    "React"\n  ],\n  "active": true\n}`}</pre>
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
