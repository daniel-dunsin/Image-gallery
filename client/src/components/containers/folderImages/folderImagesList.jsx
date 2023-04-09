/**
 * Contains a carousel of the images and allows users to download each image
 */

import React, { useState } from "react";
import {
  BiChevronLeft,
  BiChevronLeftCircle,
  BiChevronRight,
  BiChevronRightCircle,
  BiDownload,
} from "react-icons/bi";

const folderImages = ["/bg.jpg", "/postman.jpg", "/bg.jpg"];

const FolderImagesList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < folderImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <h2 className="text-[1.1rem] leading-1">
        <span className="text-mainBlue font-bold">Adejare</span> - 8 images
      </h2>
      {folderImages.map((image, index) => {
        return (
          <div
            className={styles.singleImageContainer}
            style={{ left: `${(index - currentIndex) * 100}%` }}
            key={index}
          >
            <img
              src={image}
              alt={image}
              className="w-full h-full object-contain"
            />
          </div>
        );
      })}
      <div className="pt-[460px] text-center">
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
              currentIndex === folderImages.length - 1 && "opacity-30"
            }`}
            onClick={nextImage}
          >
            <BiChevronRightCircle />
          </span>
        </div>
        <p className="text-mainBlue font-bold text-[1rem] mt-5">
          <span className="align-middle inline-block mr-2">
            <BiDownload />
          </span>
          Download Image
        </p>
      </div>
    </div>
  );
};

const styles = {
  carouselContainer:
    "w-full px-6 py-8 relative overflow-x-hidden overflow-y-visible min-h-screen max-w-[1200px] mx-auto",
  singleImageContainer:
    "w-full h-[400px] absolute top-20 transition-all duration-500 rounded-md overflow-hidden bg-[rgba(0,0,0,0.4)]",
  controllersContainer: "flex items-center justify-center gap-4 text-mainBlue",
};

export default FolderImagesList;
