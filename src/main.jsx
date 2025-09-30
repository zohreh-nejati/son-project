import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-navigations/styles/material.css";
import "@syncfusion/ej2-react-buttons/styles/material.css";

// import "@syncfusion/ej2-base/styles/material.css";
// import "@syncfusion/ej2-react-navigations/styles/material.css";
import "./index.css";

//////////// Syncfusion styles///////////
import { registerLicense } from "@syncfusion/ej2-base";
// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1JFaF5cXGRCf1NpQHxbf1x1ZF1MY1hbR3JPMyBoS35Rc0VqW3deeHdRRWRbWUF2VEFc"
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
