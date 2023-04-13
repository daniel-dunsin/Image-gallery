/**
 * Contains a carousel of the images and allows users to download each image
 */

import React, { useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import Carousel from "./carousel";
import { useParams } from "react-router-dom";

const FolderImagesList = (props) => {
  const [files, setFiles] = useState(null);

  const { id } = useParams();

  return (
    <div className={styles.carouselContainer}>
      <header className="w-full flex justify-between items-center flex-wrap gap-3">
        <h2 className="text-[1.1rem] leading-1">
          <span className="text-mainBlue font-bold">{props?.folder?.name}</span>{" "}
          - {props?.folder?.imagesCount} images
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
              name={id}
              onChange={(e) => {
                setFiles(e.target.files);
                props.addImagesMutation.mutate(e);
              }}
            />
          </div>

          {/* For deleting the folder */}
          <div
            className="text-mainBlue font-bold cursor-pointer"
            onClick={props?.deleteFolder}
          >
            <span className="align-middle inline-block mr-2">
              <BiTrash />
            </span>
            Delete Folder
          </div>
        </div>
      </header>
      <Carousel
        images={props?.folder?.images}
        deleteImageMutation={props.deleteImageMutation}
      />
    </div>
  );
};

const styles = {
  carouselContainer:
    "w-full px-6 py-8 relative overflow-x-hidden overflow-y-visible min-h-screen max-w-[1200px] mx-auto",
  singleImageContainer:
    "w-full h-[400px] absolute top-[140px] transition-all duration-500 rounded-md overflow-hidden bg-[rgba(0,0,0,0.4)] max-w-[1200px] mx-auto z-[1]",
  controllersContainer:
    "flex items-center justify-center gap-4 flex-wrap text-mainBlue z-[6]",
};

export default FolderImagesList;
