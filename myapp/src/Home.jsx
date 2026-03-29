import React from "react";

const Home = ({ user }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <p>{user}</p>
    </div>
  );
};

export default Home;
