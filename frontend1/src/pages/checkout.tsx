import React from 'react';
import styled from 'styled-components';
import Header from '../components/navigationMenu.tsx';
import Footer from '../components/footer.tsx';
import { useCart } from '../context/cartcontext.tsx';
import visa from '../assests/visa.png';
import mastercard from '../assests/mastercard.png';
import bkash from '../assests/bkash.png';
import Location from '../components/location.tsx'

// Styled components for the Checkout page
const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
`;

const Section = styled.section`
  padding: 50px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
    width: 100%; /* Increased width */
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .form-group input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
  }

  .form-group input[type="checkbox"] + label {
    display: inline;
  }

  .form-actions {
    margin-top: 20px;
  }

  .form-actions button {
    width: 100%;
    background-color: #db4444;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
  }

  .checkout-summary {
    width: 40%;
    padding: 20px;
    border-radius: 5px;
    margin-right: 70px;
    display: flex;
    flex-direction: column;
  }

  .checkout-summary h2 {
    font-size: 1.5em;
    margin-bottom: 15px;
  }

  .checkout-summary-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .checkout-summary-item img {
    width: 80px; /* Adjust the size as needed */
    height: auto;
    margin-right: 15px;
    border-radius: 5px;
  }

  .checkout-summary-item .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }

  .checkout-summary-item .details p {
    margin: 0;
    font-size: 16px;
  }

  .checkout-summary-item .details .price {
    font-weight: bold;
  }

  .summary-totals {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .summary-totals div {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin: 10px 0;
  }

  .summary-totals .total-label {
    font-weight: bold;
  }
  label {
    font-weight: bold;
    
  }
  .summary-totals .total-price {
    font-weight: bold;
  }

  .payment-options {
    margin-top: 20px;
  }

  .payment-options input {
    margin-right: 10px;
  }

  .coupon-section {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .coupon-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 10px;
  }

  .coupon-button {
    background-color: #db4444;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c63939;
    }
  }

  .place-order-button {
  width:50%;
    background-color: #db4444;
    color: white;
    border: none;
    padding: 15px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c63939;
    }
  }
`;

const Checkout: React.FC = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  const shippingCost = 0; // Assume shipping is free for now

  return (
    <Container>
      <Header pageName="checkout" /> {/* Pass the pageName prop */}
      <Section>
        <div>
          <h1>Billing Details</h1>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>

            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input type="text" id="companyName" name="companyName" />
            </div>

            <div className="form-group">
            <label htmlFor="streetAddress">Street Address</label>
            <Location />
            </div>

            <div className="form-group">
              <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
              <input type="text" id="apartment" name="apartment" />
            </div>

            <div className="form-group">
              <label htmlFor="townCity">Town/City</label>
              <input type="text" id="townCity" name="townCity" required />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" required />
            </div>

            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input type="email" id="emailAddress" name="emailAddress" required />
            </div>

            <div className="form-group">
              <input type="checkbox" id="saveInfo" name="saveInfo" />
              <label htmlFor="saveInfo">Save this information for faster check-out next time</label>
            </div>

            <div className="form-actions">
              {/* Optionally add a button here if needed */}
            </div>
          </form>
        </div>

        <div className="checkout-summary">
          {cart.map(product => (
            <div key={product.id} className="checkout-summary-item">
              <img src={product.image} alt={product.name} /> {/* Adjust image URL as needed */}
              <div className="details">
                <p>{product.name} x {product.quantity}</p>
                <p className="price">${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          
          <div className="summary-totals">
            <div>
              <span className="total-label">Subtotal:</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <hr />
            <div>
              <span className="total-label">Shipping:</span>
              <span className="total-price">${shippingCost.toFixed(2)}</span>
            </div>
            <hr />
            <div>
              <span className="total-label">Total:</span>
              <span className="total-price">${(totalPrice + shippingCost).toFixed(2)}</span>
            </div>
          </div>

          <div className="payment-options">
          <div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={visa} alt="Visa" style={{ width: '50px', height: 'auto', marginRight: '5px' }} />
  <img src={mastercard} alt="MasterCard" style={{ width: '70px', height: 'auto', marginRight: '5px' }} />
  <img src={bkash} alt="Bkash" style={{ width: '60px', height: 'auto', marginRight: '5px' }} />
</div>

            <div>
              <input type="radio" id="bank" name="paymentMethod" value="bank" />
              <label htmlFor="bank">Bank</label>

            </div>
            <div>
            <br></br>

              <input type="radio" id="cod" name="paymentMethod" value="cod" />
              <label htmlFor="cod" >Cash on Delivery </label>
              
            </div>
          </div>
          <br></br>

          <div className="coupon-section">
          <br></br>

            <input type="text" placeholder="Enter coupon code" className="coupon-input" />
            <button className="coupon-button">Apply Coupon</button>
          </div>

          <button className="place-order-button">Place Order</button>
        </div>
      </Section>
      <Footer />
    </Container>
  );
};

export default Checkout;
