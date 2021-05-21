import Header from "../Header";
import styles from "./NothingFound.module.scss";
import Footer from "../Footer";
import { FaRegSadCry } from "react-icons/fa";

export default function NothingFound({ query }) {
  return (
    <>
      <Header />
      <div className={styles.NFDiv}>
        <h1>Sorry, no result found to "{query}"</h1>
        <h2>Try looking for any mispellings and use keywords</h2>
        <FaRegSadCry />
      </div>
      <Footer />
    </>
  );
}
