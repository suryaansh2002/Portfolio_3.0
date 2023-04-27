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

import fastapi from "../../Assets/Skills/fastapi.png";
import next from "../../Assets/Skills/next.png";
import typeorm from "../../Assets/Skills/typeorm.png";
import nest from "../../Assets/Skills/nest.png";
import postgres from "../../Assets/Skills/postgres.png";

import SkillsCard from "./SkillsCard";

export default function Skills(props) {
  const [light, setLight] = useState(false);

  const [carSettings, setCarSettings] = useState();

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
      <div className="imgslider">
        <Slider {...carSettings}>
          <SkillsCard light={light} img={c} name="C" stars={4} half={true} />
          <SkillsCard
            light={light}
            img={cpp}
            name="C++"
            stars={4}
            half={false}
          />
          <SkillsCard
            light={light}
            img={python}
            name="Python"
            stars={4}
            half={true}
          />
          <SkillsCard
            light={light}
            img={java}
            name="Java"
            stars={3}
            half={true}
          />
          <SkillsCard
            light={light}
            img={js}
            name="JavaScript"
            stars={5}
            half={false}
          />
          <SkillsCard
            light={light}
            img={react}
            name="React JS"
            stars={4}
            half={true}
          />
          <SkillsCard
            light={light}
            img={mongo}
            name="MongoDB"
            stars={4}
            half={false}
          />
          <SkillsCard light={light} img={express} stars={4} half={false} />
          <SkillsCard light={light} img={node} stars={4} half={false} />
          <SkillsCard light={light} img={fastapi} stars={3} half={false} />
          <SkillsCard light={light} img={next} stars={4} half={false} />
          <SkillsCard light={light} img={typeorm} stars={3} half={false} />
          <SkillsCard light={light} img={nest} stars={3} half={false} />
          <SkillsCard light={light} img={firebase} stars={3} half={true} />
          <SkillsCard light={light} img={appium} stars={3} half={true} />
          <SkillsCard light={light} img={postgres} stars={3} half={false} />
          <SkillsCard light={light} img={docker} stars={3} half={false} />
          <SkillsCard light={light} img={aws} stars={3} half={false} />
          <SkillsCard light={light} img={django} stars={3} half={true} />
          <SkillsCard light={light} img={html} stars={5} half={false} />
          <SkillsCard light={light} img={css} stars={5} half={false} />
          <SkillsCard light={light} img={ts} stars={4} half={false} />
          <SkillsCard
            img={light ? react_native : react_native_dark}
            stars={3}
            half={false}
            light={light}
          />
          <SkillsCard light={light} img={php} stars={3} half={true} />
          <SkillsCard light={light} img={bootstrap} stars={5} half={false} />
          <SkillsCard light={light} img={redux} stars={3} half={true} />
          <SkillsCard light={light} img={sass} stars={4} half={false} />
          <SkillsCard light={light} img={mysql} stars={4} half={true} />
          <SkillsCard light={light} img={git} stars={5} half={false} />
          <SkillsCard light={light} img={selenium} stars={4} half={false} />
          <SkillsCard light={light} img={flutter} stars={2} half={true} />
          <SkillsCard light={light} img={matlab} stars={3} half={false} />
          <SkillsCard light={light} img={canva} stars={3} half={true} />
          <SkillsCard light={light} img={figma} stars={2} half={true} />
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
