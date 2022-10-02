import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
export default function Header() {
  return (
    <div className="header_box">
      <img src={logo} className="header_logo" />
      <div className="header_links">
        <a className="header_link" href={"/"}>
          Home
        </a>
        <a className="header_link" href={"/#about"}>
          About
        </a>
        <a className="header_link" href={"/#skills"}>
          Skills
        </a>
        <a className="header_link" href={"/#projects"}>
          Projects
        </a>
        <a className="header_link" href={"/#workex"}>
          Work Experience
        </a>
        <a className="header_link" id="last_link" href={"/#contact"}>
          Contact
        </a>
      </div>
      {/* <button className="resume">Resume <GrDocumentDownload/></button> */}
    </div>
  );
}
