import React, { useEffect, useState } from "react";
import axios from "axios";

export const Dfetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const dataList = posts.map((e) => <li key={e.id}>{e.title} </li>);

  return (
    <>
      <h4>DataFetch</h4>

      <ul>{dataList}</ul>
    </>
  );
};
