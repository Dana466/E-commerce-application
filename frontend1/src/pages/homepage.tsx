import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faLeaf, faTools, faHeart, faBasketballBall, faDog } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/footer.tsx';
import Header from '../components/navigationMenu.tsx';
import NestedMenu from '../components/NestedMenu.tsx';
import Slideshow from '../components/Slideshow.tsx';
import Timer from '../components/Timer.tsx';
import dress from '../assests/dress.jpg';
import jacket from '../assests/jacket.jpg';
import phone from '../assests/phone.jpg';
import blazer from '../assests/blazer.jpg';
import heel from '../assests/heel.jpg';
import gucci from '../assests/gucci.jpg';
import jbl from '../assests/jbl.png';
import  men1 from '../assests/men1.png';
import men2 from '../assests/men2.jpg';
import men3 from '../assests/men3.png';
import elec1 from '../assests/watch.jpg';
import elec2 from '../assests/elec2.jpg';
import elec3 from '../assests/elec3.jpg';
import med1 from '../assests/med1.jpg';
import med2 from '../assests/med2.png';
import med3 from '../assests/med3.jpg';
import sport1 from '../assests/sport1.jpg';
import sport2 from '../assests/sport2.jpg';
import sport3 from '../assests/sport3.jpg';
import toy1 from '../assests/toy1.jpg';
import toy2 from '../assests/toy2.jpg';
import toy3 from '../assests/toy3.jpg';
import ad from '../assests/ad.jpg';
import ad1 from '../assests/ad1.jpg';
import pet1 from '../assests/pet1.jpg';
import pet2 from '../assests/pet2.jpg';
import pet3 from '../assests/pet3.jpg';
import health1 from '../assests/health1.jpg';
import health2 from '../assests/health2.jpg';
import health3 from '../assests/health3.jpg';

import { useCart } from '../context/cartcontext.tsx'; // Import the useCart hook

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Space between the original and discounted prices */
`;

const OriginalPrice = styled.span`
  font-size: 18px;
  color: #888; /* Gray color for the original price */
  text-decoration: line-through; /* Strikethrough effect */
`;

const DiscountedPrice = styled.span`
  font-size: 20px;
  color: red; /* Color for the discounted price */
  font-weight: bold; /* Bold font for emphasis */
`;

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
`;

const Section = styled.section`
  padding: 50px;

  h1 {
    font-size: 2em;
  }

  p {
    margin: 10px 0px;
    font-weight: bold; /* Make headings bold */
    font-size: 20px;
  }

  .product,
  .category {
    width: 30%;
    float: left;
    margin: 1.66%;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
  }

  .product img,
  .category img {
    width: 100%;
    height: auto;
    transition: opacity 0.3s ease-in-out;
  }

  .product .add-to-cart,
  .category .add-to-cart {
    background-color: black;
    color: white;
    border: none;
    padding: 10px; /* Adjust the padding as needed */
    font-size: 18px;
    cursor: pointer;
    position: absolute;
    bottom: 155px; /* Position it at the top of the image */
    left: 50%;
    transform: translateX(-50%);
    width: 90%; /* Make the button the same width as the image */
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .product:hover .add-to-cart,
  .category:hover .add-to-cart {
    opacity: 0.7; /* Adjusted opacity for hover state */
  }

  .price {
    font-size: 18px;
    color: #db4444;
    margin-top: 10px;
    font-weight: bold; /* Make headings bold */
  }

  .rating {
    margin-top: 5px;
    color: #ffa500;
    font-size: 30px;
  }

  .discount {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #db4444; /* Adjusted color if needed */
    color: #fff;
    padding: 10px 15px; /* Increased padding for a larger size */
    font-size: 16px; /* Increased font size */
    border-radius: 8px; /* Larger border-radius for better proportionality */
  }

  button {
    background-color: #db4444;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px; /* Soft edges for the rectangle */

  }

  #build button,
  #shop button,
  #support button {
    background-color: red;
  }
`;

