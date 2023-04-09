import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <h2 className="text-[1rem]">
      Hello there, something went wrong, kindly reach out to{" "}
      <a
        href="mailto:adejaredaniel12@gmail.com"
        className="underline font-bold"
      >
        adejaredaniel12@gmail.com
      </a>{" "}
      or Redirect to{" "}
      <Link to="/" className="text-[#2073fa] underline">
        home page
      </Link>
    </h2>
  );
};

export default Error;
