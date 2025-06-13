import React from 'react';
import { ShoppingBag } from 'lucide-react'; 

const CartIcon = ({ itemCount }) => {
  return (
    <div>
      <ShoppingBag/>

      {itemCount > 0 && (
        <span>
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
