import "./Work.css";
import React from "react";
import ridecell from "../../Assets/Work/ridecell.png";
import apt from "../../Assets/Work/apt2.png";
import santanet from "../../Assets/Work/santanet.png";
import { IoIosArrowDropright } from "react-icons/io";

import { AiFillCalendar } from "react-icons/ai";
export default function Work(props) {
  return (
    <div className="work_main" id={props.light ? "lightid" : null}>
      <div className="work_header" id="workex">
        Work Experience
      </div>
      <div className="work_card_container">
        <div className="card_cont">
          <div
            className="work_card"
            id={props.light ? "work_card_light" : null}
          >
            <img src={ridecell} id="ridecell" className="work_card_img" />
          </div>
          <div
            className="card_bg1"
            id={props.light ? "card_bg1_light" : null}
          ></div>
          <div className="dur">
            <AiFillCalendar className="calender" />
            May '22 - Aug '22
          </div>
          <a href="/ridecell">
            <div
              className="r_more_w"
              id={props.light ? "r_more_w_light" : null}
            >
              Read More <IoIosArrowDropright className="right_w" />
            </div>
          </a>
        </div>
        <div className="card_cont">
          <div
            className="work_card"
            id={props.light ? "work_card_light" : null}
          >
            <img src={apt} id="apt" className="work_card_img" />
          </div>

          <div
            className="card_bg1"
            id={props.light ? "card_bg1_light" : null}
          ></div>
          <div className="dur">
            <AiFillCalendar className="calender" />
            Apr '22 - Jul '22
          </div>
          <a href="/apt">
            <div
              className="r_more_w"
              id={props.light ? "r_more_w_light" : null}
            >
              Read More <IoIosArrowDropright className="right_w" />
            </div>
          </a>
        </div>
        <div className="card_cont">
          <div
            className="work_card"
            id={props.light ? "work_card_light" : null}
          >
            <img src={santanet} id="santanet" className="work_card_img" />
          </div>
          <div
            className="card_bg1"
            id={props.light ? "card_bg1_light" : null}
          ></div>
          <div className="dur">
            <AiFillCalendar className="calender" />
            Sept '21 - Jan '22
          </div>
          <a href="/santanet">
            <div
              className="r_more_w"
              id={props.light ? "r_more_w_light" : null}
            >
              Read More <IoIosArrowDropright className="right_w" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
