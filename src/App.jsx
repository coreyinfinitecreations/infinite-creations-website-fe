import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, CookieConsent } from "./components";
import { Home, ComingSoon, ViewOurWork, GetStarted, About, Privacy, Terms } from "./pages";
import "./App.css";
import ClientPortal from "./pages/ClientPortal";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/client" element={<ClientPortal />} />
          <Route path="/client/login" element={<ClientPortal />} />
          <Route path="/client/reset-password" element={<ClientPortal />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<ViewOurWork />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </Layout>
      <CookieConsent />
    </Router>
  );
}

export default App;
