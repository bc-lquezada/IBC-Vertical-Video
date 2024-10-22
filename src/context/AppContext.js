import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  return (
    <AppContext.Provider
      value={{
        showSplash,
        setShowSplash,
        title,
        setTitle,
        description,
        setDescription,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppDataContext = () => {
  return useContext(AppContext);
};
