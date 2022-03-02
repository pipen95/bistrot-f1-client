import React, { useState, useRef } from 'react';
import axios from 'axios';
import AuthService from './../services/auth.service'

axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export const Login = ({ closeModal }) => {
  const email = useRef();
  const password = useRef();

  const [submitting, setSubmitting] = useState(false);
  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState('text');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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

  // CLOSE MODAL
  const timerid = () => {
    setFormData({
      email: '',
      password: '',
    });
    setErrors({});
    closeModal();
  };

  // TOGGLE SHOW PASSWORD
  const toggleShowPass = () => {
    if (showPass === 'text') {
      setShowPass('password');
    } else {
      setShowPass('text');
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (handleValidation()) {
      postData(formData).then((value) => {
        // Promesse tenue
        if (value===true) {
          window.location.reload(false);
          window.setTimeout(timerid, 1000);
        } else {
          setSubmitting(false);
        }
      });
    } else {
      setSubmitting(false);
    }
  };

  // POST REQUEST
  const postData = async (data) => {
    let err = {};
    let serverAccess = false;
    const payload = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post('/api/users/login', payload);

      if (res) {
        setAccess(true);
        console.log(res.data);
        // localStorage.setItem('user', res.data.token);
        AuthService.setCookie(res.data);
        serverAccess = true;
      }
    } catch (error) {
      setAccess(false);
      console.log(error);
      if (error.response) {
        err['server'] = `${error.response.data.message}`;
      } else {
        err[
          'server'
        ] = `There was a problem validating the provided data. Please try again.`;
      }
    }
    setErrors(err);
    return serverAccess;
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
            <div className="error d-flex justify-content-center mb-3">
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
                  type={showPass}
                  id="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Password"
                />
                <span className="p-viewer" onClick={toggleShowPass}>
                  <i
                    className={`far ${
                      showPass === 'text' ? 'fa-eye-slash' : 'fa-eye'
                    } eyepassword`}
                  ></i>
                </span>

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
