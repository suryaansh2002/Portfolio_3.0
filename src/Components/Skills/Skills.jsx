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
import matlab from "../../Assets/Skills/matlab.png";
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

import SkillsCard from "./SkillsCard";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

export default function Skills(props) {
  const [light, setLight] = useState(false);

  const [carSettings, setCarSettings] = useState();
  const [openSkill, setOpenSkill] = useState("");
  const skills = {
    programming: "Programming Languages",
    frontend: "Frontend Development & UI/UX",
    backend: "Backend Development",
    db: "Databases",
    devops: "Cloud & Devops",
    mobile: "Mobile App Development",
    testing: "Testing & Automation",
  };
  const skillImages = {
    programming: [python, js, cpp, c, java],
    frontend: [html, css, bootstrap, react, redux, sass, canva, figma],
    backend: [node, express, php, django, fastapi, nest],
    db: [mongo, mysql, postgres, typeorm],
    devops: [firebase, docker, aws, git],
    mobile: [react_native, flutter, swift],
    testing: [selenium, appium],
  };
  var settings = {
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  var settings2 = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  var settings3 = {
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  useEffect(() => {
    window.innerWidth > 1000
      ? setCarSettings(settings)
      : window.innerWidth > 800
      ? setCarSettings(settings3)
      : setCarSettings(settings2);
  }, [window.innerWidth]);
  useEffect(() => {
    if (localStorage.getItem("theme") == "true") {
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
