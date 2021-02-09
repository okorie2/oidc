import { useState } from "react"
import { Link } from "react-router-dom";
import SignIn from "../Auth/signIn"



const Navbar = () => {
    const [signinactive, toggleSignin] = useState(false)
    return (
        <>
            <nav id="navbars">
                <div className="container">
                    <div className="nav-logo">
                    <Link to="/" ><img src="/Assets/Orange_Logos_White 1.png" alt className /></Link>
                    </div>
                    <input type="checkbox" name id="menu" />
                    <label htmlFor="menu" className="hamburger">
                        <div className="burger" />
                    </label>
                    <ul>
                        <li><Link to="" className="list-items">About</Link></li>
                        <li><Link to="" className="list-items">Gallery</Link></li>
                        <li><Link to="" className="list-items">Vendor</Link></li>
                        <li><Link to="" className="list-items">Log in</Link></li>
                    </ul>
                    <Link to="" onClick={() => toggleSignin(!signinactive)} className="login-btn">Log in</Link>
                </div>
            </nav>

            <SignIn signinactive={signinactive} />
        </>
    )
}
export default Navbar