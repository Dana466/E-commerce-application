import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import electronics from '../assests/electronics.jpg';
import garden from '../assests/garden.jpg';
import men from '../assests/men.jpg';
import women from '../assests/women.jpg';
const SlideshowContainer = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 20px 300px;
  margin-top: -400px;
`;

const Slide = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
`;

const DotsContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Dot = styled.span<{ isActive: boolean }>`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${({ isActive }) => (isActive ? '#db4444' : '#bbb')};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`;

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: electronics, alt: 'Electronics' },
    { url: garden, alt: 'Garden' },
    { url: men, alt: 'men' },
    { url: women, alt: 'women' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <SlideshowContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          isActive={index === currentSlide}
          style={{ backgroundImage: `url(${slide.url})` }}
        />
      ))}
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </SlideshowContainer>
  );
};

export default Slideshow;
