/** @format */

import React from "react";
import RoleDesc from "../../components/roleDesc";
import styles from "../../styles/Home.module.scss";
import RoleInfo from "../../components/roleInfo";
import RoleResp from "../../components/roleResp";
import Link from "next/link";

import SubmitButtom from "../../components/submitButton";
import Header from "../../components/header";
import Footer from "../../components/footer";
function GraphicDesigner() {
  const job_title = "Graphic Designer - Full time / Onsite";
  const role_info =
    "We are looking for a UI/UX & Graphic Designer. If you are a creative individual who tends to think out of the box, then; we would like to meet you.";
  const role_resp = [
    "Understand and ascertain requirements from clients.",
    "Must be able to design modern mobile and web app designs for various theme-based requirements.",
    "Design graphic user interface elements, like menus, tabs, and widgets.",
    "Adhere to the latest UI/UX best practices.",
    "Design occasional social media posts, and manage other small design-related tasks.",
    "We are looking for someone with At least 1 year of Proven work experience as a UI/UX Designer or a graphic designer.",
    "Strong portfolio of design projects.",
    "Minimum Qualification: Bachelor’s in Computer Science, Computer Arts, or similar fields.",
    "Strong understanding of wireframing and prototyping.",
    "Up-to-date knowledge of design software (e.g Adobe Illustrator, Adobe XD, Figma)",
    "A candidate with working knowledge of premiere pro would be preferred.",
    "You should have excellent communication and managing skills.",
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

export default GraphicDesigner;
