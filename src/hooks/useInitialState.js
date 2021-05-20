import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    });
  };

  return {
    addToCart,
    addBuyer,
    removeFromCart,
    state,
  };
};

export default useInitialState;
