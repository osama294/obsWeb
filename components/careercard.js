/** @format */

import React from "react";
import styles from "../styles/Home.module.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
function Careercard({ data }) {
  const [show, setShow] = useState(true);
  const domain = "https://obstechnologia.com/webAdmin/";
  return (
    <>
      <Link href={`/careers/${data.title}`}>
        <motion.div
          layout
          transition={{ layout: { duration: 0.4, type: "spring" } }}
          onClick={() => setShow(!show)}
          className={show ? styles.c_card : styles.cd_card}>
          <figure className={styles.cardb}>
            <Image
              loader={() => {
                return domain + data.url;
              }}
              src={domain + data.url}
              alt='member'
              layout='fill'
              objectFit='cover'
              priority
              className={show ? styles.barimg : styles.cardimg}
            />
          </figure>{" "}
          {/* <motion.div Layout className={show ? styles.c_card : styles.cd_card}> */}
          <motion.div className={styles.tab}>
            <motion.p
              layout='position'
              className={show ? styles.vertical : styles.horizontal}>
              {/* <motion.p className={show ? styles.vertical : styles.horizontal}> */}
              {data.title}
            </motion.p>
            <motion.div className={styles.arrow} layout='position'>
              <BsArrowUpCircleFill />
            </motion.div>
          </motion.div>
        </motion.div>
      </Link>
    </>
  );
}

export default Careercard;
