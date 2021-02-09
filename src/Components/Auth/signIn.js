import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Fetch from "../../utilities/Fetch";

function SignIn(props) {
  const history = useHistory();
  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
    fireBaseToken: "string",
    rememberMe: true,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninDetails({
      ...signinDetails,
      [name]: value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    Fetch("auth/login", "post", signinDetails)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status) {
          console.log("it works");
          history.push("/profile");
        } else {
          setErrorMessage(json.message);
        }
      })
      .catch(() => console.log("wrong details"));
  };

  return (
    <>
      <div id="sign-in-form" className={props.signinactive ? "show" : ""}>
        <form onSubmit={handleLogin}>
          {errorMessage ? (
            <span className="text-danger">{errorMessage}</span>
          ) : (
            ""
          )}
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="E-mail"
            className="input-field"
            required
          />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <button type="submit" className="sign-btns">
            Log In
          </button>
          <span>
            <Link to="/forgot"> Forgotten Password?</Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default SignIn;
