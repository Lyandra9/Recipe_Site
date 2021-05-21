import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import styles from "../styles/recipe_page.module.scss";

export default function Post() {
  const router = useRouter();
  const { recipe_page } = router.query;
  const [required, setRequired] = useState("Carregando");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${recipe_page}&app_id=39bbd1e5&app_key=a34c947689c6b0811eafb3501d78991e`
      );
      const data = await response.json();
      setRequired(data.hits[0]);
      console.log(required);

      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <div className={styles.recipePageBigDiv}>
          <h1>{required.recipe.label}</h1>
          <div className={styles.alertsDiv}>
            <span
              className={!required.recipe.cautions[0] && styles.spanAlertEmpty}
            >
              {"Warning: " + required.recipe.cautions}
            </span>

            <span
              className={
                !required.recipe.dietLabels[0] && styles.spanAlertEmpty
              }
            >
              {required.recipe.dietLabels}
            </span>

            <span
              className={!required.recipe.dishType && styles.spanAlertEmpty}
            >
              {required.recipe.dishType}
            </span>
          </div>
          <img src={required.recipe.image} alt="" />
          <div className={styles.recipeContentDiv}>
            <div className={styles.col1}>
              <h2>Ingredients:</h2>
              <ul>
                {required.recipe.ingredients.map((i) => {
                  return <li>{i.text}</li>;
                })}
              </ul>
              <h3>{"Source: " + required.recipe.source}</h3>
            </div>
            <div className={styles.col2}>
              <h2> Info: </h2>
              <h3>
                Cuisine Type:
                <span>{required.recipe.cuisineType || " Not informed"}</span>
              </h3>
              <h3>
                Calories:
                <span>
                  {Math.round(required.recipe.calories) || " Not informed"}
                  kcal
                </span>
              </h3>
              <h3>
                Yield:
                <span>{required.recipe.yield || " Not informed"}</span>
              </h3>
              <h3>
                Total Weight:
                <span>
                  {Math.round(required.recipe.totalWeight) || " Not informed"}
                </span>
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
