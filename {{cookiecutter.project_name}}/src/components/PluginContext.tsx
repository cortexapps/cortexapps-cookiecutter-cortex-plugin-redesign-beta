import { usePluginContextProvider } from "./PluginContextProvider";
import type React from "react";

const PluginContext: React.FC = () => {
  const context = usePluginContextProvider();

  return (
    <div className="card">
      <div className="card-header">Plugin Context</div>
      <div className="card-body">
        Below is the plugin context object. This object is returned from the usePluginContextProvider hook available in the PluginContextProvider component.
      </div>
      <div className="card-body">
        <pre>{JSON.stringify(context, null, 2)}</pre>
      </div>
    </div>
  );
};

export default PluginContext;
