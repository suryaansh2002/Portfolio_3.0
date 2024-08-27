import React from "react";
import "./Education.css";
import mahe from "../../Assets/mahe.png";
import nus from "../../Assets/nus.png";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { HiGlobeAlt } from "react-icons/hi";
export default function Education(props) {
  return (
    <div className="education_main" id={props.light ? "lightid" : null}>
      <div className="education_header" id="education">
        Education
      </div>
      <div className="card_c">
      
 {/*NUS */}
 <div className="mainc">
          <div className="proj_card"  id={props.light ? "proj_card_light" : null}>
            <img src={nus} className="edu_img"  id={props.light ? "proj_img_light" : null}></img>
            <div className="edu_title">National University of Singapore</div>
            <div className="proj_text">
              Masters of Computing: Aritificial Inteligence Specialisation
            </div>
            <div className="edu_c2">
             <div>
                2024-2025
             </div>
             <div>
                
             </div>
            </div>
          </div>
          <div className="inner_card"></div>
        </div>
        
        {/*MIT */}
        <div className="mainc">
          <div className="proj_card"  id={props.light ? "proj_card_light" : null}>
            <img src={mahe} className="edu_img"  id={props.light ? "proj_img_light" : null}></img>
            <div className="edu_title">Manipal Institute of Technology</div>
            <div className="proj_text">
              Bachelor's of Technology: Computer Science
            </div>
            <div className="edu_c2">
             <div>
                2020-2024
             </div>
             <div>
                GPA: 9.47
             </div>
            </div>
          </div>
          <div className="inner_card"></div>
        </div>

      </div>
    </div>
  );
}
