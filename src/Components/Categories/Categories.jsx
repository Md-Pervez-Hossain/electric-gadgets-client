import React from "react";
import { Link, Outlet } from "react-router-dom";

const Categories = ({ category }) => {
  return (
    <div>
      <div>
        <Link to="/home/headPhone">
          <h2>{category.categoryName}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
