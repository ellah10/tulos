import React from "react";
import { Repeat } from "lucide-react";


const WearCard = ({ wear }) => {
  return (
    <div className="wear-card">
      <div className="wear-card-item">
        <a href="#">
          <img src={wear.image} alt={wear.name} />
        </a>
        <div className="wear-card-text">
          <h2>{wear.name}</h2>
          <p className="desc">{wear.description}</p>
          <div className="prices">
            <p className="price">{wear.price}</p>
            {wear.PromoPrice && (
              <p className="promo-price">{wear.PromoPrice}</p>
            )}
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default WearCard;
