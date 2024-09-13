import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  font-family: Arial, sans-serif;
  position: relative;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background: #fff;
  width: 240px;
  border: 1px solid #ddd;
`;

const MenuItem = styled.li`
  &:last-child {
    border-bottom: none;
  }
`;

const MenuLink = styled.a`
  display: block;
  padding: 15px;
  color: #000;
  text-decoration: none;
  background: #f9f9f9;
  
  &:hover {
    background: #eee;
    color: #666;
  }
`;

const NestedMenu: React.FC = () => {
  return (
    <MenuWrapper>
      <Menu>
        <MenuItem><MenuLink href="#womens-fashion">Women's Fashion</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#mens-fashion">Men's Fashion</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#electronics">Electronics</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#medicine">Medicine</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#sports-outdoor">Sports & Outdoor</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#babies-toys">Baby's & Toys</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#pets">Pets</MenuLink></MenuItem>
        <MenuItem><MenuLink href="#health-beauty">Health & Beauty</MenuLink></MenuItem>
      </Menu>
    </MenuWrapper>
  );
};

export default NestedMenu;
