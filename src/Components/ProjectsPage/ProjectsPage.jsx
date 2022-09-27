import React from 'react'
import "./ProjectsPage.css";
import psychup from "../../Assets/Skills/psych.png";
import datagrad from "../../Assets/Skills/datagrad.png";
import decrypt from "../../Assets/Skills/decrypt.png";
import atlantis from "../../Assets/Skills/atlantis.png";
import ecommerce from "../../Assets/Skills/ecommerce.png";
import chattify from "../../Assets/Skills/chattify.png";
import discussion from "../../Assets/Skills/discussion.png";
import todo from "../../Assets/Skills/todo.png";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { HiGlobeAlt } from "react-icons/hi";

export default function ProjectsPage() {
  return (
    <div className="projectsPage_main">
    <div className="projectsPage_header">
      All Projects
    </div>
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

      {/*Atlantis */}
      <div className="mainc">
        <div className="proj_card">
          <img src={atlantis} className="proj_img"></img>
          <div className="proj_title">Atlantis</div>
          <div className="proj_text">
          A website built using React JS, for IEEE SBM's annual TechWeek 2022.
          </div>
          <div className="icons_c2">
            {/* <AiFillGithub className="picon" />{" "} */}
            <a href='https://atlantis.ieeemanipal.com/'><HiGlobeAlt className="picon" />{" "}</a>
          </div>
        </div>
        <div className="inner_card"></div>
      </div>

      {/*Ecommerce */}
      <div className="mainc">
        <div className="proj_card">
          <img src={ecommerce} className="proj_img"></img>
          <div className="proj_title">Ecommerce website</div>
          <div className="proj_text">
          A basic Ecommerce website built using MongoDB, Express, React JS, and Node JS. Styled using bootstrap.
          </div>
          <div className="icons_c2">
            <a href='https://github.com/suryaansh2002/Ecommerce_site_practice'><AiFillGithub className="picon" /></a>
            <a href='https://ecommerce.suryaanshrathinam.com/'><HiGlobeAlt className="picon" />{" "}</a>
          </div>
        </div>
        <div className="inner_card"></div>
      </div>

      {/*Chattify */}
      <div className="mainc">
        <div className="proj_card">
          <img src={chattify} className="proj_img"></img>
          <div className="proj_title">Chattify</div>
          <div className="proj_text">
          A real time chat Application built using React JS, Firebase for Authentication and <a href='https://chatengine.io/'>Chat Engine</a>
          </div>
          <div className="icons_c2">
            <a href='https://github.com/suryaansh2002/Chat-app'><AiFillGithub className="picon" /></a>
            <a href='https://chat.suryaanshrathinam.com/'><HiGlobeAlt className="picon" />{" "}</a>
          </div>
        </div>
        <div className="inner_card"></div>
      </div>

      {/*Discussion Rooms */}
      <div className="mainc">
        <div className="proj_card">
          <img src={discussion} className="proj_img"></img>
          <div className="proj_title">Discussion Rooms</div>
          <div className="proj_text">
          A discussion rooms application, built with HTML-CSS Frontend and Python (Django) Backend.
          </div>
          <div className="icons_c2">
            <a href='https://github.com/suryaansh2002/Discussion_Rooms_Django_App'><AiFillGithub className="picon" /></a>
            <a href='https://suryaansh-django-app.herokuapp.com/'><HiGlobeAlt className="picon" />{" "}</a>
          </div>
        </div>
        <div className="inner_card"></div>
      </div>


      {/*To Do*/}
      <div className="mainc">
        <div className="proj_card">
          <img src={todo} className="proj_img"></img>
          <div className="proj_title">To Do App</div>
          <div className="proj_text">
          A responsive Todo Web Application built using MERN Stack and Authentication using JWT.
          </div>
          <div className="icons_c2">
            <a href='https://github.com/suryaansh2002/To_Do_App'><AiFillGithub className="picon" /></a>
            <a href='https://todo.suryaanshrathinam.com/'><HiGlobeAlt className="picon" />{" "}</a>
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

  )
}
