import React from 'react';
import searchimage from '../assests/search.png';
import heartimage from '../assests/heart.png';
import cardimage from '../assests/cart.png';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
interface NavProps {
  pageName: string;
}

const Nav: React.FC<NavProps> = ({ pageName })=> {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile'); 
  };

  

  return (
    <nav className="nav">
      <div className="container nav_container">
        <div className="nav_logo">EXCLUSIVE</div>
        <ul className="nav_list">
        <li className="nav_item"><a href="/homepage" className="nav_link">Home</a></li>

          <li className="nav_item"><a href="/register" className="nav_link">Signup</a></li>
          <li className="nav_item"><a href="/about" className="nav_link">About</a></li>
          <li className="nav_item"><a href="/contact" className="nav_link">Contact</a></li>

        </ul>
        <div className="nav_items">
          <form action="#" className="nav_form">
            <input
              type="text"
              className="nav_input"
              placeholder="search here...."
            />            
            <img src={searchimage} alt="" className="nav_search" />
          </form>

          {pageName !== 'login' && pageName !== 'register' && (
            <>

          <img src={heartimage} alt="" className="nav_heart" />
          
            <img src={cardimage} alt="" className="nav_cart" />
            <FaUserCircle className='nav_user' onClick={ handleClick } size={35} />
            
            </>
          )}
        </div>
     
      </div>
    </nav>
  );
};

const MobileNav = () => {
  return (
    <nav className="mobile_nav mobile_nav_hide">
        <ul className="mobile_nav_list">
        <li className="mobile_nav_item">
          <a href="/shop" className="mobile_nav_link">Home</a>
        </li>
        <li className="mobile_nav_item">
          <a href="/register" className="mobile_nav_link">SignUp</a>
        </li>
        <li className="mobile_nav_item">
          <a href="/contact" className="mobile_nav_link">Contact</a>
        </li>
        <li className="mobile_nav_item">
          <a href="/about" className="mobile_nav_link">About</a>
        </li>
      </ul>
    </nav>
  );
};

const Header : React.FC<NavProps> = ({ pageName }) => {
  return (
    <div>
      
      <Nav pageName={pageName} />
      <MobileNav />
    </div>
  );
};

export default Header;
