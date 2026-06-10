import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import "./Navbar.css";
import { FaMicrophone } from "react-icons/fa";
import VoiceAssistant from "./VoiceAssistant";
import logo from "../assets/logo.png";
import loginImg from "../assets/bread-login.png";
import homeImg from "../assets/bread-home.png";
import contactImg from "../assets/bread-contact.png";
import aboutImg from "../assets/bread-about.png";
import profileImg from "../assets/profile.png";

export default function Navbar() {
  const { getCartCount } = useCart();
  const { isAuthenticated, user } = useAuth();
  
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Honore" />
        <span className="brand-name">BakeHub</span>
      </div>

      <ul className="nav-menu">
        <li>
          <img src={loginImg} alt="" />
          <Link to="/login">Login</Link>
        </li>
        <li>
          <img src={homeImg} alt="" />
          <Link to="/">Home</Link>
        </li>
        <li>
          <img src={contactImg} alt="" />
          <span>Contact</span>
        </li>
        <li>
          <img src={aboutImg} alt="" />
          <span>About</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <Link to="/search-products">Search</Link>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cart-icon">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <Link to="/cart">Cart {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}</Link>
        </li>
        {isAuthenticated && (
          <li>
            <img src={profileImg} alt="Profile" className="profile-icon" />
            <Link to="/profile">Profile</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
