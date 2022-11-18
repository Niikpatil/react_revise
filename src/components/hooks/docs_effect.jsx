import React, { useEffect, useState } from "react";

export const TitleTab = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("effect executed");
    document.title = `you clicked ${count} times`;
  }, []);

  return (
    <div>
      <h4>Cont</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((pre) => pre + 1)}>hit</button>
    </div>
  );
};
