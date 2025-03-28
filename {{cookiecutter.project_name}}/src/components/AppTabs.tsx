import type React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { Tabs } from "radix-ui";

import BasicCards from "./BasicCards";
import PluginContext from "./PluginContext";
import EntityDetails from "./EntityDetails";
import ColorSwatches from "./ColorSwatches";
import ProxyTest from "./ProxyTest";

import "../baseStyles.css";

interface TabRoute {
  label: string;
  path: string;
  element: JSX.Element;
}

export const AppTabs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabRoutes: TabRoute[] = [
    { label: "Basic", path: "/basic", element: <BasicCards /> },
    { label: "Context", path: "/context", element: <PluginContext /> },
    { label: "Entity", path: "/entity", element: <EntityDetails /> },
    { label: "Colors", path: "/colors", element: <ColorSwatches /> },
    { label: "Proxy", path: "/proxy", element: <ProxyTest /> },
  ];

  const handleTabsChange = (value: string) => {
    navigate(value);
  };

  return (
    <Tabs.Root className="tab-root" onValueChange={handleTabsChange} defaultValue={location.pathname}>
      <Tabs.List className="tab-list">
        {tabRoutes.map((route, index) => (
          <Tabs.Trigger className="tab-trigger" key={index} value={route.path}>{route.label}</Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabRoutes.map((route, index) => (
        <Tabs.Content className="tab-content" style={ {minHeight: "100%"} } key={index} value={route.path}>{route.element}</Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

export default AppTabs;