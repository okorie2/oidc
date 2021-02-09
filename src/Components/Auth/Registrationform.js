import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Signupnew(props) {
  const [formdetails, setformdetails] = useState({
    surname: "",
    lastname: "",
    address: "",
    number: "",
  });
  
  const [corporateform, setCooperateform] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdetails({
      ...formdetails,
      [name]: value,
    });
  };
  const history = useHistory();

  const backToHome = (e) => {
    history.push("/");
    localStorage.setItem("form", JSON.stringify(formdetails));
    e.preventDefault();
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="signup-head">
            <div className="logo my-5">
              <Link to="/">
                <img src="/Assets/Orange_Logos_Colour 1.png" alt />
              </Link>
            </div>
          </div>

          <div className="cat-check">
            <h5>Category</h5>
            <div className="new-check d-flex justify-content-between">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="ind"
                  //defaultChecked
                  onChange={setCooperateform}
                  checked={!corporateform ? true : false}
                />{" "}
                <label htmlFor="ind">Individual</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="cop"
                  onChange={setCooperateform}
                  checked={corporateform ? true : false}
                />
                <label htmlFor="cop">Corporate</label>
              </div>
            </div>
          </div>
          {!corporateform ? (
            <div className="signup-full">
              <>
                <div className="joint-input">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    className="joint"
                    required
                  />

                  <input
                    onChange={handleChange}
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    className="joint"
                    required
                  />
                </div>
                <input
                  onChange={handleChange}
                  type="text"
                  name="address"
                  placeholder="Residential Address"
                  className="signinput-field"
                  required
                />
                <input
                  onChange={handleChange}
                  name="mail"
                  type="text"
                  placeholder="Mailing Address"
                  className="signinput-field"
                />
                <div id="phonenumber">
                  <input
                    onChange={handleChange}
                    type="tel"
                    name="number"
                    placeholder="Telephone Number"
                    className="signinput-field"
                    required
                  />
                  <div className="plus" id="tel" />
                </div>
                <div className="kin">
                  <h4>Next of Kin</h4>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="signinput-field"
                    required
                  />
                  <div id="phonenumber">
                    <input
                      type="tel"
                      placeholder="Telephone Number"
                      className="signinput-field"
                      required
                    />
                    <div className="plus" id="tel" />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="signinput-field"
                    required
                  />
                </div>

                <div className="checkbox">
                  <input type="checkbox" id="cap" />
                  <label htmlFor="cap">
                    I have read the terms and conditions
                  </label>
                  <button className="btn-reg" onClick={backToHome}>
                    Register{" "}
                  </button>
                </div>
              </>
            </div>
          ) : (
            <>
              <div>
                <div className="signup-full">
                  <input
                    type="text"
                    placeholder="Name of Entry"
                    className="signinput-field"
                  />
                  <input
                    type="text"
                    placeholder="RC Number"
                    className="signinput-field"
                  />
                  <input
                    type="text"
                    placeholder="Office Address"
                    className="signinput-field"
                  />
                  <input
                    type="text"
                    placeholder="Type of business"
                    className="signinput-field"
                  />
                  <div id="phonenumber">
                    <input
                      type="tel"
                      placeholder="Telephone Number"
                      className="signinput-field"
                      required
                    />
                    <div className="plus" id="tel" />
                  </div>
                  <input
                    type="text"
                    placeholder="Web Address"
                    className="signinput-field"
                  />
                  <div className="kin">
                    <h4>Next of Kin</h4>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="signinput-field"
                    />
                    <div id="phonenumber">
                      <input
                        type="tel"
                        placeholder="Telephone Number"
                        className="signinput-field"
                        required
                      />
                      <div className="plus" id="tel" />
                    </div>
                    <input
                      type="text"
                      placeholder="Address"
                      className="signinput-field"
                    />
                  </div>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="cap" />
                  <label htmlFor="cap">
                    I have read the terms and conditions
                  </label>
                  <button className="btn-reg">Register</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Signupnew;
