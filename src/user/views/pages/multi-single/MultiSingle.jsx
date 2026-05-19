import React, { useEffect, useState } from "react";
import "@assets/scss/pages/_multi-single.scss";
import toast, { Toaster } from "react-hot-toast";
import { getLocalStorage, setLocalStorage } from "@utils/localstorage.util.js";

const MULTI_SINGLE = "multi-single";

const MultiSingle = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    const converted = value
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .join(" ");

    setOutputText(converted);
    setLocalStorage(MULTI_SINGLE, converted);
  };

  const handleCopy = async () => {
    if (!outputText) return;
    await navigator.clipboard.writeText(outputText);
    toast.success("Copied!");
  };

  useEffect(() => {
    const value = getLocalStorage(MULTI_SINGLE);
    setOutputText(value);
  }, []);

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="multi-single-page">
        <div className="multi-single-inner">
          <div className="multi-single-layout">
            {/* Input Panel */}
            <section className="panel" aria-label="Multi line input">
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
                    <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                  </svg>
                  Input Text
                </h2>
                <span className="panel-meta">Paste • Type • Convert</span>
              </div>

              <div className="panel-body">
                <textarea
                  value={inputText}
                  onChange={handleInputChange}
                  className="multi-single-input"
                  placeholder={`Paste multiple lines here…

Example:
Hello World
This is line two
This is line three`}
                />
              </div>
            </section>

            {/* Output Panel */}
            <section className="panel" aria-label="Single line output">
              <div className="panel-head">
                <h2 className="panel-title">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M3 12h18" />
                    <path d="M15 6l6 6-6 6" />
                  </svg>
                  Single Line Output
                </h2>
                <span className="panel-meta">Converted • Ready to Copy</span>
              </div>

              <div className="panel-body">
                <button
                  type="button"
                  className="copy-btn"
                  onClick={handleCopy}
                  disabled={!outputText}
                >
                  Copy Output
                </button>

                <div className="viewer-box">
                  {outputText ? (
                    <pre className="codeblock">{outputText}</pre>
                  ) : (
                    <pre className="codeblock">
                      {`Hello World This is line two This is line three`}
                    </pre>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiSingle;
