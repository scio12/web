import styles from "./SiapaKami.module.css";

import { lato } from "../../../../lib/fonts";

export default function SiapaKami() {
  return (
    <section id="siapa-kami" className={styles.siapaKami}>
      <h1 className={`${lato.className} ${styles.heading}`}>Siapa Kami?</h1>
      <div className="flex one two-1200">
        <div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
          </p>
        </div>
        <div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
          </p>
        </div>
      </div>
    </section>
  );
}
