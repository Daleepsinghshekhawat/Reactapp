import React from 'react'

const Signin = () => {
  return (
    <div>
      <form>
        <label for="name">name</label>
        <input id="name" type="text" placeholder="type name" /><br/>
        <label for="password">password</label>
        <input
          id="password"
          type="password"
          placeholder="enter password"
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Signin