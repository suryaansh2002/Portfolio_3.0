import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import logo_light from "../../Assets/logo_light.png";
import { HashLink } from "react-router-hash-link";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
export default function Header(props) {
  return (
    <div className="header_box" id={props.light ? "lightid" : null}>
      <HashLink smooth to={"/"}>
        <img src={props.light ? logo_light : logo} className="header_logo" />
      </HashLink>
      <div className="header_links">
        <HashLink smooth className="header_link" to={"/"}>
          Home
        </HashLink>
        <HashLink smooth className="header_link" to={"/#about"}>
          About
        </HashLink>
        <HashLink smooth className="header_link" to={"/#skills"}>
          Skills
        </HashLink>
        <HashLink smooth className="header_link" to={"/#projects"}>
          Projects
        </HashLink>
        <HashLink smooth className="header_link" to={"/#workex"}>
          Work Experience
        </HashLink>
        <HashLink smooth className="header_link" to={"/#research"}>
          Research Work
        </HashLink>
        <HashLink
          smooth
          className="header_link"
          id="last_link"
          to={"/#contact"}
        >
          Contact
        </HashLink>
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
