import React, { useState } from "react";

function Counter() {
 
  const [count, setCount] = useState(0);

  function increment() {

    setCount(curr =>{
      if(curr+1>50){
        alert("value cannot be greater then 50");
        return 50;
      }
      else{
        return curr+1;
      }
    });
  }
  function decrement() {
     setCount((curr) => {
       if (curr - 1 < 0) {
         alert("Value cannot be less than 0");
         return 0; 
       }
       return curr - 1;
     });
  }
  function multiply() {
    setCount(count * 2);
  }
  function divide() {
    setCount(count / 2);
  }

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
    </div>
  );
}

export default Counter;
