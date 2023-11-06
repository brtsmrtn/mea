import React from "react";
import styles from "@/components/About.module.scss";

export const About = ({open, onOpen}) => {
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    if (open) setBlink(false);
  }, [open]);

  return (
    <div className={styles.About}>
      <img
        src="/img/about.png"
        className={`${styles.icon} ${blink ? styles.blinker : ""} ${
          open ? styles.invert : ""
        }`}
        onClick={onOpen}
      />
      <div className={`${styles.section} ${open ? "" : styles.hidden}`}>
        <div>
          <span>
            <strong>XY</strong>
          </span>
        </div>
        <div>
          <span className={styles.lighter}>About....</span>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div className={styles.about_os}>
            <img src="/img/oceanspace.png" />
          </div>
          <div className={styles.about_oa}>
            <img src="/img/OA_type_white.png" />
          </div>
          <div className={styles.about_ac}>
            <img src="/img/tba21-academy.png" />
          </div>
        </div>
        <div>
          <div>
            <img src="./img/04_SofiaLemosPortraits_Cordoba_220704_LC_HQ-1200x800 (Medium).jpg" />
            <span className={styles.courtesy}>Sofia Lemos. Photo: XY</span>
            <br />
            <br />
            <span className={styles.lighter}>
              Sofia Lemos is a curator and writer. She is Curator at
              TBA21–Academy, where she leads Meandering. From 2018–2021, she was
              Curator of Public Programmes and Research at Nottingham
              Contemporary and was Associate Editor at The Contemporary Journal.
              Recently, Lemos was Associate Curator of Public Programmes to the
              2nd Riga International Biennial of Contemporary Art—RIBOCA (2020),
              with previous curatorial and research roles at HKW, Berlin,
              PRAXES, Berlin, DRAF, London, and MACBA, Barcelona. Her writing
              has been featured in various contemporary art and culture
              publications as well as exhibition catalogues and artist
              monographs.
              <br />
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
