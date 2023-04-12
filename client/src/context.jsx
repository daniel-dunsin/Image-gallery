/**
 * Manages important global states
 */

import React, { useEffect, useState } from "react";
import { useGetAllFolders } from "./api/hooks/useFolders";

// create context
const AppContext = React.createContext({});

// App provider - Wraps and app and makes the states available globally
const AppProvider = ({ children }) => {
  const [addFolderModalOpen, setAddFolderModalOpen] = useState(false);



  return (
    <AppContext.Provider
      value={{
        addFolderModalOpen,
        setAddFolderModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook to get all the states
const useGlobalContext = () => React.useContext(AppContext);

export { AppProvider, useGlobalContext };
