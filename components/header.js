import React from "react";
import logo from "../public/logo.png";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Nav from "./nav";
import hamburger from "../public/ham.png";
function Header() {
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$", nav);
    setNav(!nav);
  };

  return (
    <>
      <header className={styles.header}>
        <Link href="/"><figure className={styles.hlogo}>
          <Image
            src={logo}
            alt="OBS TECHNOLOGIA"
            layout="fill"
            objectFit="contain"
          />
        </figure></Link>
        <ul className={styles.center_nav}>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
              // boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
              padding: 10,
              borderRadius: 30,
              border: `1px solid #ffd400`,
            }}
          >
            <Link href="/">Agency</Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
              padding: 10,
              border: `1px solid #ffd400`,
              borderRadius: 30,
            }}
          >
            <Link href="/portfolio">Portfolio</Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
              padding: 10,
              border: `1px solid #ffd400`,
              borderRadius: 30,
            }}
          >
            <Link href="/#services">Services </Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
              padding: 10,
              border: `1px solid #ffd400`,
              borderRadius: 30,
            }}
          >
                 <Link href="/careers">Careers</Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
              padding: 10,
              border: `1px solid #ffd400`,
              borderRadius: 30,
            }}
          >
            <Link href="/#contact" smooth="true">
              Contact
            </Link>
          </motion.li>
        </ul>
        <ul className="right-nav">
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
              padding: 10,
              border: `1px solid #ffd400`,
              borderRadius: 30,
            }}
          >
            {" "}
            <Link href="/#about" smooth="true">
              About
            </Link>
          </motion.li>
          <Link  href="/Hire" smooth="true"><li className={styles.btn}>Hire us</li></Link>
        </ul>
        <span onClick={navHandle} className={styles.navbar}>
          <figure className={styles.ham}>
            <Image
              src={hamburger}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </span>
      </header>
      {nav && <Nav setNav={setNav} />}
    </>
  );
}

export default Header;
