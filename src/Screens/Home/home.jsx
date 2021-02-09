import React, { useState } from 'react';
import Navbar from "../../Components/Home/navbar";
import Video from "../../Components/Home/video";
import MainBtm from "../../Components/Home/main-btm";
import Signup from '../../Components/Auth/signup';
import Footer from '../../Components/Footer/footer';
const Home = (props) => {
    const [signupactive, toggleSignup] = useState(false)
    return (
        <>  
             <Navbar />
            <div className="main-intro-section">
                <div className="intro-header">
                    <div className="container">
                        <div className="intro-container">
                            <div className="intro-content">
                                <h1>Download</h1>
                                <h3>mobile app</h3>
                                <div className="buttons">
                                    <a href><img src="/Assets/ap.png" alt="" /></a>
                                    <a href><img src="/Assets/gp.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-text">
                            <div className="what-you-need">
                                <p>What you need to know</p>
                                <img src="/Assets/Vector 1.svg" alt="" />
                            </div>

                            <div className="get-started">
                                <button type="button" onClick={() => toggleSignup(!signupactive) } >Get Started Here</button>
                            </div>

                        </div>
                    </div>
                </div>

                 <Signup signupactive={signupactive} />
            </div>

            <Video/>
            <MainBtm/>
            <Footer/>
        </>
    );
};





export default Home;
