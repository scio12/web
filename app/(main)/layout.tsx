"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./Layout.module.css";
import { lato, poppins } from "../../lib/fonts";
import scioImage from "../../public/kir-transparent.png";

const navItems = [
  { display: "Siapa Kami ?", section: "siapa-kami" },
  { display: "Divisi", section: "divisi" },
  { display: "Bergabung", section: "bergabung" },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [checked, setChecked] = useState<boolean>(false);
  const [transparan, setTransparan] = useState<boolean>(true);

  useEffect(() => {
    const heading = document.querySelector("#header") as Element;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio <= 0.85) setTransparan(false);
            else setTransparan(true);
          } else {
            if (transparan) setTransparan(false);
          }
        }),
      { threshold: [1, 0.89, 0.86, 0.85, 0.8, 0.75, 0.7, 0.5, 0.25, 0] }
    );

    observer.observe(heading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className={transparan ? styles.transparan : ""}>
        <a
          href="#"
          className={`brand ${lato.className}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            className="logo"
            width={35}
            height={35}
            src={scioImage}
            alt="Gambar logo scio 12"
          />
          <span>SCIO 12</span>
        </a>

        <input
          id="bmenub"
          type="checkbox"
          className="show"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <label htmlFor="bmenub" className="burger pseudo button">
          &#8801;
        </label>

        <div className={`menu ${poppins.className}`}>
          {navItems.map((item) => (
            <a
              key={item.section}
              className="pseudo button"
              onClick={() => {
                const element = document.querySelector(
                  `#${item.section}`
                ) as Element;
                element.scrollIntoView({ behavior: "smooth" });

                if (checked) setChecked(false);
              }}
            >
              {item.display}
            </a>
          ))}
        </div>
      </nav>

      {children}
    </>
  );
}
