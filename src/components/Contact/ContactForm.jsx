import React from 'react';
import Title from '../Title.styled';
import styles from '../../css/contact.module.css';

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form className={styles.form}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={styles.formControl}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className={styles.formControl}
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Message"
              className={styles.formControl}
            />
          </div>
          <div>
            <input
              type="Submit"
              value="Submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
