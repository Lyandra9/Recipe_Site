import styles from "./styles.module.scss";
import { useStatesContext } from "../../context/StatesContext";
import Recipe from "../../components/Recipe";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import NothingFound from "../../components/NothingFound";
import Filter from "../../components/Filter";

export default function Result() {
  const [loading, setLoading] = useState(true);
  const { recipes, setRecipes, query } = useStatesContext();

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

  return (
    <>
      {loading && <Loading />}
      {!loading && recipes.length != 0 && (
        <div className={styles.resultDiv}>
          <Filter />
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
      )}
      {!loading && recipes.length == 0 && <NothingFound />}
    </>
  );
}
