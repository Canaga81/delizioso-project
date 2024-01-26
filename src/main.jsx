import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//! Auth Provider
import { Auth0Provider } from "@auth0/auth0-react";

//! Sidebar Provider
import SidebarProvider from "./Context/SidebarContext.jsx";

//! Cart Provider
import CartProvider from "./Context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
    <Auth0Provider
      domain="dev-u0wqk0qvtcohdwxd.us.auth0.com"
      clientId="E3sVyUNwXxq9nrmviYqqWpCGZr2xzn2z"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
    </CartProvider>
  </SidebarProvider>
);