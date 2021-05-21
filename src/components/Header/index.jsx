import styles from "./header.module.scss";
import { FiSearch } from "react-icons/fi";
import { SiCodechef } from "react-icons/si";
import Link from "next/link";
import { useStatesContext } from "../../context/StatesContext";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { setQuery, search, setSearch, query } = useStatesContext();

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    router.push(`/Result`);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.headerContainer}>
      <header>
        <Link href="/">
          <h1>
            <SiCodechef />
            <span>Receitineas</span>
          </h1>
        </Link>
        <form onSubmit={getSearch} className={styles.search_form}>
          <input
            className={styles.search_bar}
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className={styles.search_button} type="submit">
            {<FiSearch />}
          </button>
        </form>
      </header>
      <div className={styles.recipeDiv}></div>
    </div>
  );
}
