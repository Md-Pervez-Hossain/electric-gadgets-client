import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayHedphones from "./DisplayHedphones";
const HeadPhone = () => {
  const routers = useLoaderData();
  console.log(routers);

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
