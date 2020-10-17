import React, { useReducer, FormEvent } from 'react';

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
  const handleComplaint = (event: FormEvent): void => {
    event.preventDefault();
    console.log(state);
  }

  return (
    <section className={styles.contactContainer}>
      <h1>Contact Us</h1>

      <form onSubmit={handleComplaint}>
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
    </section>
  );
}

export default Contact;
