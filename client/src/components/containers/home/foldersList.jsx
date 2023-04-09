/***
 * Lists all user's folders
 */

import React from "react";
import { BiPlus } from "react-icons/bi";
import { useGlobalContext } from "../../../context";
import SingleFolder from "./singleFolder";

const folders = [
  {
    name: "Daniel",
    cover: "./bg.jpg",
    updatedAt: "1st October, 2022",
    numberOfImages: 8,
  },
  {
    name: "Daniel",
    cover: "./bg.jpg",
    updatedAt: "1st October, 2022",
    numberOfImages: 8,
  },
  {
    name: "Daniel",
    cover: "./bg.jpg",
    updatedAt: "1st October, 2022",
    numberOfImages: 8,
  },
  {
    name: "Daniel",
    cover: "./bg.jpg",
    updatedAt: "1st October, 2022",
    numberOfImages: 8,
  },
  {
    name: "Daniel",
    cover: "./bg.jpg",
    updatedAt: "1st October, 2022",
    numberOfImages: 8,
  },
  {
    name: "Daniel",
    cover: "./bg.jpg",
    updatedAt: "1st October, 2022",
    numberOfImages: 8,
  },
];

const FoldersList = () => {
  const { setAddFolderModalOpen } = useGlobalContext();
  return (
    <section className={styles.folderContainer}>
      {folders.map((folder, index) => {
        return <SingleFolder {...folder} key={index} />;
      })}
      {/* For adding a new folder */}
      <article
        className={styles.addNewFolderWrapper}
        onClick={() => {
          setAddFolderModalOpen(true);
        }}
      >
        <div className={styles.addNewFolderFlex}>
          <span className={styles.addNewFolderIcon}>
            <BiPlus className="text-mainBlue text-[1.2rem]" />
          </span>
          <p>Add a new folder</p>
        </div>
      </article>
    </section>
  );
};

const styles = {
  folderContainer:
    "w-full grid gap-4 mt-8 pb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 max-w-[1200px] mx-auto px-6 ",
  addNewFolderWrapper:
    "w-full shadow-md p-2 rounded-md hover:shadow-lg h-[300px] bg-white",
  addNewFolderFlex:
    "w-full h-full rounded-md border-dashed border-2 border-mainBlue flex items-center justify-center flex-col gap-3 cursor-pointer",
  addNewFolderIcon:
    "w-[40px] h-[40px] rounded-full border-dashed border-2 border-mainBlue flex items-center justify-center",
};

export default FoldersList;
