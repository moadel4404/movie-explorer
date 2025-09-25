import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import routes from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./auth-context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={routes} />
    </AuthContextProvider>
  </StrictMode>
);





