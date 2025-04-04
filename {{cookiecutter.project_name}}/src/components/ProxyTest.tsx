import type React from "react";
import { useState, useMemo } from "react";

import { useCallback } from "react";

import { usePluginContextProvider } from "./PluginContextProvider";

import "../baseStyles.css";

export const ProxyTest: React.FC = () => {
  const {
    apiBaseUrl
  } = usePluginContextProvider();

  const [response, setResponse] = useState<object | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const errorText = useMemo(() => {
    if (!error) {
      return null;
    }
    try {
      return JSON.stringify(JSON.parse(error.message), null, 2);
    } catch (e) {
      return error.message;
    }
  }, [error]);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const url = formData.get("example-input") as string;
    setResponse(null);
    setError(null);
    console.log("fetching", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("got response", data);
        setResponse(data);
      })
      .catch((error) => {
        console.error("error fetching", error);
        setError(error);
      });
  }, []);

  return (
    <>
      <div className="card" style={{ height: "100%" }}>
        <div className="card-header">Proxy Test</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="example-input">
                URL
              </label>
              <input
                className="form-input"
                type="text"
                id="example-input"
                name="example-input"
                placeholder="Type a URL to fetch..."
                defaultValue={apiBaseUrl}
              />
              <span className="form-caption">
                Type a URL above to test the proxy. The response will be displayed
                below.
              </span>
              <button className="primary-button button" type="submit">
                Fetch
              </button>
            </div>
          </form>
        </div>
      </div>
      {response && (
        <div className="card">
          <div className="card-header">Response</div>
          <div className="card-body">
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        </div>
      )}
      {errorText && (
        <div className="card">
          <div className="card-header">Error</div>
          <div className="card-body">
            <pre>{errorText}</pre>
          </div>
        </div>
      )}
    </>
  );
};

export default ProxyTest;