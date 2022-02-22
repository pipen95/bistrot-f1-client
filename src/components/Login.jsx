import React, {useState, useRef} from "react";
import axios from "axios";

export const Login = ({closeModal }) => {
  const email = useRef();
  const password = useRef();

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({});

  console.log(formData);

  // HANDLER FONCTIONS

  const handleChange = (event) => {
    return setFormData({...formData, [event.target.name]: event.target.value})
  };


  const handleValidation = (data) => {
    let fields = data;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["password"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setErrors({ errors: errors });
    return formIsValid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (handleValidation(formData)) {
      setSubmitting(true);
      postData(formData,closeModal);
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
    return setFormData({
      email: "",
      password: ""
    })
  };






    // SUBMIT POST REQUEST
    const postData = async (data, closeModal) => {
      const payload = {
        email: data.email,
        password: data.password, 
      }
      try {
        const res = await axios.post(
          "http://localhost:3001/api/v1/users/login",
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
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">
              Login Form
            </h2>
              <div>
                <fieldset className="form-group" disabled={submitting}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </fieldset>
                <fieldset className="form-group" disabled={submitting}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    id="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                  />
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