const Bullet = styled.div`
  width: 20px;
  height: 30px; /* Adjusted height to make it more rectangular */
  background-color: #db4444;
  border-radius: 5px; /* Soft edges for the rectangle */
  border: 2px solid #fff; /* Optional: white border for better visibility */
  margin-right: 10px; /* Space between bullet and heading */
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0; /* Distance from the top of the viewport */
  background-color: #fff; /* Background color for visibility */
  padding: 20px; /* Padding for spacing */
  z-index: 1000; /* Ensure it's above other content */
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  justify-content: center; /* Centers items horizontally */
  margin: 0 auto; /* Centers the container itself */
  padding: 0 20px; /* Optional padding for spacing */
`;

const CategoryBox = styled.div`
  width: 150px; /* Square size */
  height: 150px; /* Square size */
  display: flex;
  flex-direction: column; /* Arrange icon and text vertically */
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Background color of the box */
  border: 1px solid #ddd; /* Border around the box */
  border-radius: 10px; /* Rounded corners */
  text-align: center;
  margin: 10px; /* Space between category boxes */
  cursor: pointer;
  transition: background-color 0.3s;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */

  &:hover {
    background-color: #e0e0e0; /* Color change on hover */
  }

  i {
    font-size: 60px; /* Size of the icon */
    color: #333; /* Color of the icon */
  }

  p {
    margin-top: 10px; /* Space between icon and text */
    font-size: 18px;
    color: #333;
  }
`;


const ImageWrapper = styled.div`
padding-top:50px;
  position: relative;
  display: flex;
  align-items: center; /* Center image vertically */
  justify-content: center; /* Center image horizontally */
  width: 100%; /* Adjust as needed */
  width: 1000px; /* Max width to control the size */
  margin: 0 auto;
`;

const CenteredImage = styled.img`
  display: block;
  width: 100%; /* Makes the image responsive */
  height: auto; /* Maintains the aspect ratio */
`;

const TimerOverlay = styled.div`
  position: absolute;
  bottom: 10px; /* Position it at the bottom */
  left: 10px; /* Position it at the left */
  color: white; /* Set text color to white */
  padding: 10px;
  border-radius: 5px; /* Rounded corners */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
    /* Example of additional specificity */
  > span, > div {
    color: white !important; /* Use !important to ensure the style is applied */
  }
`;

