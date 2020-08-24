import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./services/i18n";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);

serviceWorker.unregister();
