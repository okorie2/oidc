import React from "react";

function Subscriberdetails(props) {
  return (
    <>
      <div className="body-content">
        <div className="backup-bg" />
        <div className="single-bg">
          <img src="/Assets/Rectangle23.png" alt />
        </div>
        <div className="second-bg">
          <img src="/Assets/Rectangle24.png" alt />
        </div>
        <div className="container-fluid">
          <div className="row ml-5">
            <div className="col-lg-6">
              {/* <div class="map-box">
                      <img src="/Assets/map.png" alt="">
                  </div> */}
              <div className="list-inner">
                <div className="lists">
                  <div className="single-list">
                    <h3>Plot 12</h3>
                    <p>Available</p>
                  </div>
                  <div className="single-list">
                    <h3>Plot 15</h3>
                    <p>Unavailable</p>
                  </div>
                  <div className="single-list">
                    <h3>Plot 18</h3>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className="button-switch">
                <a href="#" className="active">
                  Map view
                </a>
                <a href="#">List view</a>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div class="text-content">
                      <h6>Select your Prefered</h6>
                      <h1>PLOT</h1>
                  </div> */}
              <div className="preview-plot">
                <div className="previewplot-wrapper">
                  <p className="status">Residential</p>
                  <div className="plot-state">
                    <h2>Plot 12</h2>
                    <div className="statusbox">Available</div>
                  </div>
                  <p className="status mt-4">Jon Doe Avenue</p>
                  <h6 className="land-details">Land details</h6>
                  <div className="land-details-content">
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi accumsan mattis etiam dis auctor tellus neque.
                      Fringilla lobortis amet rutrum
                    </p>
                    <p className="description">600 sqm</p>
                    <p className="description mb-0"># 1,000,000.00</p>
                  </div>
                  <a href="#" className="register-btn">
                    Register interest
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscriberdetails;
