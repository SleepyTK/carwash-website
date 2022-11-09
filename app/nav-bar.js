import "./globals.css";
import logo_2 from "./images/logo-placeholder_b&w.png";

export default function NavBar() {

    return (
        <header className="header">
            <div className="logo">
                CARWASH
            </div>
            <div className="navBar">

                <input type="checkbox" className="toggle-menu"/>
                <div className="hamburger"></div>

                <ul className="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#book">Book</a></li>
                    <li><a href="#info">Info</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a className="most-right-menu-element" href="#contact">Contact</a></li>
                </ul>
            </div> 
        </header>
    );
}