import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import { FooProvider } from "./foo-context.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Hypothetical App.js file existing, I've only laid out the React skeleton for this.

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
