import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types/index.ts';
import { getInitialCart, addToCartHelper, updateQtyHelper } from '../utils/cartUtils.ts';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'qty'>) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, change: number) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(getInitialCart);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const addToCart = (itemToAdd: Omit<CartItem, 'qty'>) => {
    setItems(prev => addToCartHelper(prev, itemToAdd));
  };

  const removeFromCart = (id: number) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQty = (id: number, change: number) => {
    setItems(prev => updateQtyHelper(prev, id, change));
  };

  const cartCount = items.reduce((count, item) => count + item.qty, 0);
  const cartTotal = items.reduce((total, item) => total + item.price * item.qty, 0);

  const value = { items, addToCart, removeFromCart, updateQty, cartCount, cartTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};