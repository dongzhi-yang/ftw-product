import React from 'react';
import css from './SectionContact.module.css';
import PropTypes from 'prop-types';

const SectionContact = props => {
  return (
    <div className={css.contactSection}>
      <div className={css.blocks}>
        <div className={css.contact}>
          <div className={props.sectionClass}>
            <div className={css.contactContainer}>
              <div>
                <h1>Get In Touch</h1>
                <h2>(888) 123-4562</h2>

                <div className={css.contactLocation}>
                  <h3>Location</h3>
                  <p>2345 Divi St</p>
                  <p>San Francisco, CA 94222</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.send}>
          <div className={props.sectionClass}>
            <div className={css.sendContainer}>
              <h1 className={css.sendTitle}>Send a Message</h1>
              <div className={css.sendInputs}>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email Address"></input>
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionContact.defaultProps = { sectionClass: null };

const { string } = PropTypes;

SectionContact.propTypes = {
  sectionClass: string,
};

export default SectionContact;
