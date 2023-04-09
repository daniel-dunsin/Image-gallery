import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h2 className="text-[1rem]">
      The page you requested does not exist, redirect to{" "}
      <Link to="/" className="text-[#2073fa] underline">
        home page
      </Link>
    </h2>
  );
};

export default NotFound;
