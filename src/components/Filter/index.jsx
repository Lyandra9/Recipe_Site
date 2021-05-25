import styles from "./filter.module.scss";
import { useStatesContext } from "../../context/StatesContext";

export default function Filter() {
  const { recipes, query, recipesFiltered, setRecipesFiltered } =
    useStatesContext();
  let Array = [];
  let newArray = [];

  function cuisineTypeFilter() {
    recipes.map((el) => {
      if (el.recipe.cuisineType) {
        Array.push(el.recipe.cuisineType[0]);
      }
    });

    Array = Array.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

    newArray = [...new Set(Array)];
  }

  cuisineTypeFilter();
  return (
    <div className={styles.filterBigDiv}>
      <h2>Searching for {query}</h2>
      <div className={styles.searchDiv}>
        <h2>Filters</h2>
        <div className={styles.cuisineTypeFilter}>
          {newArray.map((el) => {
            return (
              <>
                <label htmlFor={el}>{el}</label>
                <input type="checkbox" name={el} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
