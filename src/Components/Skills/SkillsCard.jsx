import React from 'react'
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function SkillsCard(props) {
    const arr = [];
    for (let index = 0; index < props.stars; index++) {
      arr.push(index);
    }
    console.log(arr);
 return (
   
    <div className='skills_card_container'>
    <div className='skills_card'>
    <img src={props.img} className='skills_card_img'/>
    {/* <div className='skills_card_text'>{props.name}</div> */}
    <div className='skills_stars'>

    {arr.map((item) => (
            <FontAwesomeIcon icon={faStar} className="star" />
          ))}

          {props.half ? (
            <FontAwesomeIcon icon={faStarHalf} className="star" />
          ) : null}
    {/* <BsFillStarFill className='star'/>
    <BsFillStarFill className='star'/>
    <BsFillStarFill className='star'/> */}

    </div>
    </div>
    </div>
    )
}
