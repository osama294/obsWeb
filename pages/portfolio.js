import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import { motion } from "framer-motion";
import Image from "next/image";
import LoadingSpinner from "../components/spinner";
import Footer from "../components/footer";
import error from "../public/err.png";
import Blur from "../components/blur";
function Portfolio() {
  const [discription, setDiscription] = useState([]);
  const [poster, setPoster] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const domain = "https://obstechnologia.com/webAdmin/";
  // const poster = [];

  useEffect(() => {
    setIsLoading(true);
    fetch("http://globaltechnologia.org/webAdmin/api/portshow")
      .then((res) => {
        setIsLoading(true)
        return res.json();
      })
      .then((res) => {
        const heading = res;
        setPoster(heading.splice(-3));
        heading.splice(-3);
        setDiscription(heading);
        // setIsLoading(false);

      });
      setTimeout(()=> {
        console.log("2222222222222222222")
        setIsLoading(false)}, 1000)
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
                }}><Blur/></motion.div>  :

                discription.length != 0 ? 
     <motion.div
        className={styles.container}
        variants={{
          hidden: { scale: 0.999999, opacity: 0.6 },
          visible: {
            scale: 1,
            opacity: 0.5,
            transition: {
              delay: 2,
            },
          },
        }}
      >
        <Header />
        <div className={styles.portfolio_wrapper}>
          <h2 className={styles.ph}>SELECTED PROJECTS</h2>
          <div className={styles.phl}></div>
          <p className={styles.text}>Take a look at some of our best work!</p>
          {   discription.map((data, index) => {
            if (data.id % 2 != 0) {
              return (<>
             
             <div key={index} className={styles.c1}>
                  <motion.div
                    className={styles.conl}
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.1 },
                      padding: 20,
                      border: `1px solid #ffd400`,
                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                      borderRadius: 10,
                    }}
                  >
                    <h3>{data.heading}</h3>
                    <p>{data.discription}</p>
                  </motion.div>
                  <motion.div
                    className={styles.conr}
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.1 },
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <figure>
                      <Image
                        loader={() => {
                          return domain + data.url;
                        }}
                        src={domain + data.url}
                        alt="OBS TECHNOLOGIA"
                        width={data.width}
                        height={data.height}
                      />
                    </figure>
                  </motion.div>
                </div>
                </>
              );
            } else {
              return (<>
                          <div key={index} className={styles.c2}>
                  <motion.div
                    className={styles.conl}
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.1 },
                      padding: 20,
                      border: `1px solid #ffd400`,
                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                      borderRadius: 10,
                    }}
                  >
                    <h3>{data.heading}</h3>
                    <p>{data.discription}</p>
                  </motion.div>
                  <motion.div
                    className={styles.conr}
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.1 },
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <figure>
                      <Image
                        loader={() => {
                          return domain + data.url;
                        }}
                        src={domain + data.url}
                        alt="OBS TECHNOLOGIA"
                        width={data.width}
                        height={data.height}
                      />
                    </figure>
                  </motion.div>
                </div>
                 </>
              );
            }
            } ) }

          <h2
            className={styles.ph}
            style={{ color: "#FFD400", padding: "150px 0px 0px 0px " }}
          >
            GRAPHIC DESIGN PROJECTS
          </h2>
          <div className={styles.phl}></div>
          <p className={styles.text}>Take a look at some of our Design Work!</p>

          <div className={styles.pwork}>
            {poster.map((data, index) => {
              return (
               <>
                  {" "}
                  <figure key={index}>
                    <Image
                      loader={() => {
                        return domain + data.url;
                      }}
                      src={domain + data.url}
                      alt="OBS TECHNOLOGIA"
                      width={data.width}
                      height={data.height}
                    />
                  </figure>
                  <h3>{data.heading}</h3>
                </>
              );
            })}
          </div>
        </div>
        <Footer />
      </motion.div>
      :<><Header/>
                       <figure className={styles.center}>
                       <Image src={error} alt="web" width={450} height={340} />
                    </figure>
      </>
      
      
      }
    </>
  );
}

export default Portfolio;
