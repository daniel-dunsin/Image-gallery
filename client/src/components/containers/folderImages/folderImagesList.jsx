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
  BiPlus,
  BiTrash,
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
      <header className="w-full flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-[1.1rem] leading-1">
          <span className="text-mainBlue font-bold">Adejare</span> - 8 images
        </h2>

        <div className={styles.controllersContainer + " flex-nowrap"}>
          {/* For adding images..... */}
          <div>
            <label
              htmlFor="add-image"
              className="text-mainBlue font-bold cursor-pointer"
            >
              <span className="align-middle inline-block mr-2">
                <BiPlus />
              </span>
              Add Images
            </label>

            <input
              type="file"
              multiple
              className="hidden"
              accept="image/*"
              id="add-image"
            />
          </div>
          {/* For deleting the folder */}
          <div className="text-mainBlue font-bold cursor-pointer">
            <span className="align-middle inline-block mr-2">
              <BiTrash />
            </span>
            Delete Folder
          </div>
        </div>
      </header>

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
        <div className={styles.controllersContainer}>
          <p className="text-mainBlue font-bold text-[1rem] mt-5 cursor-pointer">
            <span className="align-middle inline-block mr-2">
              <BiDownload />
            </span>
            Download Image
          </p>

          <p className="text-mainBlue font-bold text-[1rem] mt-5 cursor-pointer">
            <span className="align-middle inline-block mr-2">
              <BiTrash />
            </span>
            Delete Image
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  carouselContainer:
    "w-full px-6 py-8 relative overflow-x-hidden overflow-y-visible min-h-screen max-w-[1200px] mx-auto",
  singleImageContainer:
    "w-full h-[400px] absolute top-[140px] transition-all duration-500 rounded-md overflow-hidden bg-[rgba(0,0,0,0.4)] max-w-[1200px] mx-auto",
  controllersContainer:
    "flex items-center justify-center gap-4 flex-wrap text-mainBlue",
};

export default FolderImagesList;
