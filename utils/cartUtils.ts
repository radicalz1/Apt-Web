import { CartItem } from '../types/index.ts';

export const getInitialCart = (): CartItem[] => {
    try {
        const stored = localStorage.getItem('cartItems');
        return stored ? JSON.parse(stored) : [];
    } catch { 
        console.error("Failed to parse cart items from localStorage");
        return []; 
    }
};

export const addToCartHelper = (items: CartItem[], itemToAdd: Omit<CartItem, 'qty'>): CartItem[] => {
  const existing = items.find(i => i.id === itemToAdd.id);
  if (existing) {
    return items.map(i => i.id === itemToAdd.id ? { ...i, qty: i.qty + 1 } : i);
  }
  return [...items, { ...itemToAdd, qty: 1 }];
};

export const updateQtyHelper = (items: CartItem[], id: number, change: number): CartItem[] => {
   return items
    .map(i => (i.id === id ? { ...i, qty: i.qty + change } : i))
    .filter(i => i.qty > 0);
};