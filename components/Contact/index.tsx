import React, { Fragment, useReducer } from 'react';
import getConfig from 'next/config';

import styles from './styles.module.css';

import { ContactFormReducerEnum } from '../../utils/constants';
import type { ContactFormState, ContactFormReducerAction } from '../..';

import Spinner from '../Spinner';


const { publicRuntimeConfig } = getConfig();

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
    case ContactFormReducerEnum.NAME:
      return {
        ...state,
        name: action.payload
      };
    case ContactFormReducerEnum.LOADING:
      return {
        ...state,
        loading: !state.loading
      }
    case ContactFormReducerEnum.FORM_SUBMITTED:
      return {
        ...state,
        formSubmitted: !state.formSubmitted
      }
    case ContactFormReducerEnum.ERROR:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state;
  };
};

const initialState: ContactFormState = {
  email: '',
  complaint: '',
  name: '',
  formSubmitted: false,
  loading: false,
  errorMessage: ''
};

const Contact: React.FC = () => {
  const [state, dispatch] = useReducer(contactFormReducer, initialState);

  const submitForm = async () => {
    try {
      dispatch({ type: ContactFormReducerEnum.LOADING, payload: '' });

      const complaintEndpoint: string = `${publicRuntimeConfig.apiBaseUrl}/complaint`;
      const response = await fetch(complaintEndpoint);

      if (response.ok) {
        dispatch({ type: ContactFormReducerEnum.FORM_SUBMITTED, payload: '' });
      } else {
        const errorMessage = 'An error occurred while submitting your complaint. Please try again.'
        dispatch({ type: ContactFormReducerEnum.ERROR, payload: errorMessage });
      }
    } catch (error) {
      dispatch({ type: ContactFormReducerEnum.ERROR, payload: error.message });
    } finally {
      dispatch({ type: ContactFormReducerEnum.LOADING, payload: '' });
    }
  }

  const renderContent = () => {
    if (state.formSubmitted) {
      return (
        <Fragment>
          <p>Your response has been successfully submitted.</p>
          <span role="img" aria-label="Celebrate">🎉🎉</span>

          <p>If you provided an email address, we'll email you as soon as we resolve your query.</p>
        </Fragment>
      );
    }

    if (state.loading) {
      return <Spinner />;
    }

    return (
      <form name="contact-form" onSubmit={submitForm}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address (optional)</label>
          <input
            type="email"
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
          <label htmlFor="name">Name (optional)</label>
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={event => dispatch({
              type: ContactFormReducerEnum.NAME,
              payload: event.target.value
            })}
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="complaint">Complaint *</label>
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

        {state.errorMessage ? <p className="error">{state.errorMessage}</p> : null}
        <input type="submit" className={styles.contactButton} value="Submit" />
      </form >
    );
  };



  return (
    <section className={styles.contactContainer}>
      <h1>Contact Us</h1>

      {renderContent()}
    </section >
  );
}

export default Contact;