const Heading = styled.h1`
  margin-right: 50px; /* Space between heading and surrounding elements */
  font-size: 2em;
`;
const heading = styled.p`
  margin-right: 50px; /* Space between heading and surrounding elements */
`;
const HomePage: React.FC = () => {
  const navigateToCategory = (path: string) => {
    // Implement navigation logic here
    // For example, using react-router
    window.location.href = path;
  };
  const navigate = useNavigate(); // Use the useNavigate hook

  const { addToCart } = useCart(); // Use the addToCart function from context

  const products = [
    { id: 1, name: 'Dress for her', price: 29.99, image: dress, originalPrice: 59.99, discount: '20% OFF', rating: '★★★★☆' },
    { id: 2, name: 'Cozy Jacket', price: 39.99, image: jacket, originalPrice: 79.99, discount: '15% OFF', rating: '★★★★★' },
    { id: 3, name: 'iPhone 16 Pro Max', price: 1000.99, image: phone, originalPrice: 1300.99, discount: '10% OFF', rating: '★★★☆☆' },
    { id: 4, name: 'Baige Blazer', price: 149.99, image: blazer, originalPrice: 200.00, discount: '25% OFF', rating: '★★★★☆' },
    { id: 5, name: 'Gucci Duffle Bag', price: 800.99, image: gucci, originalPrice: 1000.00, discount: '20% OFF', rating: '★★★★★' },
    { id: 6, name: 'Yves Saint-Laurent Heels', price: 900.99, image: heel, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 7, name: 'Sport-chique set', price: 1200.99, image: men1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 8, name: 'Brunello Cucinelli shoe', price: 800.99, image: men2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 9, name: 'Summer pyjamas', price: 100.99, image: men3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 10, name: ' Apple watch', price: 1000.99, image: elec1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 11, name: ' JBL headphones', price: 300.99, image: elec2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 12, name: ' Wireless Mouse', price: 100.99, image: elec3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 13, name: ' ORTHOFORTIN vitamin', price: 50.99, image: med1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 14, name: ' Bioniq Products', price: 70.99, image: med2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 15, name: ' Omega 3', price: 40.99, image: med3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 16, name: ' Camping Tent', price: 20.99, image: sport1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 17, name: ' Sleeping bag', price: 10.99, image: sport2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 18, name: ' Water Bottle', price: 7.99, image: sport3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 19, name: ' Balance Bike', price: 30.99, image: toy1, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 20, name: ' Balance Board', price: 20.99, image: toy2, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 21, name: ' Wooden Blocks', price: 7.50, image: toy3, originalPrice: 1100.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 22, name: ' Pet Spray', price: 7.50, image: pet1, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 23, name: ' Cat Food', price: 7.50, image: pet2, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 24, name: ' Dog Grooming Tools', price: 13.50, image: pet3, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 25, name: ' Vegan Skincare set', price: 10.50, image: health1, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 26, name: ' Kopari Clean set', price: 11.50, image: health2, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },
    { id: 27, name: ' ikeike. lipstick set', price: 12.50, image: health3, originalPrice: 2.00, discount: '15% OFF', rating: '★★★★☆' },

  ];
  

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
    navigate('/cart');
  };
  const handleContactUs = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <Container>
      <Header pageName="homepage" /> {/* Pass the pageName prop */}
      <NestedMenu />
      <Slideshow />

      <Section id="sales">
        <HeadingContainer>
          <Bullet />
          <Heading>Flash Sales</Heading>
          <Timer />
        </HeadingContainer>

        {products.slice(0, 3).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <div className="discount">{product.discount}</div>
            <p>{product.name}</p>
            <PriceWrapper>
              <OriginalPrice>${product.originalPrice.toFixed(2)}</OriginalPrice>
              <DiscountedPrice>${product.price.toFixed(2)}</DiscountedPrice>
            </PriceWrapper>
            <div className="rating">{product.rating}</div>
          </div>
        ))}
      </Section>

      <Section id="categories">
        <HeadingContainer>
          <Bullet />
          <h1>Categories</h1>
        </HeadingContainer>

        <CategoryContainer>
          <CategoryBox onClick={() => navigateToCategory('/outfits')}>
            <FontAwesomeIcon icon={faTshirt} size="2x" style={{ color: '#db4444' }}/> 
            <p>Outfits</p>
          </CategoryBox>
          <CategoryBox onClick={() => navigateToCategory('/garden-tools')}>
            <FontAwesomeIcon icon={faLeaf} size="2x" style={{ color: '#db4444' }}/>
            <p>Garden Tools</p>
          </CategoryBox>
          <CategoryBox onClick={() => navigateToCategory('/electronics')}>
            <FontAwesomeIcon icon={faTools} size="2x" style={{ color: '#db4444' }}/>
            <p>Electronics</p>
          </CategoryBox>
          <CategoryBox onClick={() => navigateToCategory('/health-beauty')}>
            <FontAwesomeIcon icon={faHeart} size="2x" style={{ color: '#db4444' }}/>
            <p>Health & Beauty</p>
          </CategoryBox>
          <CategoryBox onClick={() => navigateToCategory('/toys')}>
            <FontAwesomeIcon icon={faBasketballBall} size="2x" style={{ color: '#db4444' }}/>
            <p>Toys</p>
          </CategoryBox>
          <CategoryBox onClick={() => navigateToCategory('/pets')}>
            <FontAwesomeIcon icon={faDog} size="2x" style={{ color: '#db4444' }}/>
            <p>Pets</p>
          </CategoryBox>
        </CategoryContainer>
      </Section>

      {/* New Section for Products After Categories */}
      <Section id="womens-fashion">
        <HeadingContainer>
          <Bullet />
          <Heading>Woman's Fashion</Heading>
        </HeadingContainer>
        
        {products.slice(3, 6).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <p>{product.name}</p>
            <PriceWrapper>
              <DiscountedPrice>${product.originalPrice.toFixed(2)}</DiscountedPrice>
            </PriceWrapper>
            <div className="rating">{product.rating}</div>
          </div>
        ))}
      </Section>

     


      <Section id="featured">
        <ImageWrapper>
          <CenteredImage src={ad1} alt="Product 3" />
          <TimerOverlay>
            <Timer /> {/* Place your Timer component here */}
          </TimerOverlay>
        </ImageWrapper>
      </Section>

      <Section id="mens-fashion">
        <HeadingContainer>
          <Bullet />
          <Heading>Men's Fashion</Heading>
        </HeadingContainer>
        
        {products.slice(6, 9).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <p>{product.name}</p>
            <PriceWrapper>
              <DiscountedPrice>${product.originalPrice.toFixed(2)}</DiscountedPrice>
            </PriceWrapper>
            <div className="rating">{product.rating}</div>
          </div>
        ))}
      </Section>

      <Section id="featured">
        <ImageWrapper>
          <CenteredImage src={jbl} alt="Product 3" />
          <TimerOverlay>
            <Timer /> {/* Place your Timer component here */}
          </TimerOverlay>
        </ImageWrapper>
      </Section>


      <Section id="electronics">
        <HeadingContainer>
          <Bullet />
          <Heading>Electronics</Heading>
        </HeadingContainer>
        
        {products.slice(9, 12).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <p>{product.name}</p>
            <PriceWrapper>
              <DiscountedPrice>${product.originalPrice.toFixed(2)}</DiscountedPrice>
            </PriceWrapper>
            <div className="rating">{product.rating}</div>
          </div>
        ))}
      </Section>

      <Section id="medicine">
        <HeadingContainer>
          <Bullet />
          <Heading>Medicine</Heading>
        </HeadingContainer>
        
        {products.slice(12, 15).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <p>{product.name}</p>
            <PriceWrapper>
              <DiscountedPrice>${product.originalPrice.toFixed(2)}</DiscountedPrice>
            </PriceWrapper>
            <div className="rating">{product.rating}</div>
          </div>
        ))}
      </Section>
      <Section id="sports-outdoor">
        <HeadingContainer>
          <Bullet />
          <Heading>Sports and Outdoor</Heading>
        </HeadingContainer>
        
        {products.slice(15, 18).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <p>{product.name}</p>
            <PriceWrapper>
              <DiscountedPrice>${product.originalPrice.toFixed(2)}</DiscountedPrice>
            </PriceWrapper>
            <div className="rating">{product.rating}</div>
          </div>
        ))}
      </Section>
      <Section id="babies-toys">
        <HeadingContainer>
          <Bullet />
          <Heading>Baby's and Toys</Heading>
        </HeadingContainer>
        
        {products.slice(18, 21).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <p>{product.name}</p>
            <PriceWrapper>
              <DiscountedPrice>${product.originalPrice.toFixed(2)}</DiscountedPrice>
            </PriceWrapper>
            <div className="rating">{product.rating}</div>
          </div>
        ))}
      </Section>

      <Section id="featured">
        <ImageWrapper>
          <CenteredImage src={ad} alt="Product 3" />
          <TimerOverlay>
            <Timer /> {/* Place your Timer component here */}
          </TimerOverlay>
        </ImageWrapper>
      </Section>

      <Section id="pets">
        <HeadingContainer>
          <Bullet />
          <Heading>Pets</Heading>
        </HeadingContainer>
        
        {products.slice(21, 24).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <p>{product.name}</p>
            <PriceWrapper>
              <DiscountedPrice>${product.originalPrice.toFixed(2)}</DiscountedPrice>
            </PriceWrapper>
            <div className="rating">{product.rating}</div>
          </div>
        ))}
      </Section>

      <Section id="health-beauty">
        <HeadingContainer>
          <Bullet />
          <Heading>Health and Beauty</Heading>
        </HeadingContainer>
        
        {products.slice(24, 27).map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <p>{product.name}</p>
            <PriceWrapper>
              <DiscountedPrice>${product.originalPrice.toFixed(2)}</DiscountedPrice>
            </PriceWrapper>
            <div className="rating">{product.rating}</div>
          </div>
        ))}
      </Section>

      <Section id="support">
      <HeadingContainer>
          <Bullet />
          <h1>Customer Support</h1>   
        </HeadingContainer>
        <p>Have questions? We're here to help.</p>
        <button onClick={handleContactUs}>Contact Us</button> {/* Add button with onClick */}
        </Section>
      <Footer />
    </Container>
  );
};

export default HomePage;
