import React from "react";
import ReactDOM from "react-dom";

import Providers from "./providers";

ReactDOM.render(  // Renderização dos dados na div root do index.html
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById("root")
);
