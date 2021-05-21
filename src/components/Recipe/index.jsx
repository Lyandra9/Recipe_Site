import styles from "./recipe.module.scss";
import { useRouter } from "next/router";

export default function Recipe({
  title,
  cuisine,
  img,
  healthLabels,
  cautions,
}) {
  const router = useRouter();

  function send() {
    router.push(`/${title}`);
  }
  return (
    <div className={styles.recipe} onClick={send}>
      <img src={img} alt="" />
      <div className={styles.recipeInfoDiv}>
        <div className={styles.labels}>
          <span>{cuisine}</span>
          <span>{healthLabels[0]}</span>
          <span>{cautions[0]}</span>
        </div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
