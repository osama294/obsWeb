/** @format */

import React from "react";
import RoleDesc from "../../components/roleDesc";
import styles from "../../styles/Home.module.scss";
import RoleInfo from "../../components/roleInfo";
import RoleResp from "../../components/roleResp";
import SubmitButtom from "../../components/submitButton";
import Header from "../../components/header";
import Link from "next/link";

import Footer from "../../components/footer";
function ReactNativeDeveloper() {
  const job_title = "React Native Developer- Full time / Onsite";
  const role_info =
    "We are looking for a React Native Developer. If you are a hard working  individual who tends to think out of the box, then; we would like to meet you.";
  const role_resp = [
    "Design and implement user interface components for JavaScript-based web and mobile applications using React ecosystem",
    "Work as a part of a small team that includes other react native developers, designers, QA experts, and managers",
    "Build app and UI components from prototypes and wireframes",
    "Work with native modules as and when required",
    "Use Native APIs for tight integrations with both platforms – Android and iOS",
    "Write automated tests to ensure error-free code and performance",
    "Improve front-end performance by eliminating performance bottlenecks",
    "Create front-end modules with maximum code reusability and efficiency",
    "Implement clean, smooth animations to provide an excellent user interface",
    "Work with third-party dependencies and APIs",
    "Work with Redux architecture to improve performance of the websites/mobile apps",
    "Coordinate with the cross-functional teams to build apps in stipulated time/budget.",
  ];
  const submitStyle = {
    padding: "1.7% 16.3%",
    backgroundColor: "black",
    color: "white",
    fontSize: "24px",
    lineHeight: "29.6px",
    borderRadius: "50px",
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.contain}>
          <div className={styles.heading}>
            <h3 className={styles.title}>{job_title}</h3>
            <hr className={styles.hr1} />
            <h2 className={styles.desc}>
              Creative - Full time - Islamabad - Pakistan
            </h2>
          </div>
          <RoleInfo role_info={role_info} />
          <RoleResp role_resp={role_resp} />
          <RoleDesc
            salary='Market Competitive'
            location='I-8 Markaz Islamabad'
          />
          <Link href='/careers/forum'>
            <div className={styles.submit_btn_container}>
              <p className='submit' style={submitStyle}>
                Apply for this Job
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ReactNativeDeveloper;
