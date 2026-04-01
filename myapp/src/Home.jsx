import React from "react";

const Home = (props) => {
  let user = props.usr;
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <p>{user.map((item)=>{return item;})}</p>
    </div>
  );
};

export default Home;
