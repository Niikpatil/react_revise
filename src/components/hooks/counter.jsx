import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((pv) => pv + 1);
  };

  const subOne = () => {
    setCount((pv) => pv - 1);
  };

  return (
    <div>
      <h2>Counter {count}</h2>
      <button onClick={addOne}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={subOne}>-</button>
    </div>
  );
};

export default Counter;
