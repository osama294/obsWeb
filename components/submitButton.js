/** @format */

import React from "react";
import styles from "../styles/Home.module.scss";

export default function SubmitButtom(props) {
  const submitStyle = {
    padding: "1.7% 16.3%",
    backgroundColor: "black",
    color: "white",
    fontSize: "24px",
    lineHeight: "29.6px",
    borderRadius: "50px",
  };

  return (
    <div className={styles.submit_btn_container}>
      <p className='submit' style={submitStyle}>
        {props.value}
      </p>
    </div>
  );
}
