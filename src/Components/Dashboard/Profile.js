import React, { useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import Fetch from "../../utilities/Fetch";
import { useHistory } from "react-router-dom";

function Dashboard(props) {
  const [profiledetails, setProfiledetails] = useState({
    firstName: "string",
    lastName: "string",
    gender: "string",
    phoneNumber: "string",
    middleName: "string",
    residentialAddress: "string",
    mailingAddress: "string",
    stateOfOriginId: 0,
    profilePhoto: "string",
    identityDocument: "string",
    isProfilePhotoChanged: true,
    isIdentityDocumentChanged: true,
    userTypeId: 0,
    identificationId: 0,
    webSiteUrl: "string",
    officeAddress: "string",
    rcNumber: "string",
    nameOfEntry: "string",
    nextOfKin: {
      firstName: "string",
      lastName: "string",
      gender: "string",
      phoneNumber: "string",
      address: "string",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfiledetails({
      ...profiledetails,
      [name]: value,
    });
  };
  const [profileform, setprofileform] = useState(false);

  const history = useHistory();
  const handleProfile = (e) => {
    e.preventDefault();
    Fetch("auth/profile/completion", "put", profiledetails)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);

        history.push("/registrationform");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <DashboardLayout>
      <div className="body-content">
        {/* <div class="backup-bg"></div>
      <div class="single-bg"><img src="/Assets/Rectangle23.png" alt=""></div>
      <div class="second-bg"><img src="/Assets/Rectangle24.png" alt=""></div> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="avatars d-flex w-100 justify-content-center align-items-center h-100">
                <div className="avatar-inner">
                  <div className="avatar-box">
                    <img src alt />
                  </div>
                  <div className="add-btn w-100 mt-4 no-border">
                    Change Avatar
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-wrapper">
                <form action className="sub-form" onSubmit={handleProfile}>
                  <h5 className="check">Category</h5>
                  <div className="check-body">
                    <div className="new-check d-flex mt-2">
                      <div className="checks">
                        <input type="checkbox" id="ind" defaultChecked onchange={setprofileform} checked={!profileform? true:false} />{" "}
                        <label htmlFor="ind">Individual</label>
                      </div>
                      <div className="checks">
                        <input type="checkbox" id="cop"  onchange={setprofileform} checked={profileform? true:false} />
                        <label htmlFor="cop">Corporate</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="signup-full">
                    <div className="joints-input">
                      <input
                        type="text"
                        placeholder="Surname"
                        className="jointa"
                        name="firstName"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        placeholder="Lastname / Name of entry"
                        className="jointa"
                        name="Lastname"
                        onChange={handleChange}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Residential Address / Office Address"
                      className="inputs-field"
                      name="residentialAddress"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="Mailing Address / RC Number"
                      className="inputs-field"
                      name="mailingAddress"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      placeholder="State of Orign / Web Address"
                      className="inputs-field"
                      name="stateOfOriginId"
                      onChange={handleChange}
                    />
                    <div id="phonenumber">
                      <input
                        type="tel"
                        placeholder="Telephone Number"
                        className="inputs-field"
                        name="phoneNumber"
                        onChange={handleChange}
                        required
                      />
                      <div className="pluss" id="tel" />
                    </div>
                    <div className="kins">
                      <h4>Next of Kin / Authorizing Officer</h4>
                      <div className="joints-input">
                        <input
                          type="text"
                          placeholder="Surname"
                          className="jointa"
                          name=""
                        />
                        <input
                          type="text"
                          placeholder="Lastname"
                          className="jointa"
                          name=""
                        />
                      </div>
                      <div id="phonenumber">
                        <input
                          type="tel"
                          placeholder="Telephone Number"
                          className="inputs-field"
                          required
                          name="phoneNumber"
                        />
                        <div className="pluss" id="tel" />
                      </div>
                      <input
                        type="text"
                        placeholder="Address"
                        className="inputs-field"
                        name=""
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="btn-container d-flex w-cus justify-content-center mt-4">
                <div className="add-btn">Edit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
