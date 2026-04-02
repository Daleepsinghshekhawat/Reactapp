import React from 'react'

const Signup = () => {
  return (
    <div>
      <label for="name">name</label>
      <input id="name" type="text" placeholder="type name" /><br/>
      <label for="name">email</label>
      <input id="email" type="email" placeholder="type email" />
      <label for="password">password</label>
      <input id="password" type="password" placeholder="enter password"></input><br/>
      <label for="add">address</label>
      <input id="add" type="text" placeholder="address"/><br/>
      <button type="submit">submit</button>
    </div>
  );
}

export default Signup