import React, { useState } from "react";

const Arrayhooks = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <>
      <h3>Num</h3>
      <button onClick={addItem}>Add Num</button>
      <ul>
        {items.map((e) => (
          <li key={e.id}>{e.value}</li>
        ))}
      </ul>
    </>
  );
};

export default Arrayhooks;
