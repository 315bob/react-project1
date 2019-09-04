import React from "react";
import "./App.css";
import Auth from "./components/auth/Auth";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
}

export default App;
