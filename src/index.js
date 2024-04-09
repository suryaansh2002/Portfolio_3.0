import React, { useState } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import SkillsPage from "./Components/SkillsPage/SkillsPage";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import Ridecell from "./WorkPages/Ridecell/Ridecell";
import Apt from "./WorkPages/APT/Apt";
import Santanet from "./WorkPages/Santanet/Santanet";
import Pefo from "./WorkPages/PEFO/Pefo";
import Moneyflo from "./WorkPages/Moneyflo/Moneyflo";
import About from "./Components/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="ridecell" element={<Ridecell />} />
      <Route path="apt" element={<Apt />} />
      <Route path="santanet" element={<Santanet />} />
      <Route path="pefo" element={<Pefo />} />
      <Route path="moneyflo" element={<Moneyflo />} />


      {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
        </Route> */}
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
);
