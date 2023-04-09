import React from "react";
import { BiSave } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useGlobalContext } from "../../../context";

const AddFolderModal = () => {
  const { setAddFolderModalOpen } = useGlobalContext();
  return (
    <section className="w-full h-screen bg-[rgba(0,0,0,.5)] fixed top-0 left-0 z-[2] flex items-center justify-center">
      <div className="w-[90vw] p-6 rounded-md bg-white max-w-[450px] modal">
        <header className="flex w-full items-center justify-between mb-2">
          <h2 className="text-mainBlue font-bold text-[1rem] mb-1 leading-[1]">
            Add Folder
            <span className="inline-block ml-2 align-middle">
              <BiSave />
            </span>
          </h2>
          <span
            className="text-[24px] font-bold cursor-pointer text-red-600"
            onClick={() => {
              setAddFolderModalOpen(false);
            }}
          >
            <MdClose />
          </span>
        </header>
        <div className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="folder-name"
              className="text-[1rem] font-bold text-gray-900 mb-1 block"
            >
              Folder name
            </label>
            <input
              type="text"
              placeholder="Folder name"
              className="input-field"
              id="folder-name"
            />
          </div>
          <div>
            <label
              htmlFor="folder-cover"
              className="text-[1rem] font-bold text-gray-900 mb-1 block"
            >
              Folder cover photo
            </label>
            <input
              type="file"
              accept="image/*"
              className="input-field"
              id="folder-cover"
            />
          </div>
          <button
            type="submit"
            className="input-field text-white bg-mainBlue font-bold"
          >
            Add Folder
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddFolderModal;
