import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FormProvider } from "./feature/contextAPI/FormContext.jsx";

//////////// Syncfusion styles///////////

////// grids
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
// import " @syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-splitbuttons/styles/material.css";
import "@syncfusion/ej2-notifications/styles/material.css";
import "@syncfusion/ej2-react-grids/styles/material.css";

////// base and buttons
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-navigations/styles/material.css";
import "@syncfusion/ej2-react-buttons/styles/material.css";
import { enableRtl } from "@syncfusion/ej2-base";

enableRtl(true);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </StrictMode>
);
