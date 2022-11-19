import styles from "./Header.module.css";
import { play } from "../../../../lib/fonts";

export default function Header() {
  return (
    <section id="header" className={styles.header}>
      <h1 className={`${styles.firstHeading} ${play.className}`}>SCIO 12</h1>
      <h3 className={`${styles.secHeading} ${play.className}`}>
        SMA Negeri 12 Kota Bekasi
      </h3>
    </section>
  );
}
