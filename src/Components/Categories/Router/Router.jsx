import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayRouter from "./DisplayRouter";

const Router = () => {
  const routerInfo = useLoaderData();
  console.log(routerInfo);
  return (
    <div className="grid md:grid-cols-3 gap-4 my-16 px-4">
      {routerInfo.map((router) => (
        <DisplayRouter router={router}></DisplayRouter>
      ))}
    </div>
  );
};

export default Router;
