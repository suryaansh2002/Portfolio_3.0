import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
export default function Header(props) {
  return (
    <div className="header_box" id={props.light ? "lightid" : null}>
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
      <button
        className="themeBtn"
        onClick={() => {
          localStorage.setItem("theme", !props.light);
          props.setLight(!props.light);
        }}
      >
        {props.light ? (
          <BsFillMoonFill className="themeicon_light" />
        ) : (
          <BsSunFill className="themeicon" />
        )}
      </button>
      {/* <button className="resume">Resume <GrDocumentDownload/></button> */}
    </div>
  );
}
