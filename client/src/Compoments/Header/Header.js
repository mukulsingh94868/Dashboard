import React from 'react';
import { Link } from "react-router-dom";
import './header.css';



const Header = () => {
    return (
        <>
            <div className="container mainheader">
                <div className="header-logo">
                   <Link to="/" className='helloCss'>Hello</Link> 
                    <div className="nav-menu">
                        <ul>
                            <li><Link to="/Job">Jobs</Link></li>
                            <li><Link to="/IndustriesSolutions">Industries & Solutions</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/Resource">Resources</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/faq">FAQ's</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="headerButtonsGroup">
                    <button type="button" className="saleEnq"><Link to="/login" style={{ textDecoration: 'none' , color: '#fff'}}> Login</Link></button>
                    <button type="button" className="signUp"> <Link to="/register" style={{ textDecoration: 'none', color: '#fff'}}> Register </Link> </button>
                    {/* <div className="dropdown">
                        <button className="dropbtn"> <img className='Langicon' src={LangIcon} alt="#" /> EN <img className='Arrow' src={Arrow} alt="#" /></button>
                        <div className="dropdown-content">
                            <a href="#/">English</a>
                            <a href="#/">Hindi</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Header