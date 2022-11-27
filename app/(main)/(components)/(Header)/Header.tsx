"use client";

import { useEffect, useRef } from "react";

import styles from "./Header.module.css";
import { play } from "../../../../lib/fonts";

import Starback from "starback";

export default function Header() {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    new Starback(canvasRef.current, {
      type: "dot",
      quantity: 115,
      direction: 1,
      backgroundColor: ["#0e1118"],
      randomOpacity: true,
    });
  }, []);

  return (
    <section id="header" className={styles.header}>
      <canvas className={styles.starsContainer} ref={canvasRef}></canvas>
      <div className={styles.container}>
        <h1 className={`${styles.firstHeading} ${play.className}`}>SCIO 12</h1>
        <h3 className={`${styles.secHeading} ${play.className}`}>
          SMA Negeri 12 Kota Bekasi
        </h3>
      </div>
    </section>
  );
}
