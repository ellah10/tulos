import React from "react";
import WearCard from "./WearCard";
import { Repeat } from "lucide-react";
import '../Styles/WearList.scss'

const Wears = [
  {
    id: 1,
    image: "/image1.webp",
    name: "Adult Ultra Cotton T-Shirt, Style G2000, Multipack",
    description: "Simple t-shirt for daily use",
    price: "$34.00",
    PromoPrice: "$37.40",
  },
  {
    id: 2,
    image: "/image2.webp",
    name: "AAthletic Men's Short Sleeve Performance T-Shirt",
    description: "Simple t-shirt for daily use",
    price: "$63.00",
    PromoPrice: "$69.30",
  },
  {
    id: 3,
    image: "/image3.webp",
    name: "Cotton T Shirts for Women Loose Fit Casual",
    description: "Classic t-shirt for daily use",
    price: "$75.00",
    PromoPrice: "$83.25",
  },
  {
    id: 4,
    image: "/image4.webp",
    name: "Men's Bamboo T-Shirts Crewneck Undershirt",
    description: "Simple t-shirt for daily use",
    price: "$28.00",
    PromoPrice: "$30.80",
  },
  {
    id: 5,
    image: "/image5.webp",
    name: "Under Armour UA Tech",
    description: "Simple t-shirt for daily use",
    price: "$25.00",
    PromoPrice: "$30.00",
  },
  {
    id: 6,
    image: "/image6.webp",
    name: "Women's Perfect-T Short Sleeve Cotton",
    description: "Simple t-shirt for daily use",
    price: "$38.00",
    PromoPrice: "$42.56",
  },
  {
    id: 7,
    image: "/image7.webp",
    name: "Womens Basic Short Sleeve Crew Neck T Shirt",
    description: "Classic t-shirt for daily use",
    price: "$55.00",
    PromoPrice: "$60.50",
  },
  {
    id: 8,
    image: "/image8.webp",
    name: "Womens Fall Long Sleeve Stretch Slim Round Neck Ribbed Basic Shirts",
    description: "Classic t-shirt for daily use",
    price: "$35.00",
    PromoPrice: "$36.05",
  },
];

const WearList = () => {
  return (
    <div className="wear-container">
      <div className="filter">
        <button className="active">tshirt</button>
        <button>jacket</button>
        <button>pants</button>
        <button>hoodie</button>
        <button>short</button>
        <button className="repeat">
          <span>
            <Repeat />
          </span>
        </button>
      </div>
      <div className="wear-item">
        {Wears.map((wear) => (
          <WearCard key={wear.id} wear={wear} />
        ))}
      </div>
    </div>
  );
};

export default WearList;
