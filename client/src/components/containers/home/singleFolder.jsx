/**
 * Displays the folder name, image and date it was updated last
 * Accepts props (name, cover and updatedAt) props
 */

import React from "react";
import { Link } from "react-router-dom";

const SingleFolder = (props) => {
  return (
    <Link to={`/folder/${props.name}`} className={styles.folder}>
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <img
          src={props.cover}
          alt={props.name + " folder"}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className={styles.textContainer}>
        <div>
          <h2 className="text-mainBlue font-bold text-[1rem] mb-1 leading-[1]">
            {props.name}
          </h2>
          <p className="text-[14px]">{props.numberOfImages} images</p>
        </div>{" "}
        <p className="text-[0.8rem]">
          Last updated: <span className="font-bold">{props.updatedAt}</span>
        </p>
      </div>
    </Link>
  );
};

const styles = {
  folder:
    "w-full bg-white shadow-md hover:shadow-lg rounded-md overflow-hidden h-[300px]",
  imageContainer: "w-full h-[50%] cursor-pointer",
  textContainer: "h-[50%] w-full p-5 flex flex-col justify-between",
};

export default SingleFolder;
