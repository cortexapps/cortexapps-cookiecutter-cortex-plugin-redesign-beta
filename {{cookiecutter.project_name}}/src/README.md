# Getting Started with the Cortex Plugin Sample

Welcome! This sample plugin demonstrates a full “batteries included” Cortex plugin setup including routing, theming, UI components, context hooks, and request proxy. Use it as a starting point for your own plugin development.

## 🚀 What’s Inside

The plugin ships with five example tabs:

1. **Components**
  Demonstrates the ready-to-use UI components included in `@cortexapps/react-plugin-ui`.

2. **Context** Shows your current plugin context via the `usePluginContextProvider` hook (entity info, user info, theme, and more; available from the `PluginContextProvider` component).
  Shows your current plugin context via the `usePluginContextProvider` hook (entity info, user info, theme, and more; available from the `PluginContextProvider` component).

3. **Entity**  
  Renders details for the current entity:  
  - Descriptor from the `useEntityDescriptor` hook
  - Custom data from the `useEntityCustomData` hook
  - Custom events from the `useEntityCustomEvents` hook

4. **Colors**  
  Generates swatches of the theme variables applied by `<PluginStyler>` (supports light mode and dark mode).

5. **Proxy**  
  A simple REST fetch tester that makes requests through your plugin proxy, for trying out backend endpoints.

## 📁 Code Layout

- **Build target**  
  Webpack is preconfigured to bundle everything into `dist/ui.html` — you’ll see module-size warnings during build; you can ignore them, as they don’t affect this environment.

- **Tests**  
  Jest is already set up for component testing. See `src/App.test.tsx` for a minimal example.

- **Plugin Initialization**  
  index.tsx calls the init hook as early as possible to avoid a flash:
  ```ts
  // src/index.tsx
  import App from "./components/App";
  import { CortexApi } from "@cortexapps/plugin-core";

  document.addEventListener("DOMContentLoaded", function () {
    CortexApi.pluginInit();

    const container = document.getElementById("cortex-plugin-root");
    const root = createRoot(container!);
    root.render(<App />);
  });
  ```

- **Plugin Shell**  
  The `<App>` component is wrapped in `<RoutingPluginProvider>`:
  ```tsx
  // src/components/App.tsx
  import type React from "react";

  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import PluginProvider from "./RoutingPluginProvider";
  import ErrorBoundary from "./ErrorBoundary";
  import AppTabs from "./AppTabs";

  import "../baseStyles.css";

  const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <PluginProvider enableRouting initialEntries={["/basic"]}>
            <AppTabs />
          </PluginProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    );
  };

  export default App;
  ```

  The routing plugin provider includes:  
  - `<PluginRouter>`, which wraps React Router and persists URLs in the query string — supports deep links via `useLocation` and `useNavigate`. Routing functionality in the plugin provider is turned on when you provide the `enableRouting` and `initialEntries` props.
  - `<PluginStyler>`, which injects theme CSS variables into the iframe’s docuemnt element.
  - `<PluginContextProvider>`, which exposes `usePluginContext()` for entity, user, theme, and other plugin context.

## 💻 Recommended Development Workflow

1. **Build the sample**  
   ```bash
   yarn && yarn build
   ```
   This produces `dist/ui.html`.

2. **Register and upload**  
   - Create a draft plugin in Cortex.  
   - Upload `dist/ui.html` as the plugin bundle.

3. **Run the dev server locally**  
   ```bash
   yarn dev
   ```
   This starts a live-reload server for rapid iteration.

4. **Enable dev mode**  
   In the plugin settings, enable **Dev Mode** so Cortex loads from your local server instead of the published bundle.

5. **Add your component**  
   - Create a new file under `src/components/`.  
   - Add a tab in `src/AppTabs.tsx`:
    ```tsx
    import MyNewComponent from './components/MyNewComponent';

    const tabs = [
      { path: '/new', label: 'New', element: <MyNewComponent /> },
      ...
    ];
    ```

6. **Develop and test**  
   - Build your component using the information in the **Components**, **Context**, **Entity**, and **Proxy** tabs.
   - Write Jest tests alongside your components, named as `Name.test.tsx`

7. **Cleanup**
   Before release, remove any sample tabs you don’t need. If your plugin is single-page, mount your main component directly under `<App>`.

---

Happy coding! 🎉
