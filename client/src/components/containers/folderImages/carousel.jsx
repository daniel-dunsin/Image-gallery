/**
 * Custom carousel for images
 */

import React, { useState } from "react";
import {
  BiChevronLeftCircle,
  BiChevronRightCircle,
  BiDownload,
  BiTrash,
} from "react-icons/bi";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < props?.images?.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (props?.images?.length === 0) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center">
        <h1 className="font-bold text-[1rem] text-gray-900">
          This folder has no image
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="relative mt-9 min-h-[400px] overflow-hidden">
        {props?.images?.map((image, index) => {
          return (
            <div
              className={styles.singleImageContainer}
              style={{ left: `${(index - currentIndex) * 100}%` }}
              key={index}
            >
              <img
                src={image?.url}
                alt={image?.folder}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>

      <div className="pt-20 text-center">
        <div className={styles.controllersContainer}>
          {/* Buttons */}
          <span
            className={`text-[2.5rem] cursor-pointer ${
              currentIndex === 0 && "opacity-30"
            }`}
            onClick={previousImage}
          >
            <BiChevronLeftCircle />
          </span>
          <span
            className={`text-[2.5rem] cursor-pointer ${
              currentIndex === props?.images?.length - 1 && "opacity-30"
            }`}
            onClick={nextImage}
          >
            <BiChevronRightCircle />
          </span>
        </div>
        <div className={styles.controllersContainer}>
          <a
            href={props?.images?.[currentIndex]?.url}
            download={true}
            target="_blank"
            className="text-mainBlue font-bold text-[1rem] mt-5 cursor-pointer"
          >
            <span className="align-middle inline-block mr-2">
              <BiDownload />
            </span>
            Download Image
          </a>

          <p
            className="text-mainBlue font-bold text-[1rem] mt-5 cursor-pointer"
            onClick={() => {
              props?.deleteImageMutation.mutate(
                props?.images?.[currentIndex]?._id
              );
              setCurrentIndex(0);
            }}
          >
            <span className="align-middle inline-block mr-2">
              <BiTrash />
            </span>
            Delete Image
          </p>
        </div>
      </div>
    </>
  );
};

const styles = {
  carouselContainer:
    "w-full px-6 py-8 relative overflow-x-hidden overflow-y-visible min-h-screen max-w-[1200px] mx-auto",
  singleImageContainer:
    "w-full h-[400px] absolute top-0 transition-all duration-500 rounded-md overflow-hidden bg-[rgba(0,0,0,0.4)] max-w-[1200px] mx-auto z-[1]",
  controllersContainer:
    "flex items-center justify-center gap-4 flex-wrap text-mainBlue z-[6]",
};

export default Carousel;
