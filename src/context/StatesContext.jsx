import { createContext, useContext, useState } from "react";

const StatesContext = createContext();

export function StatesWrapper({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("mint");
  const [search, setSearch] = useState("");

  return (
    <StatesContext.Provider
      value={{ recipes, setRecipes, query, setQuery, search, setSearch }}
    >
      {children}
    </StatesContext.Provider>
  );
}

export function useStatesContext() {
  return useContext(StatesContext);
}
