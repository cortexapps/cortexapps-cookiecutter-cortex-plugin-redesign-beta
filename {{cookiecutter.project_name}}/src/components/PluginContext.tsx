import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@cortexapps/react-plugin-ui";
import { usePluginContextProvider } from "./PluginContextProvider";
import type React from "react";

const PluginContext: React.FC = () => {
  const context = usePluginContextProvider();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Plugin Context</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          Below is the plugin context object. This object is returned from the
          usePluginContextProvider hook available in the PluginContextProvider
          component.
        </div>
        <div>
          <pre>{JSON.stringify(context, null, 2)}</pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default PluginContext;
