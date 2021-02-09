import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fetch from "../../utilities/Fetch";
import Actiontypes from "../../redux/actions/constants";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Signup(props) {
  const [signupDetails, setSignupDetails] = useState({
    email: "user@example.com",
    password: "",
    confirmPassword: "",
    userType: 1,
    organizationType: 1,
    platform: "web",
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    Fetch("auth/register", "post", signupDetails)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);

        localStorage.setItem("user", JSON.stringify(json.data));
        if (json.status === true) {
          history.push("/registrationform");
        } else {
          alert("user has already been registered");
        }

        // props.dispatch({
        //     type: Actiontypes.FORM_SUBMIT_SUCCESS
        // })
      })
      .catch((err) => {
        console.error(err);
        // props.dispatch({
        //     type: Actiontypes.FORM_SUBMIT_FAILED
        // })
      });
  };

  // let mylink = '/signupnew';

  // const linkToPage = () => {
  //     if(signupDetails.email != '' && signupDetails.password != '' & signupDetails.confirmPassword != '') {
  //         mylink = '/signupnew'
  //     }
  // }

  return (
    <>
      <div id="sign-up-form" className={props.signupactive ? "show" : ""}>
        <form onSubmit={handleSignup}>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="E-mail"
            className="input-field"
            required
          />
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <input
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            placeholder="Re-type Password"
            className="input-field"
            required
          />
          <span className="cat">Category</span>
          <div className="checkbox">
            <input type="checkbox" id="ind" defaultChecked />{" "}
            <label htmlFor="ind">Individual</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="cop" />
            <label htmlFor="cop">Corporate</label>
          </div>

          <button type="submit" className="sign-btns">
            Get started here
          </button>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  formSubmit: state.formSubmittedSuccess,
});

export default connect(mapStateToProps)(Signup);
