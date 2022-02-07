import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/index";
import Header from "../Header/index";
import styles from "./PageWrapper.module.scss";

const PageWrapper: React.FC = () => {
  return (
    <div className={styles.page_wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
