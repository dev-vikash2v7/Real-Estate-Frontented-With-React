import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-0tg7d6jf1g8rypyh.us.auth0.com"
     clientId="8VhM2ZYtBsF97ORAjzrD5DtLSDG1xWqB"
     authorizationParams={{
      redirect_uri: window.location.origin
     }}
     audience="http://localhost:3000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
// CM67GE88ET8LFAZT1Y1ULDVK