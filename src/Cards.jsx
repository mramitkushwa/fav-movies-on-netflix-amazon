import React from "react";
//import Heading from "./Heading",
import Images from "./images";

function Card(props){
   // console.log(props);
    return(
        <>
        <div className="cards">
        <div className="card">
        <Images imgsrc={props.imgsrc} />
        <div className="card__info">
        <span className="card__category">
        {props.title} </span>
        <h3 className="card__title">{props.sname} </h3>
        <a href={props.link} target="_blank">
            <button>Watch Now</button>
        </a>
    </div>
 </div>

 </div>

 <input type="text" value="movie" />
 </>
  );
   
}

export default Card;