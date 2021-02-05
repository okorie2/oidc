import React, { useState } from 'react'


function SignIn(props) {
    const [signinDetails, setSigninDetails] = useState({
        email: "",
        password: "",
        "fireBaseToken": "string",
        "rememberMe": true
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setSigninDetails({
            ...signinDetails,
            [name]: value
        })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const loginRes = fetch('http://46.101.193.47:5000/api/auth/login', {
            method: "POST",
            body: JSON.stringify(signinDetails),
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
            <div id="sign-in-form" className={props.signinactive ? 'show' : ''}>
                <form onSubmit={handleLogin}>
                    <input onChange={handleChange} type="email" name='email' placeholder="E-mail" className="input-field" required />
                    <input onChange={handleChange} type="password" name='password' placeholder="Password" className="input-field" required />
                    <button type="submit" className="sign-btns">Log In</button>
                    <span><a href="#"> Forgotten Password?</a></span>
                </form>
            </div>

        </>
    )
}


export default SignIn

