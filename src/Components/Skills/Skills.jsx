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

import SkillsCard from "./SkillsCard";

export default function Skills(props) {
  const [carSettings, setCarSettings] = useState();

  var settings = {
    infinite: true,
    dots: true,
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
    dots: true,
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
    dots: true,
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

  return (
    <div className="skills_main" id={props.light ? "lightid" : null}>
      <div className="skills_header" id="skills">
        My Skills
      </div>
      <div className="imgslider">
        <Slider {...carSettings}>
          <SkillsCard
            img={c}
            light={props.light}
            name="C"
            stars={4}
            half={true}
          />
          <SkillsCard
            img={cpp}
            light={props.light}
            name="C++"
            stars={4}
            half={false}
          />
          <SkillsCard
            img={python}
            light={props.light}
            name="Python"
            stars={4}
            half={true}
          />
          <SkillsCard
            img={java}
            light={props.light}
            name="Java"
            stars={3}
            half={true}
          />
          <SkillsCard
            img={js}
            light={props.light}
            name="JavaScript"
            stars={5}
            half={false}
          />
          <SkillsCard
            img={react}
            light={props.light}
            name="React JS"
            stars={4}
            half={true}
          />
          <SkillsCard
            img={mongo}
            light={props.light}
            name="MongoDB"
            stars={4}
            half={false}
          />
          <SkillsCard
            img={express}
            light={props.light}
            stars={4}
            half={false}
          />
          <SkillsCard img={node} light={props.light} stars={4} half={false} />

          <SkillsCard
            img={firebase}
            light={props.light}
            stars={3}
            half={false}
          />
          <SkillsCard img={appium} light={props.light} stars={3} half={true} />
          <SkillsCard img={docker} light={props.light} stars={3} half={false} />
          <SkillsCard img={aws} light={props.light} stars={3} half={false} />
          <SkillsCard img={django} light={props.light} stars={3} half={true} />
          <SkillsCard img={html} light={props.light} stars={5} half={false} />
          <SkillsCard img={css} light={props.light} stars={5} half={false} />
          <SkillsCard img={ts} light={props.light} stars={4} half={false} />
          <SkillsCard
            img={props.light ? react_native: react_native_dark}
            stars={3}
            half={false}
            light={props.light}
          />
          <SkillsCard light={props.light} img={php} stars={3} half={true} />
          <SkillsCard
            light={props.light}
            img={bootstrap}
            stars={5}
            half={false}
          />

          <SkillsCard light={props.light} img={redux} stars={3} half={true} />
          <SkillsCard light={props.light} img={sass} stars={3} half={false} />
          <SkillsCard light={props.light} img={mysql} stars={4} half={true} />
          <SkillsCard light={props.light} img={git} stars={4} half={true} />
          <SkillsCard
            light={props.light}
            img={selenium}
            stars={4}
            half={false}
          />
          <SkillsCard light={props.light} img={flutter} stars={2} half={true} />
          <SkillsCard light={props.light} img={matlab} stars={3} half={false} />
          <SkillsCard light={props.light} img={canva} stars={3} half={true} />
          <SkillsCard light={props.light} img={figma} stars={2} half={true} />
        </Slider>
      </div>
      <div className="skills_link_container">
        <Link
          to={"/skills"}
          className="skills_link"
          id={props.light ? "skills_link_light" : null}
        >
          Checkout my entire skill set...{" "}
          <BsFillArrowRightSquareFill className="arrow" />
        </Link>
      </div>
    </div>
  );
}
