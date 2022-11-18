import React, { useState } from "react";

const Nameobj = () => {
  const [name, setName] = useState({ fName: "", lName: "" });

  return (
    <div>
      <input
        type="text"
        value={name.fName}
        onChange={(e) => setName({ ...name, fName: e.target.value })}
      />{" "}
      <input
        type="text"
        value={name.lName}
        onChange={(e) => setName({ ...name, lName: e.target.value })}
      />
      <h4>{name.fName}</h4>
      <h4>{name.lName}</h4>
      <h4>{JSON.stringify(name)}</h4>
    </div>
  );
};

export default Nameobj;
