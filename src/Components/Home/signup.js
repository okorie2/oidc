import React, { useState } from 'react'

function Signup(props) {


    const [signupDetails, setSignupDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        "userType": 1,
        "organizationType": 1,
        "platform": "string"
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setSignupDetails({
            ...signupDetails,
            [name]: value
        })
    }
    const handleSignup = (e) => {
        e.preventDefault()
        const signupRes = fetch('http://46.101.193.47:5000/api/auth/register', {
            method: "POST",
            body: JSON.stringify(signupDetails),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            })
            .catch(console.error)
    }
    return (
        <>
            <div id="sign-up-form">
                <form onSubmit={handleSignup}>
                    <input onChange={handleChange} name="email" type="email" placeholder="E-mail" className="input-field" required />
                    <input onChange={handleChange} name="password" type="password" placeholder="Password" className="input-field" required />
                    <input onChange={handleChange} name="confirmPassword" type="password" placeholder="Re-type Password" className="input-field" required />
                    <span className="cat">Category</span>
                    <div className="checkbox">
                        <input type="checkbox" id="ind" defaultChecked /> <label htmlFor="ind">Individual</label>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" id="cop" /><label htmlFor="cop">Corporate</label>
                    </div>

                    {/* <button type="submit" className="sign-btns">Sign Up</button> */}

                </form>
            </div>

        </>
    )
}



export default Signup

