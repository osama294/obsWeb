import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import LoadingSpinner from "./spinner";

function Ourteam() {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://obstechnologia.com/webAdmin/api/teamshow")
      .then((res) => {
        setIsLoading(true);
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((res) => {
        console.log("&&&&&&&&&&&&&", res);
        if (res.length > 0) {
          const team = res;
          setTeam(team);
          setIsLoading(false);
        } else {
          return;
        }
      });
    console.log("EEEEEE", team);
  }, []);
  const domain = "https://obstechnologia.com/webAdmin/";
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.ourteam}>
          <div className={styles.wrw}>
            {" "}
            <p className={styles.yhc}>MEET OUR TALENTED TEAM</p>
            <p className={styles.bhc}>
              We are a family of 20+ talented individuals.
            </p>
          </div>
          <div className={styles.row_container}>
            {team?.map((mem, index) => {
              return isLoading ? (
                <LoadingSpinner key={index} />
              ) : (
                <motion.div
                  key={index}
                  className={styles.card}
                  whileHover={{
                    scale: 0.9999,
                    transition: { duration: 0.1 },
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                    padding: 20,
                    borderRadius: 30,

                  }}
                >
                  <figure className={styles.picture}>
                    <Image
                      loader={() => {
                        return domain + mem.url;
                      }}
                      src={domain + mem.url}
                      alt="member"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </figure>
                  <div className={styles.yc}>{index + 1}</div>
                  <div className={styles.cn}>{mem.name}</div>
                  <div className={styles.cl}></div>
                  <div className={styles.position}>{mem.designation}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourteam;
