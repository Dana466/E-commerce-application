import React from 'react';
import styled from 'styled-components';
import Header from '../components/navigationMenu.tsx';
import Footer from '../components/footer.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Images
import company from '../assests/company.jpg';
import manager from '../assests/manager.jpg';
import designer from '../assests/designer.jpg';
import founder from '../assests/founder.avif';
import delivery from '../assests/delivery.png';
import customer from '../assests/customer.png';
import service from '../assests/service.png';
import one from '../assests/1.png';
import two from '../assests/2.png';
import three from '../assests/3.png';
import four from '../assests/4.png';

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  color: #333;
`;

const Section = styled.section`
  padding: 50px;
  text-align: center;
`;

const OurStory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    font-size: 2.5em;
    margin-right: 30px;
    margin-top: 100px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  p {
    font-size: 1.2em;
    line-height: 1.6;
    max-width: 600px;
    text-align: left;
    margin-left: 50px;
  }
`;

const MainImage = styled.img`
  width: 500px;
  height: auto;
  margin-right: 50px;
  margin-top: 150px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const IconImage = styled.img`
  width: 80px;
  height: auto;
  padding-bottom: 10px;
    padding-top: 30px;


  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const BenefitsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin-bottom: -20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const BenefitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  border-radius: 10px;
  text-align: center;

  svg {
    font-size: 3em;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: black;
  }

  p {
    font-size: 1em;
    color: black;
  }
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Adjusted to 4 columns */
  gap:5px;
  margin-bottom: 100px;
  padding: 20px; /* Padding inside the border */
  padding-top: 80px; /* Padding inside the border */
  padding-bottom: 50px; /* Padding inside the border */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
width:250px;
  border-radius: 5px;
  text-align: center;
  border: 2px solid #ccc; /* Box border */

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    font-size: 3em;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: black;
  }

  p {
    font-size: 1em;
    color: black;
  }
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TeamMember = styled.div`
  text-align: center;
  margin: 0 15px;

  img {
    width: 200px;
    height: 350px;
    object-fit: cover;
    border-radius: 0;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
    margin-bottom: 15px;
  }

  .social-icons {
    display: flex;
    justify-content: center;

    a {
      color: #333;
      margin: 0 10px;
      font-size: 1.5em;

      &:hover {
        color: #db4444;
      }
    }
  }
`;

const AboutPage: React.FC = () => {
  return (
    <Container>
      <Header pageName="about" /> {/* Pass the pageName prop */}
      <Section>
        <OurStory>
          <div>
            <h1>Our Story</h1>
            <br />
            <p>
              Founded in a small garage in 1994, our company began as an ambitious idea to create an online marketplace where anyone could find and buy anything. What started as a simple online bookstore quickly expanded into a global e-commerce giant, offering millions of products across various categories, from electronics and clothing to groceries and cloud computing services. Our relentless focus on customer satisfaction, innovation, and operational excellence has driven our growth and helped us become a leader in the digital economy. Today, we are not just an online retailer but a technology company dedicated to making life easier for our customers, whether through our fast and reliable delivery service, our innovative devices, or our cutting-edge cloud infrastructure. We continue to push the boundaries of what’s possible, always with our customers at the heart of everything we do.
            </p>
          </div>
          <MainImage src={company} alt="Company" />
        </OurStory>

        <InfoSection>
          <InfoBox>
            <IconImage src={one} alt="one" />
            <h4>10.5k</h4>
            <p>Salers active our site</p>
          </InfoBox>
          <InfoBox>
            <IconImage src={two} alt="two" />
            <h4>33k</h4>
            <p>Monthly Product Sale</p>
          </InfoBox>
          <InfoBox>
            <IconImage src={three} alt="three" />
            <h4>45.5k</h4>
            <p>Customer active in our site</p>
          </InfoBox>
          <InfoBox>
            <IconImage src={four} alt="four" />
            <h4>25k</h4>
            <p>Anual gross sale in our site</p>
          </InfoBox>
        </InfoSection>

        <TeamSection>
          <TeamMember>
            <img src={manager} alt="Manager" />
            <h3>John Doe</h3>
            <p>Manager</p>
            <div className="social-icons">
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </TeamMember>
          <TeamMember>
            <img src={designer} alt="Designer" />
            <h3>Jane Doe</h3>
            <p>Designer</p>
            <div className="social-icons">
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </TeamMember>
          <TeamMember>
            <img src={founder} alt="Founder" />
            <h3>Sam Smith</h3>
            <p>Founder</p>
            <div className="social-icons">
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </TeamMember>
        </TeamSection>

        <BenefitsSection>
          <BenefitBox>
            <IconImage src={delivery} alt="Delivery" />
            <h4>Free and Fast Delivery</h4>
            <p>Free delivery for all orders over $140</p>
          </BenefitBox>
          <BenefitBox>
            <IconImage src={customer} alt="Customer Service" />
            <h4>24/7 Customer Service</h4>
            <p>Friendly 24/7 customer support</p>
          </BenefitBox>
          <BenefitBox>
            <IconImage src={service} alt="Service" />
            <h4>Money Back Guarantee</h4>
            <p>We return money within 30 days</p>
          </BenefitBox>
        </BenefitsSection>
      </Section>
      <Footer />
    </Container>
  );
};

export default AboutPage;
