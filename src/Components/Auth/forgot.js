import React, {useState} from "react";
import Navbar from '../Home/navbar'
import Fetch from '../../utilities/Fetch'


function Forgot(props) {
    const[credentials, confirmCredentials] = useState(
        {
            email: ''
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target
        confirmCredentials({
            ...credentials,
            [name]: value
        })
    }
    const resetPass=(e)=>{
        Fetch(`auth/reset-password?email=${credentials.email}&platform=web` , 'get')
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json)
        })
        .catch(console.error)
        e.preventDefault()
    }
  return (
    <>
    <Navbar/>
    <div className="main-intro-section mb-4">
  <div className="intro-header">
    {/* Forgotten Password */}
    <div className="box">       
      <div className="box-inner">
        <div className="title">
          <h3>Forgotten Password</h3>
        </div>
        <div className="box-content">
          <div className="icons">
            <img src="/Assets/12135-email-send 1.png" alt />
          </div>
          <div className="info">
            <p>Please insert the e-mail address associated with your account</p>
          </div>
          <form className="forget" onSubmit={resetPass}>
            <input onChange={handleChange}  type="email" name='email' placeholder="Input your e-mail" className="input-field forgot" required />
            <button type='submit' className="sign-btns forget">Confirm</button>
          </form>
        </div>
      </div>
    </div>
   
    <div className="box">
      <div className="box-inner">
        <div className="title">
          <h3>Verification sent</h3>
        </div>
        <div className="box-content py15">
          <div className="icons">
            <img src="/Assets/12135-email-send 1.png" alt />
          </div>
          <div className="titles">
            <h3 className="m-0">Set new password</h3>
          </div>
          <form className="forget p-0">
            <input type="password" placeholder="New Password" className="input-field forgot" required />
            <input type="password" placeholder="Confirm New Password" className="input-field forgot mb-0" required />
            <div className="form-btn d-flex justify-content-between mt-0">
              <button className="sign-btns fit">Confirm</button>
              <button className="sign-btns fit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* Reset Password */}
  </div>
</div>


    </>
  );
}

export default Forgot;
