import React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer.tsx';
import Header from '../components/navigationMenu.tsx';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontext.tsx';
const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
`;
const Section = styled.section`
  button {
    background-color: #db4444;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-right: 10px;
    &:hover {
      background-color: #c63939;
    }
  }
`;

const CartTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th, td {
    padding: 12px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  td {
    text-align: center;
  }
`;

const CouponSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
`;

const CouponInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CouponInput = styled.input`
  width: 200px; /* Adjust the width as needed */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px; /* Add some space between the input and button */
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #db4444;
    outline: none;
  }
`;

const Input = styled.input`
  width: 60px;
  text-align: center;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #db4444;
    outline: none;
  }
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 18px;
  font-weight: bold;
`;

const CartSummary = styled.div`
  border: 1px solid #333;
  padding: 10px;
  border-radius: 5px;
  width: 300px;
`;

const Button = styled.button`
  background-color: #ffffff;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 0.3s ease;
  margin-right: 10px;
  &:hover {
    background-color: #A1A1A1;
    color: white;
      border: 1px solid white;

  }
`;

const CartPage: React.FC = () => {
  const { cart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleReturnToShop = () => {
    navigate('/homepage');
  };

  const handleApplyCoupon = () => {
    console.log('Coupon applied');
  };

  const handleQuantityChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(event.target.value);
    if (Number.isInteger(quantity) && quantity >= 0) {
      updateQuantity(id, quantity);
    } else {
      console.error('Invalid quantity');
    }
  };

  const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <>
    <Container>
    <Header pageName="cart" /> {/* Pass the pageName prop */}
    <div style={{ padding: '20px' }}>
        <h1>Your Cart</h1>
        <br />
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <CartTable>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price ? product.price.toFixed(2) : '0.00'}</td>
                    <td>
                      <Input
                        type="number"
                        value={product.quantity}
                        min="0"
                        onChange={(event) => handleQuantityChange(product.id, event)}
                      />
                    </td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </CartTable>
            <Button onClick={handleReturnToShop}>Add another product</Button>
            <br></br>
            <br></br>

            <CouponSection>
              <CouponInputWrapper>
                <CouponInput type="text" placeholder="Enter coupon code" />
                <Section>
                  <button onClick={handleApplyCoupon}>Apply Coupon</button>
                </Section>
              </CouponInputWrapper>
              <CartSummary>
                <h3>Cart Total</h3>
                <span>${totalPrice.toFixed(2)}</span>
                <p>Shipping</p>
                <p>Free</p>
                <p>Total</p>
                <span>${totalPrice.toFixed(2)}</span>
                <Section>
                  <br />
                  <button onClick={() => navigate('/checkout')}>Proceed to checkout</button>
                </Section>
              </CartSummary>
            </CouponSection>


          </>
        )}
      </div>
      <Footer />
      </Container>
    </>
  );
};

export default CartPage;
