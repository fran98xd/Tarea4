import React, { Fragment, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <button className="btn" onClick={() => handleClick()}>
        Click
      </button>
      <p>Nuestro contador es 1</p>
    </Fragment>
  );
};

export default Counter;
