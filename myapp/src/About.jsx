import React from "react";

const About = (props) => {
  // const user = props.usr;
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to the about page!</p>
      <p>we can appreciate the beauty of nature and find solace in its embrace. Whether it's a walk in the park, a hike in the mountains, or simply sitting by a serene lake, nature has a way of rejuvenating our spirits and reminding us of the wonders of the world around us.</p>
      <h1>
        {props.usr.filter((item)=>item%2===0 ).map((item,index)=>{return <li key={index}>{item}</li>})}
      </h1>
      <h2>{props.name}</h2>
    </div>
  );
};

export default About;
