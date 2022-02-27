import React, { useState,useContext } from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }

    return <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <Link to="/" className='link'>
                    <span>Homepage</span>
                </Link>
                <Link to="/series" className='link'>
                    <span className="navbarmainLinks">Series</span>
                </Link>
                <Link to="/movies" className='link'>
                    <span className="navbarmainLinks">Movies</span>
                </Link>

                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <i className="icon fas fa-search"></i>
                <span>KID</span>
                <i className="icon fas fa-bell"></i>
                <img src="https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg" alt="" />
                <div className="profile">
                    <i className="icon fas fa-caret-down"></i>
                    <div className="options">
                        <span>Setting</span>
                        <Link to="/login" className='link'><span onClick={() => dispatch(logout())}>Logout</span></Link>
                    </div>
                </div>

            </div>
        </div>
    </div>;
};

export default Navbar;
