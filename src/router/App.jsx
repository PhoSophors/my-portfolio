import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../views/Home";
import Project from "../views/Project";
import Contact from "../views/Contact";
import Hero from "../views/Hero";
import Expertise from "../views/Expertise";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="hero" element={<Hero />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
