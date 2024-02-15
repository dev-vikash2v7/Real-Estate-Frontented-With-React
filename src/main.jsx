import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { BASE_URL  } from "./config";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-0tg7d6jf1g8rypyh.us.auth0.com"
     clientId="ZS5yydiCok2Ten898tOMlmmmR2kViX9q"
     authorizationParams={{
      redirect_uri: window.location.origin
     }}
     audience  = {process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://eazyhome-backend.vercel.app'}

     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);