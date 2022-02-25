import React, { useState, useRef } from 'react';
import axios from 'axios';

export const Login = ({ closeModal }) => {
  const email = useRef();
  const password = useRef();

  const [submitting, setSubmitting] = useState(false);
  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  console.log(formData);

  //HANDLER FONCTIONS
  //ON CHANGE
  const handleChange = (event) => {
    return setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //VALIDATION
  const handleValidation = () => {
    let fields = formData;
    let err = {};
    let formIsValid = true;

    //Password
    if (!fields['password']) {
      formIsValid = false;
      err['password'] = 'Cannot be empty';
    } else if (typeof fields['password'] !== 'undefined') {
      if (!fields['password'].match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        formIsValid = false;
        err['password'] =
          'The password must have minimum eight characters, at least one letter, one number. Example: f1bistrot';
      }
    }

    //Email
    if (!fields['email']) {
      formIsValid = false;
      err['email'] = 'Cannot be empty';
    } else if (typeof fields['email'] !== 'undefined') {
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields['email'])
      ) {
        formIsValid = false;
        err['email'] = 'Email is not valid. Example: f1bistrot@example.com';
      }
    }

    setErrors(err);
    return formIsValid;
  };

  // Server Validation
  const serverValidation = (statusCode) => {
    let err = {};
    switch (statusCode) {
      case 400:
        err['server'] =
          'There was typing error. Please follow these instructions and try again.';
        break;
      case 401:
        err['server'] =
          'Email adress or password is not recognized. Please try again.';
        break;
      case 500:
        err['server'] =
          'There was a problem on our server. Please try again later.';
        break;
      default:
        err['server'] =
          'There was a problem validating the provided data. Please try again.';
        break;
    }
    setErrors(err);
  };

  // CLOSE MODAL
  const timerid = () => {
    setFormData({
      email: '',
      password: '',
    });
    setErrors({});
    closeModal();
  };

  // SUBMIT POST REQUEST
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (handleValidation()) {
      if (postData(formData)) {
        console.log('form has no errors and submitted!');
      } else {
        setSubmitting(false);
      }
    } else {
      console.log('form has type errors');
      setSubmitting(false);
    }
  };

  const postData = async (data) => {
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
        setAccess(true);
        setTimeout(timerid, 2000);
      }
    } catch (error) {
      setAccess(false);
      if (error.response) {
        serverValidation(error.response.status);
      } else {
        serverValidation();
      }
    }
    return access;
  };

  // JSX FORM
  return (
    <div>
      {access ? (
        <>
          <h2 className="text-center">Welcome back!</h2>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <h2 className="text-center mb-4">Login Form</h2>
            <div className="error d-flex justify-content-center">
              {errors['server']}
            </div>
            <div>
              <fieldset className="form-group" disabled={submitting}>
                <input
                  ref={email}
                  type="text"
                  id="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Email"
                />
                <div className="error">{errors['email']}</div>
              </fieldset>
              <fieldset className="form-group" disabled={submitting}>
                <input
                  ref={password}
                  type="text"
                  id="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Password"
                />
                <div className="error">{errors['password']}</div>
              </fieldset>
            </div>
            <div className="form-group">
              <button
                className="form-control btn btn-primary"
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
