import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { Link } from "react-router-dom";

const Register = props => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
    is_teacher: false,
    code: ""
  });

  const {
    first_name,
    last_name,
    email,
    password,
    password2,
    is_teacher,
    code
  } = formData;

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onClick = cb => {
    setFormData({
      ...formData,
      is_teacher: cb.target.checked
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert("Make sure passwords match", "danger");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <div className="card">
        <div className="card-body">
          <form
            className="form"
            action="create-profile.html"
            onSubmit={e => onSubmit(e)}
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={first_name}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={last_name}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="8"
                value={password}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="8"
                value={password2}
                onChange={e => onChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Code"
                name="code"
                value={code}
                onChange={e => onChange(e)}
              />
              <small className="form-text">
                Only required if you are a student and your teacher has given
                you a registration code.
              </small>
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                id="is_teacher"
                name="is_teacher"
                value={is_teacher}
                onClick={cb => onClick(cb)}
              />
              <label htmlFor="is_teacher">&nbsp;I am a teacher</label>
            </div>
            <input type="submit" className="btn btn-primary" value="Register" />
          </form>
        </div>
      </div>
      <p className="my-1">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </Fragment>
  );
};

export default connect(null, { setAlert })(Register);