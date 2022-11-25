import styles from "./SiapaKami.module.css";
import Image from "next/image";

import penjelasanLogoImg from "../../../../public/penjelasan-logo.png";

import { lato } from "../../../../lib/fonts";

export default function SiapaKami() {
  return (
    <section id="siapa-kami" className={styles.siapaKami}>
      <h1 className={`${lato.className} ${styles.heading}`}>Siapa Kami?</h1>
      <div className="flex one two-1200">
        <div>
          <p className={styles.text}>
            KIR adalah singkatan dari Kelompok Ilmiah Remaja, ekstrakurikuler
            ini bertujuan untuk mengembangkan bakat dan minat siswa khususnya
            dalam bidang ilmiah dan mengikuti kompetisi atau perlombaan. Latar
            belakang terbentuknya ekstrakurikuler ini karena belum ada
            organisasi yang fokus dibidang akademik atau keilmiahan.
          </p>
        </div>
        <div>
          <p className={styles.text}>
            Tanggal dibentuk ekstrakurikuler KIR ini pada tanggal 16 Juli 2016,
            diresmikan pada 21 Juli 2016. SCIO 12 diambil dari bahasa latin{" "}
            <i>SCIO</i> yang memiliki arti <i>Aku Tahu</i>. Empat lingkaran
            sebagai pengganti huruf "O" dengan masing-masing warna kuning, biru,
            merah, dan hijau melambangkan setiap bidang studi.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.penjelasanImage}
            src={penjelasanLogoImg}
            alt="Gambar yang berisi penjelasan makna dari warna logo ekstrakurikuler KIR."
            width={920}
          />
        </div>
      </div>
    </section>
  );
}
