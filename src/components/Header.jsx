import logo from '../../src/logo.png';
import { useState } from 'react';

const Header = () => {
    // useState must be called outside JSX
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Logo"></img>
            </div>
            
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }} 
                        className='login'>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>  
    );
};

export default Header;

