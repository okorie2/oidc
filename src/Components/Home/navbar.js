
const Navbar = () => {
    return (
        <>
            <nav id="navbars">
                <div className="container">
                    <div className="nav-logo">
                        <a href="#"><img src="/Assets/Orange_Logos_White 1.png" alt className /></a>
                    </div>
                    <input type="checkbox" name id="menu" />
                    <label htmlFor="menu" className="hamburger">
                        <div className="burger" />
                    </label>
                    <ul>
                        <li><a href className="list-items">About</a></li>
                        <li><a href className="list-items">Gallery</a></li>
                        <li><a href className="list-items">Vendor</a></li>
                        <li><a href="javascript:void(0)" className="list-items">Log in</a></li>
                    </ul>
                    <a href="javascript:void(0)" className="login-btn">Log in</a>
                </div>
            </nav>

        </>
    )
}
export default Navbar