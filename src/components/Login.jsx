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

  console.log(errors);

  //HANDLER FONCTIONS
  //ON CHANGE
  const handleChange = (event) => {
    return setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // FOCUS ERROR

  // const errorFocus = () => {
  //   if(errors['email']){
  //     email.current.focus()
  //   }
  //   if(errors['password']){
  //     password.current.focus()
  //   }
  // };

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
      if (!fields['password'].match(/^\w+$/)) {
        formIsValid = false;
        err['password'] = 'The password must have letters and numbers';
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
        err['email'] = 'Email is not valid';
      }
    }

    setErrors(err);
    return formIsValid;
  };

  // SUBMIT POST REQUEST
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (handleValidation()) {
      postData(formData);

      console.log('form has no errors and submitted!');
      setFormData({
        email: '',
        password: '',
      });

      if (access) {
        const timerid = setTimeout(() => {
          closeModal();
        }, 2000);
        timerid();
      } else {
        console.log('form has server errors');
        setSubmitting(false);
      }
    } else {
      console.log('form has type errors');
      setSubmitting(false);
      // errorFocus();
    }
  };

  const postData = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    let err = {};
    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/users/login',
        payload
      );
      if (res) {
        setAccess(true);
      }
    } catch (error) {
      err['server'] = `${error.message}`;
      setErrors(err);
      setAccess(false);
      setSubmitting(false);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log('error but no response');
      }
    }
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
            <h2 className="text-center">Login Form</h2>
            <span className="error">{errors['server']}</span>
            <div>
              <fieldset className="form-group" disabled={submitting}>
                <label htmlFor="email">Email</label>
                <input
                  ref={email}
                  type="text"
                  id="email"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
                <span className="error">{errors['email']}</span>
              </fieldset>
              <fieldset className="form-group" disabled={submitting}>
                <label htmlFor="password">Password</label>
                <input
                  ref={password}
                  type="text"
                  id="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
                <span className="error">{errors['password']}</span>
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
