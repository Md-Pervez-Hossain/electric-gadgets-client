import React, { useEffect, useState } from "react";
import DisplayHedphones from "./DisplayHedphones";

const HeadPhone = () => {
  const [routers, setRouters] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/HeadPhone`)
      .then((res) => res.json())
      .then((data) => {
        setRouters(data);
      });
  }, []);
  return (
    <div className="my-16">
      <div className="grid grid-cols-4 gap-5">
        {routers?.map((router) => (
          <DisplayHedphones router={router}></DisplayHedphones>
        ))}
      </div>
    </div>
  );
};

export default HeadPhone;
