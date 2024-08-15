import './navbar.css'
function Navbar(){

    return(
        <div className='nav-container'>
            <div className='nav-title-container'><h1 className='title'>GalaxyWheather</h1></div>
            <div className='nav-option-container'>
                <ul className="navbar-ul">
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;