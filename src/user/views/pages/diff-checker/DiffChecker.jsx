import React, { useEffect, useRef, useState } from "react";
import ReactDiffViewer from "react-diff-viewer";
import "@assets/scss/pages/_diff-checker.scss";

const resizeTextarea = (element) => {
  if (!element) return;
  element.style.height = "0";
  element.style.height = `${element.scrollHeight}px`;
};

const DiffChecker = () => {
  const [originalText, setOriginalText] = useState("");
  const [modifiedText, setModifiedText] = useState("");
  const outputRef = useRef(null);
  const originalRef = useRef(null);
  const modifiedRef = useRef(null);

  const scrollToOutput = () => {
    requestAnimationFrame(() => {
      outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleReset = () => {
    setOriginalText("");
    setModifiedText("");
  };

  const hasOriginal = Boolean(originalText.trim());
  const hasModified = Boolean(modifiedText.trim());
  const showOutput = hasOriginal && hasModified;
  const hasAnyContent = hasOriginal || hasModified;

  useEffect(() => {
    const resizeAll = () => {
      resizeTextarea(originalRef.current);
      resizeTextarea(modifiedRef.current);
    };
    resizeAll();
    requestAnimationFrame(resizeAll);
  }, [originalText, modifiedText, showOutput]);

  const sampleOriginal = `Hello World
    This is the original text.
    React is awesome.
    Diff checker helps compare content.`;

  const sampleModified = `Hello World
    This is the updated text.
    React is amazing.
    Diff checker helps compare text easily.`;

  return (
    <div className="diff-checker-page">
      <div className="diff-checker-inner">
        <div className="diff-checker-toolbar">
          <div className="diff-checker-toolbar-actions">
            <button
              type="button"
              className="diff-checker-btn diff-checker-btn-primary"
              onClick={scrollToOutput}
              disabled={!showOutput}
              title={
                showOutput
                  ? "Scroll to the diff output"
                  : "Add text to both panels first"
              }
            >
              Check diff
            </button>
            <button
              type="button"
              className="diff-checker-btn diff-checker-btn-ghost"
              onClick={handleReset}
              disabled={!hasAnyContent}
              title="Clear both inputs and start a new compare"
            >
              Reset
            </button>
          </div>
          <span className="diff-checker-toolbar-hint">
            {showOutput
              ? "Diff is ready below — scroll down or click Check diff."
              : "Paste text in both Original and Modified to see the diff."}
          </span>
        </div>

        <div
          className={`diff-checker-layout${showOutput ? " has-output" : ""}`}
        >
          <section
            className={`diff-checker-panel${hasOriginal ? " has-content" : ""}`}
            aria-label="Original text"
          >
            <div className="diff-checker-panel-head">
              <h2 className="diff-checker-panel-title">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
                Original Text
              </h2>
              <span className="diff-checker-panel-meta">
                {hasOriginal ? (
                  <span className="diff-checker-status is-ready">Ready</span>
                ) : (
                  <span className="diff-checker-status">Empty</span>
                )}
                <span className="diff-checker-char-count">
                  {originalText.length} chars
                </span>
              </span>
            </div>

            <div className="diff-checker-panel-body">
              <textarea
                ref={originalRef}
                value={originalText}
                onChange={(e) => {
                  setOriginalText(e.target.value);
                  resizeTextarea(e.target);
                }}
                className="diff-checker-textarea"
                placeholder={`Paste original text here...

Example:
${sampleOriginal}`}
              />
            </div>
          </section>

          <section
            className={`diff-checker-panel${hasModified ? " has-content" : ""}`}
            aria-label="Modified text"
          >
            <div className="diff-checker-panel-head">
              <h2 className="diff-checker-panel-title">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
                Modified Text
              </h2>
              <span className="diff-checker-panel-meta">
                {hasModified ? (
                  <span className="diff-checker-status is-ready">Ready</span>
                ) : (
                  <span className="diff-checker-status">Empty</span>
                )}
                <span className="diff-checker-char-count">
                  {modifiedText.length} chars
                </span>
              </span>
            </div>

            <div className="diff-checker-panel-body">
              <textarea
                ref={modifiedRef}
                value={modifiedText}
                onChange={(e) => {
                  setModifiedText(e.target.value);
                  resizeTextarea(e.target);
                }}
                className="diff-checker-textarea"
                placeholder={`Paste modified text here...

Example:
${sampleModified}`}
              />
            </div>
          </section>

          {showOutput && (
            <section
              ref={outputRef}
              className="diff-checker-panel diff-checker-output-panel"
              aria-label="Diff output"
            >
              <div className="diff-checker-panel-head">
                <h2 className="diff-checker-panel-title">
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
                  Diff Output
                </h2>
                <div className="diff-checker-panel-head-actions">
                  <span className="diff-checker-panel-meta">
                    Side by Side Comparison
                  </span>
                  <button
                    type="button"
                    className="diff-checker-btn diff-checker-btn-panel-reset"
                    onClick={handleReset}
                    title="Clear inputs and start a new compare"
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div className="diff-checker-panel-body">
                <div className="diff-checker-viewer-box">
                  <ReactDiffViewer
                    oldValue={originalText}
                    newValue={modifiedText}
                    splitView={true}
                    showDiffOnly={true}
                    useDarkTheme={false}
                  />
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiffChecker;
