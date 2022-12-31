import React from "react";
import "./Research.css";
import paper from "../../Assets/SuryaanshRathinam_ComparisonOfFrontendFrameworks.pdf";
export default function Research(props) {
  return (
    <div className="projects_main" id={props.light ? "lightid" : null}>
      <div className="projects_header" id="research">
        Research Work
      </div>
      <div className="research_left">
        <div>
          Title:{" "}
          <span>Analysis and Comparison of Different Frontend Frameworks</span>
        </div>
        <div>
          Authors: <span>Suryaansh Rathinam</span>
        </div>
        <div>
          Presented at:{" "}
          <span>
            <a href="https://atis2022.com/" target={"_blank"}>
              ATIS 2022 Conference
            </a>
          </span>
        </div>
        <div>
          To be published by:{" "}
          <span>
            <a href="https://www.springer.com/series/7899" target={"_blank"}>
              Springer's CCIS series
            </a>
          </span>
        </div>
        <div>
          <a href={paper} download>
            <button
              className="download_r"
              id={props.light ? "download_r_light" : null}
            >
              Download PDF
            </button>
          </a>
        </div>
      </div>
      <div className="research_right">
        <div className="research_abs">Abstract</div>
        <div className="abs_content">
          A frontend framework is pre-written code that provides the
          architecture for a project, along with certain features to help with
          the development process. With the availability of many frameworks,
          each with its own features and advantages, it is important to
          understand the difference between the various frameworks and make the
          right choice of framework for a particular project. This paper
          elabo-rates on the features of three popular frameworks: React,
          Angular and Vue, draws a comparison among them, and provides
          guidelines on how to make the choice of a suitable framework for a
          project.
        </div>
      </div>
    </div>
  );
}
