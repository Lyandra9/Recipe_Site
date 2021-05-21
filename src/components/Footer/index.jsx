import styles from "./footer.module.scss";
import { SiCodechef, SiReddit } from "react-icons/si";
import { AiFillInstagram, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { BiMap } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.col1}>
        <SiCodechef />
      </div>
      <div className={styles.col2}>
        <ul>
          Contact Info
          <li>
            <AiFillPhone />
            <span>55 5555-5555</span>
          </li>
          <li>
            <AiOutlineMail />
            <span>example@example.com</span>
          </li>
          <li>
            <BiMap />
            <span>Adress Example, Street Example</span>
          </li>
        </ul>
      </div>
      <div className={styles.col3}>
        <h3>Social Media</h3>
        <ul>
          <li>
            <a href="">
              <AiFillInstagram />
            </a>
          </li>

          <li>
            <a href="">
              <FaTwitterSquare />
            </a>
          </li>

          <li>
            <a href="">
              <SiReddit />
            </a>
          </li>

          <li>
            <a href="">
              <RiWhatsappLine />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
