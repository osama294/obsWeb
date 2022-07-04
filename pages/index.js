import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Banner from "../components/banner";
import Header from "../components/header";
import Content from "../components/content";
import WhoAreWe from "../components/whoarewe";
import Portfolio from "../components/portfolio";
import Carousel from "../components/carousel";
import Ourteam from "../components/ourteam";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { motion } from "framer-motion";
// import { useEffect } from "react";

// import LinkZZZZ from "next/link";

export default function App() {
  return (
    <>
      <Head>
        <title>OBS TECHNOLOGIA</title>
        <meta name="viewport" content="width=device-width" />
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <motion.div
        className={styles.container}
        variants={{
          hidden: { scale: 0.999999, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <Header />
        <Banner />
        <Content />
        <WhoAreWe />
        <Portfolio />
        <Carousel />
        <Ourteam />
        <Contact />
        <Footer />
        {/* <Testimonials /> */}
      </motion.div>
    </>
  );
}
