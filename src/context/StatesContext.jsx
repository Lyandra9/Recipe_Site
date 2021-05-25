import { createContext, useContext, useState } from "react";

const StatesContext = createContext();

export function StatesWrapper({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("yolk");
  const [search, setSearch] = useState("");
  const [recipesFiltered, setRecipesFiltered] = useState([]);

  return (
    <StatesContext.Provider
      value={{
        recipes,
        setRecipes,
        query,
        setQuery,
        search,
        setSearch,
        recipesFiltered,
        setRecipesFiltered,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
}

export function useStatesContext() {
  return useContext(StatesContext);
}
