/** @format */

import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.scss";
import Careercard from "../../components/careercard";
import { useEffect, useState } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";

// export async function getServerSideProps() {
//   const res = await fetch("https://obstechnologia.com/webAdmin/api/jobshow");

//   try {
//     const data = await res.json();
//   } catch (error) {
//     console.log("BREAKPOINT", error);
//   }

//   const data = await res.json();

//   return {
//     props: {
//       jobs: data,
//     },
//   };
// }

function Careers() {
  const [job, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://obstechnologia.com/webAdmin/api/jobshow")
      .then((res) => {
        setIsLoading(true);
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((res) => {
        console.log("&&&&&&&&&&&&&", res);
        if (res?.length > 0) {
          const job = res;
          setJob(job);
          setIsLoading(false);
        } else {
          return;
        }
      });
    console.log("EEEEEE", job);
  }, []);

  return (
    <>
      <ErrorBoundary>
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
              {job?.map((job, index) => {
                return <Careercard data={job} key={index} />;
              })}
            </div>
          </div>
        </div>

        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default Careers;
