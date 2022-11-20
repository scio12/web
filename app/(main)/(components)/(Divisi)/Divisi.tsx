import styles from "./Divisi.module.css";

import { lato, poppins } from "../../../../lib/fonts";

const allCard = [
  {
    heading: "Olimpiade",
  },
  {
    heading: "Teknik",
  },
  {
    heading: "Karya Tulis Ilmiah",
  },
];

export default function Divisi() {
  return (
    <section id="divisi" className={styles.divisi}>
      <h1 className={`${lato.className} ${styles.heading}`}>Divisi</h1>
      <div className="flex one three-1200">
        {allCard.map((card) => (
          <div key={card.heading}>
            <article className="card">
              <footer>
                <h2
                  style={{ fontWeight: "600", textAlign: "center" }}
                  className={lato.className}
                >
                  {card.heading}
                </h2>

                <p className={poppins.className}>
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
