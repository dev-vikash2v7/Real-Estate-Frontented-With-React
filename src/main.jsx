import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BASE_URL } from "./config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-0tg7d6jf1g8rypyh.us.auth0.com"
     clientId="ZS5yydiCok2Ten898tOMlmmmR2kViX9q"
     authorizationParams={{
      redirect_uri: 'http://127.0.0.1:5173/'
     }}
     audience= 'http://localhost:3000'
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
// CM67GE88ET8LFAZT1Y1ULDVK