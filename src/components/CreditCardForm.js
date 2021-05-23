import React from "react";
import useForm from '../useForm'
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
  <div className='container'>
      <div className='box justify-content-center align-items-center'>
        <div className='form-div'>
            <div className='crddit-card'>
                <Cards
                    cvc={values.cvs}
                    expiry={values.expiration}
                    focused={values.focus}
                    name={values.name}
                    number={values.number}
                />
            </div>
        </div>
      </div>
  </div>
  );
};

export default CreditCardForm;
