import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, CookieConsent } from "./components";
import { Home, ComingSoon } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </Layout>
      <CookieConsent />
    </Router>
  );
}

export default App;
