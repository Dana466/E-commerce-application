import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const AddressInputWrapper = styled.div`
  position: relative;
`;

const AddressInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Location: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current!, {
        types: ['address'],
        componentRestrictions: { country: 'us' }, // Optional: restrict to a specific country
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          // You can use place.geometry.location to get latitude and longitude
          console.log('Address:', place.formatted_address);
        }
      });
    }
  }, []);

  return (
    <AddressInputWrapper>
      <AddressInput
        ref={inputRef}
        type="text"
        placeholder="Enter your address"
        required
      />
    </AddressInputWrapper>
  );
};

export default Location;
