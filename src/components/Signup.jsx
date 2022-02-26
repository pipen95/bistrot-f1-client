import React, { useState, useRef } from 'react';
import axios from 'axios';

export const Signup = ({ closeModal }) => {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  const [submitting, setSubmitting] = useState(false);
  const [access, setAccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  console.log(formData);

  // HANDLER FONCTIONS
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

    //first name and last name
    if (!fields['firstname']) {
      formIsValid = false;
      err['firstname'] = 'Cannot be empty';
    }
    if (!fields['lastname']) {
      formIsValid = false;
      err['lastname'] = 'Cannot be empty';
    }

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
    //Password Confirm
    if (!fields['passwordConfirm']) {
      formIsValid = false;
      err['passwordConfirm'] = 'Cannot be empty';
    } else if (typeof fields['passwordConfirm'] !== 'undefined') {
      if (
        !fields['passwordConfirm'].match(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        )
      ) {
        formIsValid = false;
        err['passwordConfirm'] =
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
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
    setErrors({});
    closeModal();
  };


  // SUBMIT POST REQUEST
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (handleValidation()) {
      postData(formData).then((value) => {
        // Promesse tenue
        if (value) {
          setTimeout(timerid, 2000);
        } else {
          setSubmitting(false);
        }
      });
    } else {
      setSubmitting(false);
    }
  };

  // SUBMIT POST REQUEST
  const postData = async (data) => {
    let err ={};
    let serverAccess = false;
    const payload = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    };
    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/users/signup',
        payload
      );
      if (res) {
        setAccess(true);
        serverAccess = true;
      }
    } catch (error) {
      setAccess(false);
      if (error.response.data) {
        console.log(error.response.data);
        err['server'] = `${error.response.data.message}`;
      } else {
        err['server'] = `There was a problem validating the provided data. Please try again.`;
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
          <h2 className="text-center">Bienvenue to F1 Bistrot!</h2>
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
                <div class="row">
                  <div class="col">
                    <input
                      ref={firstname}
                      type="text"
                      className="form-control"
                      name="firstname"
                      onChange={handleChange}
                      value={formData.firstname}
                      placeholder="First name"
                    />
                    <div className="error">{errors['firstname']}</div>
                  </div>
                  <div class="col">
                    <input
                      ref={lastname}
                      type="text"
                      className="form-control"
                      name="lastname"
                      onChange={handleChange}
                      value={formData.lastname}
                      placeholder="Last name"
                    />
                    <div className="error">{errors['lastname']}</div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="form-group" disabled={submitting}>
                <input
                  ref={email}
                  type="text"
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
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  placeholder="Password"
                />
                <div className="error">{errors['password']}</div>
              </fieldset>
              <fieldset className="form-group" disabled={submitting}>
                <input
                  ref={passwordConfirm}
                  type="text"
                  className="form-control"
                  name="passwordConfirm"
                  onChange={handleChange}
                  value={formData.passwordConfirm}
                  placeholder="Password Confirm"
                />
                <div className="error">{errors['passwordConfirm']}</div>
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

export default Signup;
