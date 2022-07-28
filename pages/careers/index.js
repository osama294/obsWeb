/** @format */

import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.scss";
import Careercard from "../../components/careercard";
import { useEffect } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://obstechnologia.com/webAdmin/api/jobshow");
  const data = await res.json();

  return {
    props: {
      jobs: data,
    },
  };
}

function Careers({ jobs }) {
  useEffect(() => {
    console.log("=====>>", jobs);
  }, []);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.career}>
          <p className={styles.cayh}>Careers at OBS Technologia</p>
          <div className={styles.line}></div>
          <p className={styles.cabh}>
            We are always looking out for Talented Individuals.<br></br> Check
            out our recent job openings!
          </p>
          <div className={styles.career_row}>
            {jobs?.map((job, index) => {
              return <Careercard data={job} key={index} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Careers;
