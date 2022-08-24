/** @format */

import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.scss";
import Careercard from "../../components/careercard";
import { useEffect, useState } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import Blur from "../../components/blur";
import { motion } from "framer-motion";
import error from "../../public/err.png"
import Image from "next/image";


function Careers() {
  const [job, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://globaltechnologia.org/webAdmin/api/jobshow")
  
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
      setTimeout(()=> {
        console.log("2222222222222222222")
        setIsLoading(false)}, 2000)
    console.log("EEEEEE", job);
  }, []);

  return (
    <>
  { isLoading ? <motion.div  variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.1,
                    },
                  },
                }}><Blur/></motion.div>   :
                
                job.length != 0 ? <ErrorBoundary>
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
    </ErrorBoundary> :
    <><Header/>
    <figure className={styles.center}>
    <Image src={error} alt="web" width={450} height={340} />
 </figure>
</>
    }
    </>
  );
}

export default Careers;
