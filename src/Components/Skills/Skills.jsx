import React, {useState,useEffect} from "react";
import "./Skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

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

export default function Skills() {
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
    <div className="skills_main">
      <div className="skills_header" id="skills">My Skills</div>
      <div className="imgslider">
        <Slider {...carSettings}>
          <SkillsCard img={c} name="C" stars={4} half={true} />
          <SkillsCard img={cpp} name="C++" stars={4} half={false} />
          <SkillsCard img={python} name="Python" stars={4} half={true} />
          <SkillsCard img={java} name="Java" stars={3} half={true} />
          <SkillsCard img={js} name="JavaScript" stars={5} half={false} />
          <SkillsCard img={react} name="React JS" stars={4} half={true} />
          <SkillsCard img={mongo} name="MongoDB" stars={4} half={false} />
          <SkillsCard img={express} name="ExpressJS" stars={4} half={false} />
          <SkillsCard img={node} name="ExpressJS" stars={4} half={false} />

          <SkillsCard img={firebase} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={appium} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={docker} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={aws} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={django} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={html} name="ExpressJS" stars={5} half={false} />
          <SkillsCard img={css} name="ExpressJS" stars={5} half={false} />
          <SkillsCard img={ts} name="ExpressJS" stars={4} half={false} />
          <SkillsCard img={react_native} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={php} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={bootstrap} name="ExpressJS" stars={5} half={false} />

          <SkillsCard img={redux} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={sass} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={mysql} name="ExpressJS" stars={4} half={true} />
          <SkillsCard img={git} name="ExpressJS" stars={4} half={true} />
          <SkillsCard img={selenium} name="ExpressJS" stars={4} half={false} />
          <SkillsCard img={flutter} name="ExpressJS" stars={2} half={true} />
          <SkillsCard img={matlab} name="ExpressJS" stars={3} half={false} />
          <SkillsCard img={canva} name="ExpressJS" stars={3} half={true} />
          <SkillsCard img={figma} name="ExpressJS" stars={2} half={true} />

        </Slider>
      </div>
      <div className="skills_link_container">
        <Link to={"/skills"} className="skills_link">
          Checkout my entire skill set... <BsFillArrowRightSquareFill className="arrow"/>
        </Link>
      </div>
    </div>
  );
}
