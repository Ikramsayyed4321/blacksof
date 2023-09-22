import Button from "../Button/Button";
import styles from "./Contact.module.css";

import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("ikramsayyed");
  const [email, setEmail] = useState("support4321@gmail.com");
  const [text, setText] = useState("Subscribe me");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
       <p className={styles.margintop} >Searching for <span className={styles.bold}>Augmented Development</span> Teams to steer your product Teams to steer your product towards triumphs?" <br /><br /><span  className={styles.bold}>50+  </span>  <span  className={styles.bold}>80+ </span>   <span  className={styles.bold}>60%</span> <br /></p> <span className={styles.upright}>Clients </span> <span className={styles.wordmin}>projects succesfully completed </span> <span className={styles.wordmax}>of the clients converted into long term engagement partners </span>
       
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        </div>
     
        <form className={styles.formview} onSubmit={onSubmit}>
        <h1>Fill out the form.</h1>
            <h4>Our team will touch base with you within 24 hours.</h4>
          <div className={styles.form_control}>
       
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email ID</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="country">Country</label>
            <input type="text" name="country" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="contact">Contact Number</label>
            <input type="number" name="contact" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Tell us your requirements</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      
    </section>
    
  );
};

export default ContactForm;
