import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {/* if bio is passed or not */}
      {Boolean(props.bio) === true ? <p>{props.bio}</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin = {props.links.linkedin} github={props.links.github}/>
    </div>
  );
}

export default About;
