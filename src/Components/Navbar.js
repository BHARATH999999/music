import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
// import '../Styles/nav.css'

function Navbar() {
    useEffect(() => {
        let navBar = document.querySelector("nav");
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 0) {
                navBar.setAttribute("class", "activeNavBar")
            }
            else if ((window.pageYOffset === 0)) {
                navBar.classList.remove("activeNavBar")
            }
        });
    }, []);

    return (
        <nav>
            <Link to="/" style={{}}>Logo</Link>
            <div className="menu">
                <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/album">Album</Link></li>
                    <li><Link to="/song">Song</Link></li>
                    <li><Link to="/playlist">Playlist</Link></li>
                    <li><Link to="/trending">Trending</Link></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar