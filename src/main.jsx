import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import { BrowserRouter } from "react-router-dom";
import { BrandsProvider } from "./context/brandscontext.jsx";
import { ShopUsProvider } from "./context/shopuscontext.jsx";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/playfair-display";
import "@fontsource/great-vibes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopUsProvider>
    <BrandsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BrandsProvider>
  </ShopUsProvider>
);
