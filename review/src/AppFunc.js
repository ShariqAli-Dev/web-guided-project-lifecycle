import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log("render");
  const [name, setName] = useState("Warren");

  const handleClick = () => {
    setName("Allison");
  };

  useEffect(() => {
    console.log("useEffect running!");
  }, [name]);

  return (
    <div>
      <h1>Hello {name}!</h1>

      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
