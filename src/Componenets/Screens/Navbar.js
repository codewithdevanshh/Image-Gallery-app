
import logo from './Logo.jpg';
import personLogo from './Personlogo.jpg'
import './Style.css'
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect,useState } from 'react';
import { AuthContext } from './AuthContext';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);
    const name = localStorage.getItem("name");
    const { setToken } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleLogout = () => {
        
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('name'); 
        navigate('/Login');

    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="navbar-logo-img" />
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <h1>{name}</h1>
                </li>
                <li className="nav-item">
                    <div className="navbar-personlogo" onClick={() => setShowDropdown(!showDropdown)}>
                        <img src={personLogo} alt="" className="navbar-personlogo-img" />
                        {showDropdown && (
                            <div className="dropdown-content">
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
