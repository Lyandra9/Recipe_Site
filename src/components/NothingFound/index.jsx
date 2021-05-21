import styles from "./NothingFound.module.scss";
import { FaRegSadCry } from "react-icons/fa";
import { useStatesContext } from "../../context/StatesContext";

export default function NothingFound() {
  const { query } = useStatesContext();
  return (
    <div className={styles.NFDiv}>
      <h1>Sorry, no result found to "{query}"</h1>
      <h2>Try looking for any mispellings and use keywords</h2>
      <FaRegSadCry />
    </div>
  );
}
