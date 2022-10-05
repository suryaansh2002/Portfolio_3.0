import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import SkillsPage from './Components/SkillsPage/SkillsPage';
import Landing from './Components/Landing/Landing';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import Ridecell from './WorkPages/Ridecell/Ridecell';
import Apt from './WorkPages/APT/Apt';
import Santanet from './WorkPages/Santanet/Santanet';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path='skills' element={<SkillsPage/>}/>
      <Route path='projects' element={<ProjectsPage/>}/>
      <Route path='ridecell' element={<Ridecell/>}/>
      <Route path='apt' element={<Apt/>}/>
      <Route path='santanet' element={<Santanet/>}/>


        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
        </Route> */}
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
);

