import React, { useState } from "react";
import "./Projects.css";
import psychup from "../../Assets/Skills/psych.png";
import datagrad from "../../Assets/Skills/datagrad.png";
import decrypt from "../../Assets/Skills/decrypt.png";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";

import { HiGlobeAlt } from "react-icons/hi";
export default function Projects(props) {
  const [showAll, setShowAll] = useState(false);
  const projectData = [
    {
      title: "Document and Video Q&A System",
      description: "A web app for uploading PDFs and YouTube videos, processing them into chunks, and interacting via chat. Uses MongoDB for document storage, Pinecone for vector retrieval, and OpenAI for responses. Features include document/video processing, vector storage, and a chat interface for querying.",
      date: "Feb 2025",
      github: "https://github.com/suryaansh2002/multi-doc-chat-rag",
      website:"https://multi-doc-chat-rag-client.vercel.app/",
    },
    {
      title: "Real Time Meeting Summarizer",
      description:
        "Developed a Chrome extension with FastAPI backend that captures and processes real-time audio from browser tabs. Implemented an ML pipeline using OpenAI Whisper for transcription and Mistral-7B model for intelligent summarization, featuring speaker diarization and knowledge graph generation for contextual understanding.",
      date: "Nov 2024",
      github: "https://github.com/suryaansh2002/real_time_meeting_sumarizer",
    },
    {
      title: "Distributed Maze Game",
      description:
        "Implemented multi-threaded server logic with dynamic server swapping for continuous operation, handling player crashes and asynchronous movements. Used TCP/Java RMI for reliable messaging and constructed a tracker-based player registry to enhance peer discovery and reduce system load, demonstrating fault-tolerance in gaming.",
      date: "Oct 2024",
      github: "https://github.com/suryaansh2002/cs5223-A1",
    },
    {
      title: "IRCTC Tatlak Booking",
      description:
        "A desktop application built using Electron JS and Python to allow users to automate scheduling the booking process of Tatkal tickets from the Indian Railways IRCTC Website. This is done using Selenium for browser automation and apscheduler to schedule Cron jobs.",
      date: "Feb 2025",
      github: "https://github.com/suryaansh2002/IRCTC_Tatkal",
    },
    {
      title: "SLCM Automation",
      description:
        "Created a Selenium-based web scraping and automation tool to streamline data collection and form filling from the Student Lifecycle Management (SLCM) portal. This tool reduces manual effort and enhances data accuracy for academic processes.",
      date: "Sept 2023",
      github: "https://github.com/suryaansh2002/form_filling_automation",
      website: "https://mitcse.manipal.edu/mentor",
      certificate:
        "https://drive.google.com/file/d/1CNSnxxN68ZbROibg1_3gB_JncxbmDmhl/view?usp=sharing",
    },
    {
      title: "Psychup",
      description:
        "A platform aimed at increasing awareness and providing content regarding psychology and mental health.",
      date: "Feb 2022",
      github: "https://github.com/suryaansh2002/psychup",
      website: "https://psychup.netlify.app/",
    },
    {
      title: "Decrypt",
      description:
        "Engineered the backend for an annual online cryptic hunt competition conducted by IEEE SBM, accommodating over 500 participants. The system ensures seamless user experience and robust performance during high-traffic events.",
      date: "Feb 2022",
      github: "https://github.com/suryaansh2002/d3crypt_backend",
    },
    {
      title: "Discussion Rooms",
      description:
        "Developed a web application facilitating real-time discussions, built with an HTML-CSS frontend and a Python (Django) backend. The platform supports user authentication, topic creation, and interactive conversations.",
      date: "Jan 2022",
      github: "https://github.com/suryaansh2002/Discussion_Rooms_Django_App",
      // "website": "https://suryaansh-django-app.herokuapp.com/"
    },
    {
      title: "DataGrad",
      description:
        "Developed a platform to bridge the gap between top MOOCs like Coursera, Udacity, EdX, and students eager to learn new skills. The application recommends the top 5 relevant courses based on the user's skill level and interests, simplifying the learning process.",
      date: "Sept 2021",
      github: "https://github.com/suryaansh2002/datagrad",
      website: "https://datagrad.netlify.app/",
    },
  ];

  const ProjectCard = ({ item }) => (
    <div className="mainc">
      <div className="project_card" id={props.light ? "proj_card_light" : null}>
        <div>
          <div className="proj_title">{item.title}</div>
          <div className="project_date">{item.date}</div>
          <div className="proj_text">{item.description}</div>
        </div>

        <div className="icons_c">
          {item.github && (
            <a target="__blank" href={item.github}>
              <AiFillGithub className="picon" />
            </a>
          )}

          {item.website && (
            <a target="__blank" href={item.website}>
              <HiGlobeAlt className="picon" />
            </a>
          )}
          {item.certificate && (
            <a target="__blank" href={item.certificate}>
              <PiCertificateFill className="picon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects_main" id={props.light ? "lightid" : null}>
      <div className="projects_header" id="projects">
        My Projects
      </div>
      <div className="projcard_cont">
        {projectData.map((item, index) =>
          showAll || (!showAll && index < 3) ? (
            <ProjectCard item={item} />
          ) : (
            <></>
          )
        )}

        <div className="morep">
          <div onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </div>
        </div>
      </div>
    </div>
  );
}
