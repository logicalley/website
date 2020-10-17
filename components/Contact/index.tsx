import React, { Fragment, useReducer } from 'react';
import { useRouter } from 'next/router';

import styles from './styles.module.css';

import { ContactFormReducerEnum } from '../../utils/constants';
import type { ContactFormState, ContactFormReducerAction } from '../..';


const contactFormReducer = (state: ContactFormState, action: ContactFormReducerAction): ContactFormState => {
  switch (action.type) {
    case ContactFormReducerEnum.EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case ContactFormReducerEnum.COMPLAINT:
      return {
        ...state,
        complaint: action.payload
      };
    default:
      return state;
  };
};

const initialState: ContactFormState = {
  email: '',
  complaint: ''
};

const Contact: React.FC = () => {
  const [state, dispatch] = useReducer(contactFormReducer, initialState);
  const route = useRouter();

  return (
    <section className={styles.contactContainer}>
      <h1>Contact Us</h1>

      {
        (route.query.success) ? (
          <Fragment>
            <p>Your response has been successfully submitted.</p>
            <span role="img" aria-label="Celebrate">🎉🎉</span>
          </Fragment>
        ) : (
            <form name="contact-form" data-netlify="true" method="POST" action="/help?success=true">
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  value={state.email}
                  onChange={event => dispatch({
                    type: ContactFormReducerEnum.EMAIL,
                    payload: event.target.value
                  })}
                  className={styles.inputField}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="complaint">Complaint</label>
                <textarea
                  name="complaint"
                  id="complaint"
                  value={state.complaint}
                  onChange={event => dispatch({
                    type: ContactFormReducerEnum.COMPLAINT,
                    payload: event.target.value
                  })}
                  className={styles.inputField}
                  rows={8}
                />
              </div>

              <input type="submit" className={styles.contactButton} />
            </form>
          )
      }
    </section>
  );
}

export default Contact;
