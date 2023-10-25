import React from "react";
import styles from "../MainPage/styles.module.css";
import { Video } from "../../components/Video/Video";

export const MainPage = () => {

  return (
    <>
      <div className={styles.root}>
        <Video />
      </div>
    </>
  );
};
