/** @format */
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.scss";
import Input from "../../components/Input";
import { RiDeleteBin7Line } from "react-icons/ri";
import Modal from "../../components/modal";
import { useState } from "react";
function Forum() {
  const [response, setResponse] = useState(""); 
   const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    // cv: "",
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log("$$$", inputs);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.name == "" || inputs.email == "" || inputs.message == "" ||inputs.lastname == "" || inputs.phone == "") {
      setShow(true);
      setResponse("Enter Required Details");
      setTimeout(function () {
        setShow(false);
      }, 5000);
      return;
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      };
      fetch("http://globaltechnologia.org/webAdmin/api/apply_job", requestOptions)
      
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          setResponse(res);
          console.log(res);
        });
      setShow(true);
      setTimeout(function () {
        setShow(false);
      }, 1000);
    }
  };
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.career}>
          <div className={styles.form}>
            <div className={styles.form_desc}>
              <h3 className={styles.form_title}>Personal Information</h3>
              <div className={styles.clear} onClick={()=>{
     setInputs({name:'',lastname:'',email:'',phone:'',cv:''}) 
              }}>
                <RiDeleteBin7Line size={38} />
                <p>Clear form</p>
              </div>
            </div>
            <hr className={styles.hr2} />
            <div className={styles.form_content}>
              <div className={styles.name}>
                <div className={styles.fieldset}>
                  <label htmlFor='name' className={styles.labels}>
                    First Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className={styles.inputs}
                    placeholder='Name'
                    value={inputs.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.fieldset}>
                  <label htmlFor='lname' className={styles.labels}>
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lastname'
                    id='lname'
                    className={styles.inputs}
                    placeholder='Last Name'
                    value={inputs.lastname}
                    onChange={handleChange}
                  />
                </div>
                {/* <input type='text' value='Last Name' className={styles.lname} /> */}
              </div>
              <div className={styles.fieldset}>
                <label htmlFor='email' className={styles.labels}>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  className={styles.inputs}
                  placeholder='Email'
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.fieldset}>
                <label htmlFor='phone' className={styles.labels}>
                  Phone
                </label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  className={styles.inputs}
                  placeholder='Phone'
                  value={inputs.phone}
                  onChange={handleChange}
                />
              </div>
              {/*   <Input
                type='email'
                value='Email Address'
                className={styles.email}
              />
              <Input
                type='number'
                value='Phone Number'
                className={styles.phone}
              />

              <input type='file' value='Resumes' className={styles.upload} />*/}
              <div className={styles.fieldset}>
                <label htmlFor='resume' className={styles.labels}>
                  Resume
                </label>
                <input
                  type='file'
                  name='cv'
                  id='cv'
                  className={styles.upload}
                  placeholder='Resume'
                  value={inputs.cv}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button
              type='submit'
              role='button'
              id='submit-btn'
              value='Submit Application'
              className={styles.buttons}
              onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {show == true && <Modal message={response} />}
      <Footer />
    </>
  );
}

export default Forum;
