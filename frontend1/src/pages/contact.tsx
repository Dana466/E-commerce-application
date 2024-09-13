import React from 'react';
import styled from 'styled-components';
import Header from '../components/navigationMenu.tsx';
import Footer from '../components/footer.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BorderWrapper = styled.div`
  padding: 20px;
    padding-right: 10px;

  border: 2px solid #ddd;  // Thinner border
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 50px;  // Space between ContactInfo and ContactForm
`;

const ContactInfo = styled.div`
  flex: 1;
  padding-right: -20px;

  h2 {
    font-size: 1.8em;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
  }

  p {
  margin-left:60px;
    margin-top: 10px;
    font-size: 0.9em;
    line-height: 1;
    margin-bottom: 20px;
  }

  .highlight {
    font-weight: bold;
    color: #db4444;
  }
`;

const ContactForm = styled.div`
  flex: 1;
  padding-left: 10px;
  margin-top: 30px;
  margin-right: 20px;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 20px;
      padding: 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    textarea {
      height: 200px;
      margin-bottom: 20px;
      padding: 10px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 5px;
        font-family: Arial, sans-serif;

    }

    .input-row {
      display: flex;
      justify-content: space-between;

      input {
      height:50px;
        flex: 1;
        margin-right: 10px;
      }

      input:last-child {
        margin-right: 0;
      }
    }

    button {
      padding: 15px;
      background-color: #db4444;
      color: white;
      font-size: 1.2em;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-left: 500px;
      width: 200px;

      &:hover {
        background-color: #c63939;
      }
    }
  }
`;
const MapWrapper = styled.div`
  width: 100%;
  max-width: 1200px; // Limit max width for larger screens
  height: 400px;
  border: 2px solid #ddd; // Border around the map
  border-radius: 10px; // Rounded corners for the map container
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Add subtle shadow
  margin: 30px auto 0; // Center horizontally and add top margin

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px; // Rounded corners for the iframe
  }
`;
const ContactPage: React.FC = () => {
  return (
    <Container>
      <Header pageName="contact" /> {/* Pass the pageName prop */}
      <Section>
        <BorderWrapper>
          <ContactInfo>
            <h2>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                style={{
                  backgroundColor: '#db4444',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '9px', // Reduced padding for smaller size
                  fontSize: '0.8em', // Adjusted font size                  marginLeft: '-170px',
                  marginBottom: '-35px',
                  transform: 'scaleX(-1)', // Reflect the icon
                  marginRight: '170px', // Add space between icon and text
                }}
              />
              Call Us
            </h2>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>

            <h2>
              <br />
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  backgroundColor: '#db4444',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '9px', // Reduced padding for smaller size
                  fontSize: '0.8em', // Adjusted font size                  marginLeft: '-150px',
                  marginBottom: '-35px',
                  marginRight: '180px', // Add space between icon and text
                }}
              />
              Write Us
            </h2>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </ContactInfo>
        </BorderWrapper>

        <BorderWrapper>
          <ContactForm>
            <form>
              <div className="input-row">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" required />
              </div>
              <textarea placeholder="Message" rows={6} required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </ContactForm>
        </BorderWrapper>
      </Section>
      <MapWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.737115476839!2d90.39617981524394!3d23.81031478458242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7486d89a83b%3A0x4f5f7a4646de8c7c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1627900984516!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </MapWrapper>
      <Footer />
    </Container>
  );
};

export default ContactPage;
