import styles from "./loading.module.scss";
export default function Loading() {
  return (
    <div className={styles.loadingPageBigDiv}>
      <h1>Carregando</h1>
      <div className={styles.animationDiv}>
        <div className={styles.col1}>
          <div className={styles.square}></div>
        </div>

        <div className={styles.col2}>
          <div className={styles.square}></div>
        </div>

        <div className={styles.col3}>
          <div className={styles.square}></div>
        </div>

        <div className={styles.col4}>
          <div className={styles.square}></div>
        </div>

        <div className={styles.col5}>
          <div className={styles.square}></div>
        </div>
      </div>
    </div>
  );
}
