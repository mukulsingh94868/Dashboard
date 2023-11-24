import React from 'react';
import './header.css';
import Logo from '../../Assets/logo.svg'
import LangIcon from '../../Assets/global-svgrepo-com.svg'
import Arrow from '../../Assets/arrow-down-338-svgrepo-com.svg'
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <>
            <div className="container mainheader">
                <div className="header-logo">
                   <Link to="/"><img className='logo' src={Logo} alt="#" /></Link> 
                    <div className="nav-menu">
                        <ul>
                            <li><Link to="/Job">Jobs</Link></li>
                            <li><Link to="/IndustriesSolutions">Industries & Solutions</Link></li>
                            <li><Link to="/About">About Us</Link></li>
                            <li><Link to="/Resource">Resources</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="headerButtonsGroup">
                    <button type="button" className="signUp"> <Link to="/register" style={{ textDecoration: 'none', color: '#fff'}}> Register </Link> </button>
                    <button type="button" className="saleEnq"><Link to="salesform" style={{ textDecoration: 'none' , color: '#fff'}}> Sales Enquiry</Link></button>
                    <div className="dropdown">
                        <button className="dropbtn"> <img className='Langicon' src={LangIcon} alt="#" /> EN <img className='Arrow' src={Arrow} alt="#" /></button>
                        <div className="dropdown-content">
                            <a href="#">English</a>
                            <a href="#">Hindi</a>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Header