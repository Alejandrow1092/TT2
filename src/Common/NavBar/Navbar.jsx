import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useState, useRef, useEffect} from "react";


/* menuButton.addEventListener('click', () => {
    navigationLinks.classList.toggle('active')
    menuButton.classList.toggle('open');

}) */

const NavBar=()=>{
    const menuButton=useRef(null);
    const navigationLinks=useRef(null);

    const[isActive, setActive]=useState(false);

    const handdleToggle=()=>{
        setActive(!isActive);
        console.log(`Active status is ${isActive}`)
    } 

    const handleCloseMenu=()=>{
        if(isActive===true){
            setActive(false);
        }
    }

    useEffect(()=>{
        //navigationLinks.current.classList.toggle('active');
        //menuButton.current.classList.toggle('open');
    },[])
   
    return(
        <>
<header className="header">
        <div className="container" id="menu">
            
            <a /* href="/" */ /* className="logo" */><Link to="/" className="logo">MCE</Link></a>

            <div id="menu" className={`menu-icon ${isActive ? "open": ""}`} onClick={handdleToggle}>
                <div className="menu-btn__burger" ref={menuButton} ></div>
            </div>

            
          {/* <!--   <span class="menu-icon" id="menu">Menu</span> --> */}
            <nav  id="navigation" ref={navigationLinks} className={`navigation ${isActive ? "active": ""}`}>
                <menu className="sup">
                    <ul>
                        <li><a /* href='/museo/participants' */><Link to="/participants" onClick={handleCloseMenu}>Participants</Link></a></li>
                        <li><a /* href="/grants" */><Link to="/grants" onClick={handleCloseMenu}>Grants</Link></a></li>
                        <li><a /* href="/contact" */><Link to="/contact" onClick={handleCloseMenu}>Contact</Link></a></li>
                    </ul>
                </menu>
                <menu className="inf">
                    <ul>
                        <li>{/* <a  href="/" > */}<Link className="link-item" to="/" onClick={handleCloseMenu}>Inicio</Link>{/* </a> */}</li>
                        <li><a href="#">Museo</a></li>
                        <li>{/* <a href="/galeria"> */}<Link className="link-item" to="/galeria" onClick={handleCloseMenu}>Galeria</Link>{/* </a> */}</li>
                        <li>{/* <a href="/about"> */}<Link className="link-item" to="/about" onClick={handleCloseMenu}>About</Link>{/* </a> */}</li>
                    </ul>
                </menu>
            </nav>
            
        </div>
    </header>        
        </>
    );
}

export default NavBar;