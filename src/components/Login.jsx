import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import axios from 'axios';


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export const Login = ({ closeModal }) => {
  const form = useRef();
  const checkBtn = useRef();

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  console.log(formData);

  // HANDLER FONCTIONS

  const handleChange = (event) => {
    return setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setSubmitting(true);

    if (checkBtn.current.context._errors.length === 0) {
      postData(formData, closeModal);
      return setFormData({
        email: '',
        password: '',
      });
    } else {
      setSubmitting(false);
    }
  };

  // SUBMIT POST REQUEST
  const postData = async (data, closeModal) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/users/login',
        payload
      );
      if (res) {
        setSubmitting(false);
        closeModal();
      }
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
      console.log(error.stack);
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setSubmitting(false);
      setMessage(resMessage);
    }
  };

  // JSX FORM
  return (
    <div>
      {submitting ? (
        <>
          <h2 className="text-center">Welcome back!</h2>
        </>
      ) : (
        <>
          <Form onSubmit={handleSubmit} ref={form}>
            <h2 className="text-center">Login Form</h2>
            <div>
              <fieldset className="form-group" disabled={submitting}>
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  id="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  validations={[required]}
                />
              </fieldset>
              <fieldset className="form-group" disabled={submitting}>
                <label htmlFor="password">Password</label>
                <Input
                  type="text"
                  id="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  validations={[required]}
                />
              </fieldset>
            </div>
            <div className="form-group">
              <button
                className="form-control btn btn-primary"
                type="submit"
                disabled={submitting}
              >
                {submitting && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                Login
              </button>
            </div>
            {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </>
      )}
    </div>
  );
};

export default Login;
