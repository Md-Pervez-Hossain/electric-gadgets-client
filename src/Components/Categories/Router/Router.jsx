import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayRouter from "./DisplayRouter";

const Router = () => {
  const routerInfo = useLoaderData();
  console.log(routerInfo);
  return (
    <div className="grid grid-cols-4 gap-4 my-16">
      {routerInfo.map((router) => (
        <DisplayRouter router={router}></DisplayRouter>
      ))}
    </div>
  );
};

export default Router;
