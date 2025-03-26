import type React from "react";

export const BasicCards: React.FC = () => (
  <>
    <div className="card">
      <div className="card-header">Basic Elements Demo</div>
      <div className="card-body">
        <span>
          This is a card body. This description uses the default font size
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
  </>
);

export default BasicCards;