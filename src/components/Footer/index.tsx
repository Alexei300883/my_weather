import React from "react";
import style from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={style["wrapper-example"]}>
      <div className={style.footerWrapper}>
        <p>Учебная работа ННГУ. Курс React_2021</p>
      </div>
    </footer>
  );
};

export default Footer;
