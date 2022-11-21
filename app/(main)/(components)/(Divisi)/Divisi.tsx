import Image from "next/image";

import styles from "./Divisi.module.css";

import { lato, poppins } from "../../../../lib/fonts";

import logoOlim from "../../../../public/logo-olim.png";
import logoTeknik from "../../../../public/logo-teknik.png";
import logoKti from "../../../../public/logo-kti.png";

const allCard = [
  {
    heading: "Olimpiade",
    image: logoOlim,
  },
  {
    heading: "Teknik",
    image: logoTeknik,
  },
  {
    heading: "Karya Tulis Ilmiah",
    image: logoKti,
  },
];

export default function Divisi() {
  return (
    <section id="divisi" className={styles.divisi}>
      <h1 className={`${lato.className} ${styles.heading}`}>Divisi</h1>
      <div className="flex one three-1200">
        {allCard.map((card) => (
          <div key={card.heading} className={styles.upperMappedDiv}>
            <Image
              src={card.image}
              alt={`Logo dari divisi ${card.heading}`}
              width={215}
              height={215}
              className={styles.heroImg}
            />
            <article className={`card ${styles.card}`}>
              <footer className={styles.cardFooter}>
                <h2
                  style={{ fontWeight: "600", textAlign: "center" }}
                  className={lato.className}
                >
                  {card.heading}
                </h2>

                <p className={`${poppins.className} ${styles.text}`}>
                  Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                  sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit
                  amet, qui minim labore adipisicing minim sint cillum sint
                  consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim
                  labore adipisicing minim sint cillum sint consectetur
                  cupidatat.
                </p>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
