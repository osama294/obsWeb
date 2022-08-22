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
function SEOExecutive() {
  const job_title = "Frontend Developer- Full time / Onsite";
  const role_info =
    "We are looking for a Frontend Developer. If you are a hard working  individual who tends to think out of the box, then; we would like to meet you.";
  const role_resp = [
    "Use markup languages like HTML to create user-friendly web pages",
    "Maintain and improve website",
    "Optimize applications for maximum speed",
    "Design mobile-based features",
    "Collaborate with back-end developers and web designers to improve usability",
    "Get feedback from, and build solutions for, users and customers",
    "Write functional requirement documents and guides",
    "Create quality mockups and prototypes",
    "Help back-end developers with coding and troubleshooting",
    "Ensure high quality graphic standards and brand consistency",
    "Stay up-to-date on emerging technologies",
    "Proven work experience as a Front-end developer",
    "Hands on experience with markup languages",
    "Experience with JavaScript, CSS and jQuery",
    "Familiarity with browser testing and debugging",
    "In-depth understanding of the entire web development process (design, development and deployment)",
    "BSc degree in Computer Science or relevant field",
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

export default SEOExecutive;
