import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Newsletter from "./Newsletter";
import SkeletonNewsPage from "./_skeletons/NewsPage";
export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <Link to="/" className="text-center font-bold md:text-7xl text-5xl mb-0">
        <h1>
          DIGI<span className="text-blue-400">DOSE</span>
        </h1>
      </Link>
      <div className="bg-blue-400 text-white space-x-8 md:text-2xl text-lg font-bold justify-center flex">
        <Link className="hover:underline" to="/india">
          India
        </Link>
        <Link className="hover:underline" to="/tech">
          Technology
        </Link>
        <Link className="hover:underline" to="/sport">
          Sports
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
