import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Recipe from "../components/Recipe";
import Loading from "../components/Loading";
import NothingFound from "../components/NothingFound";
import { useState, useEffect } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("cinnamon");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function getAPI() {
    const timer = setTimeout(async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=39bbd1e5&app_key=a34c947689c6b0811eafb3501d78991e`
      );
      const data = await response.json();
      setRecipes(data.hits.slice(0, 9));

      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }

  useEffect(() => {
    getAPI();
  }, []);

  useEffect(() => {
    getAPI();
  }, [query]);

  return (
    <>
      {loading && <Loading />}
      {!loading && recipes.length != 0 && (
        <div>
          <Header
            search={search}
            setSearch={setSearch}
            query={query}
            setQuery={setQuery}
          />
          <div className={styles.contentDiv}>
            <h1>Showing Results for "{query}"</h1>
            <div className={styles.mapDiv}>
              {recipes.map((i) => {
                return (
                  <Recipe
                    key={i.recipe.label}
                    title={i.recipe.label}
                    cuisine={i.recipe.cuisineType}
                    img={i.recipe.image}
                    healthLabels={i.recipe.healthLabels}
                    cautions={i.recipe.cautions}
                  />
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      )}
      {recipes.length == 0 && <NothingFound query={query} />}
    </>
  );
}
