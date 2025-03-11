import type React from "react";
import { PluginProvider } from "@cortexapps/plugin-core/components";
import { CortexApi } from "@cortexapps/plugin-core";
import "../baseStyles.css";
import ErrorBoundary from "./ErrorBoundary";
import PluginContext from "./PluginContext";

// Initialize plugin for iframe style injection of theme CSS variables
CortexApi.pluginInit();

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <PluginProvider>
        <div className="card">
          <div className="card-header">My awesome plugin</div>
          <div className="card-body">
            <span>
              This is my card body. This description uses the default font size
              and line height but uses the secondary color.
            </span>
            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="example-input">
                  Example Input Label
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="example-input"
                  name="example-input"
                  placeholder="Type something..."
                />
                <span className="form-caption">
                  This is a helpful caption that provides more context about the
                  input field.
                </span>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <button className="primary-button button" type="button">
              Primary button
            </button>
            <button className="secondary-button button" type="button">
              Secondary button
            </button>
            <button className="danger-button button" type="button">
              Danger button
            </button>
            <button
              className="secondary-button button disabled"
              type="button"
              disabled
            >
              Disabled button
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Plugin context</div>
          <div className="card-body">
            <PluginContext />
          </div>
        </div>
        <div className="card">
          <div className="card-header">Theme variable swatches</div>
          <div className="card-body">
            <div className="swatch-container">
              <div>--cortex-plugin-background:</div>
              <div className="swatch swatch--cortex-plugin-background" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-foreground:</div>
              <div className="swatch swatch--cortex-plugin-foreground" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-primary:</div>
              <div className="swatch swatch--cortex-plugin-primary" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-secondary:</div>
              <div className="swatch swatch--cortex-plugin-secondary" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-muted:</div>
              <div className="swatch swatch--cortex-plugin-muted" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-accent:</div>
              <div className="swatch swatch--cortex-plugin-accent" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-accent:</div>
              <div className="swatch swatch--cortex-plugin-accent" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-destructive:</div>
              <div className="swatch swatch--cortex-plugin-destructive" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-destructive-foreground:</div>
              <div className="swatch swatch--cortex-plugin-destructive-foreground" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-border:</div>
              <div className="swatch swatch--cortex-plugin-border" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-input:</div>
              <div className="swatch swatch--cortex-plugin-input" />
            </div>
            <div className="swatch-container">
              <div>--cortex-plugin-ring:</div>
              <div className="swatch swatch--cortex-plugin-ring" />
            </div>
          </div>
        </div>
      </PluginProvider>
    </ErrorBoundary>
  );
};

export default App;
