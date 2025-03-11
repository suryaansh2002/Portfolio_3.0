import React, { useState, useEffect } from "react";
import "./Skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import c from "../../Assets/Skills/c.png";
import cpp from "../../Assets/Skills/c++.png";
import python from "../../Assets/Skills/python.png";
import java from "../../Assets/Skills/java.png";
import js from "../../Assets/Skills/js.png";
import react from "../../Assets/Skills/react.png";
import mongo from "../../Assets/Skills/mongodb.png";
import express from "../../Assets/Skills/express.png";

import firebase from "../../Assets/Skills/firebase.png";
import appium from "../../Assets/Skills/appium.png";
import docker from "../../Assets/Skills/docker.png";
import django from "../../Assets/Skills/django.png";
import aws from "../../Assets/Skills/aws.png";

import html from "../../Assets/Skills/html.png";
import css from "../../Assets/Skills/css.png";
import ts from "../../Assets/Skills/typescript.png";
import react_native from "../../Assets/Skills/r-native.png";
import swift from "../../Assets/Skills/swift.png";

import react_native_dark from "../../Assets/Skills/r-native_dark.png";
import bootstrap from "../../Assets/Skills/bootstrap.png";
import php from "../../Assets/Skills/php.png";

import redux from "../../Assets/Skills/redux.png";
import sass from "../../Assets/Skills/sass.png";
import mysql from "../../Assets/Skills/mysql.png";
import git from "../../Assets/Skills/git.png";
import selenium from "../../Assets/Skills/selenium.png";
import flutter from "../../Assets/Skills/flutter.png";
import canva from "../../Assets/Skills/canva.png";
import figma from "../../Assets/Skills/figma.png";
import node from "../../Assets/Skills/node.png";

import fastapi from "../../Assets/Skills/fastapi.png";
import next from "../../Assets/Skills/next.png";
import typeorm from "../../Assets/Skills/typeorm.png";
import nest from "../../Assets/Skills/nest.png";
import postgres from "../../Assets/Skills/postgres.png";
import excel from "../../Assets/Skills/excel.png";

import SkillsCard from "./SkillsCard";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

export default function Skills(props) {
  const [light, setLight] = useState(false);

  const [openSkill, setOpenSkill] = useState("");
  const skills = {
    programming: "Programming Languages",
    fullstack: "FullStack Development & UI/UX",
    backend: "Backend Development",
    db: "Databases",
    devops: "Cloud & Devops",
    other: "Other",
  };
  const skillImages = {
    programming: [python, js, cpp, c, java],
    fullstack: [node, express, php, django, fastapi, ts, nest, html, css, bootstrap, react, redux, next,ts, sass, canva, figma],
    db: [mongo, mysql, postgres, typeorm],
    devops: [firebase, docker, aws, git],
    other: [react_native, flutter, swift, selenium, appium, excel],
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "true") {
      setLight(true);
    }
  }, []);
  return (
    <div className="skills_main" id={props.light ? "lightid" : null}>
      <div className="skills_header" id="skills">
        My Skills
      </div>
      {Object.keys(skills).map((skill) => (
        <div
          className="skills-toggle"
          onClick={() => {
            openSkill === skill ? setOpenSkill("") : setOpenSkill(skill);
          }}
        >
          {openSkill === skill ? (
            <AiOutlineDown style={{ marginRight: "1rem" }} />
          ) : (
            <AiOutlineRight style={{ marginRight: "1rem" }} />
          )}
          {skills[skill]}
          {openSkill === skill && (
            <div style={{ margin: "1rem" }}>
              {skillImages[skill].map((skillImage) => (
                <img
                  src={skillImage}
                 className="skills-toggle-img"
                />
              ))}
            </div>
          )}
        </div>
      ))}
{/* 
      <div className="skills_link_container">
        <Link
          to={"/skills"}
          className="skills_link"
          id={props.light ? "skills_link_light" : null}
        >
          Checkout my entire skill set...{" "}
          <BsFillArrowRightSquareFill className="arrow" />
        </Link>
      </div> */}
    </div>
  );
}
