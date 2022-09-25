import React from "react";
import "./Projects.css";
import psychup from "../../Assets/Skills/psych.png";
import datagrad from "../../Assets/Skills/datagrad.png";
import decrypt from "../../Assets/Skills/decrypt.png";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { HiGlobeAlt } from "react-icons/hi";
export default function Projects() {
  return (
    <div className="projects_main">
      <div className="projects_header" id="projects">
        My Projects
      </div>
      <div className="morep"><a href="/projects">More Projects...</a></div>
      <div className="card_c">
          {/*Psychup */}
          <div className="mainc">
        <div className="proj_card">
          <img src={psychup} className="proj_img"></img>
          <div className="proj_title">Psychup</div>
          <div className="proj_text">
            It is a project aims to increase knowledge and awareness regarding mental health in India.
          </div>
          <div className="icons_c">
            <a href='https://github.com/suryaansh2002/psychup'><AiFillGithub className="picon" /></a>
            <a href='https://www.psychup.org.in/'><HiGlobeAlt className="picon" /></a>
            <a href='https://instagram.com/psychup_org'><AiFillInstagram className="picon" /></a>
          </div>
        </div>
        <div className="inner_card"></div>
      </div>

      {/*Datagrad */}

      <div className="mainc">
        <div className="proj_card">
          <img src={datagrad} className="proj_img"></img>
          <div className="proj_title">DataGrad</div>
          <div className="proj_text">
            It aims to bridge the gap between top MOOCs like Coursera,
            and students eager to learn new skills.
          </div>
          <div className="icons_c2">
            <a href='https://github.com/suryaansh2002/datagrad'><AiFillGithub className="picon" /></a>
            <a href='https://datagrad.netlify.app/'><HiGlobeAlt className="picon" /></a>
          </div>
        </div>
        <div className="inner_card"></div>
      </div>
     
      {/*Decrypt */}
      
      <div className="mainc">
        <div className="proj_card">
          <img src={decrypt} className="proj_img"></img>
          <div className="proj_title">Decrypt</div>
          <div className="proj_text">
           A website for an annual online cryptic hunt competition conducted by IEEE SBM, with over 500 participants.
          </div>
          <div className="icons_c2">
            <a href='https://github.com/suryaansh2002/d3crypt_backend'><AiFillGithub className="picon" /></a>
            <a href='https://d3crypt.ieeemanipal.com/'><HiGlobeAlt className="picon" /></a>
          </div>
        </div>
        <div className="inner_card"></div>
      </div>
      </div>
      {/*
       DataGrad
       Psychup
       Decrypt
       Atlantis
       Ecommerce
       Chatify
       Discussion room django
       To do
       Quiz app TS
       Certman
        */}
    </div>
  );
}