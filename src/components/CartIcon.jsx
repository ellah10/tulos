import React from 'react';
import { ShoppingBag } from 'lucide-react'; 
import '../Styles/CartIcon.scss'

const CartIcon = ({ itemCount }) => {
  return (
    <div className='shopping-cart'>
      <ShoppingBag className='shop'/>

      {itemCount >= 0  && (
        <span className='shopping'>
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
