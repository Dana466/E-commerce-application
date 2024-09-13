import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_item">
          <a href="#" className="footer_logo">Exclusive</a>
          <div className="footer_p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem fuga harum voluptate?
          </div>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Lebanon, Bekaa</li>
            <li className="li footer_list_item">email@gmail.com</li>
            <li className="li footer_list_item">+961 712 456 78</li>
            <li className="li footer_list_item">+961 812 345 67</li>
          </ul>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Account</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Account</li>
            <li className="li footer_list_item">Login / Register</li>
            <li className="li footer_list_item">Cart</li>
            <li className="li footer_list_item">Shop</li>
          </ul>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Legal</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Privacy policy</li>
            <li className="li footer_list_item">Terms of use</li>
            <li className="li footer_list_item">FAQ's</li>
            <li className="li footer_list_item">Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container footer_bottom_container">
          <p className="footer_copy">
            Copyright Exclusive 2023. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
