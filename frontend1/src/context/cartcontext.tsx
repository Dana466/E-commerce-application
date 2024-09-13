// context/cartcontext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  updateQuantity: (id: string, quantity: number) => void;
  addToCart: (product: Product) => void; // Add this line
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
