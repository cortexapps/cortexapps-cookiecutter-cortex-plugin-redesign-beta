import type React from "react";

import { PluginContextProvider } from "./PluginContextProvider";
import PluginRouter from "./PluginRouter";
import PluginStyler from "./PluginStyler";

interface RoutingPluginProviderProps {
  cssUrl?: string;
  children: React.ReactNode;
  enableRouting?: boolean;
  initialEntries?: string[];
}

export const RoutingPluginProvider: React.FC<RoutingPluginProviderProps> = ({
  children,
  enableRouting,
  initialEntries,
}) => {
  return (
    <PluginContextProvider>
      <PluginStyler>
        {enableRouting ? (
          <PluginRouter initialEntries={initialEntries || []}>
            {children}
          </PluginRouter>
        ) : (
          children
        )}
      </PluginStyler>
    </PluginContextProvider>
  );
};

export default RoutingPluginProvider;
