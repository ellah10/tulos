import React, { useState } from "react";
import WearCard from "./WearCard";
import { Repeat } from "lucide-react";
import "../Styles/WearList.scss";
import UnvailableWear from "./UnvailableWear";

const Wears = [
  {
    id: 1,
    category: "tshirt",
    image: "/image1.webp",
    name: "Adult Ultra Cotton T-Shirt, Style G2000, Multipack",
    description: "Simple t-shirt for daily use",
    price: "$34.00",
    PromoPrice: "$37.40",
  },
  {
    id: 2,
    category: "tshirt",
    image: "/image2.webp",
    name: "AAthletic Men's Short Sleeve Performance T-Shirt",
    description: "Simple t-shirt for daily use",
    price: "$63.00",
    PromoPrice: "$69.30",
  },
  {
    id: 11,
    category: "tshirt",
    image: "/image3.webp",
    name: "Cotton T Shirts for Women Loose Fit Casual",
    description: "Classic t-shirt for daily use",
    price: "$75.00",
    PromoPrice: "$83.25",
  },
  {
    id: 12,
    category: "jacket",
    image: "/jacket3.webp",
    name: "Men's Gym Workout Full-Zip Hooded Active Sweatshirt",
    description: "Classic Jacket for winter use",
    price: "$375.00",
    PromoPrice: "$405.00",
  },
  {
    id: 3,
    category: "pants",
    image: "/pant1.webp",
    name: "Jeans for Men Stretch Slim Fit Denim Comfort",
    description: "Classic Jacket for winter use",
    price: "$420.00",
    PromoPrice: "$405.00",
  },
  {
    id: 4,
    category: "tshirt",
    image: "/image4.webp",
    name: "Men's Bamboo T-Shirts Crewneck Undershirt",
    description: "Simple t-shirt for daily use",
    price: "$28.00",
    PromoPrice: "$30.80",
  },
  {
    id: 5,
    category: "tshirt",
    image: "/image5.webp",
    name: "Under Armour UA Tech",
    description: "Simple t-shirt for daily use",
    price: "$25.00",
    PromoPrice: "$30.00",
  },
  {
    id: 10,
    category: "tshirt",
    image: "/image6.webp",
    name: "Women's Perfect-T Short Sleeve Cotton",
    description: "Simple t-shirt for daily use",
    price: "$38.00",
    PromoPrice: "$42.56",
  },
  {
    id: 6,
    category: "jacket",
    image: "/jacket2.webp",
    name: "Men's Bomber Jacket Lightweight Casual Spring Fall",
    description: "Classic Jacket for winter use",
    price: "$250.00",
    PromoPrice: "$287.50",
  },
  {
    id: 7,
    category: "tshirt",
    image: "/image7.webp",
    name: "Womens Basic Short Sleeve Crew Neck T Shirt",
    description: "Classic t-shirt for daily use",
    price: "$55.00",
    PromoPrice: "$60.50",
  },
  {
    id: 8,
    category: "tshirt",
    image: "/image8.webp",
    name: "Womens Fall Long Sleeve Stretch Slim Round Neck Ribbed Basic Shirts",
    description: "Classic t-shirt for daily use",
    price: "$35.00",
    PromoPrice: "$36.05",
  },
  {
    id: 9,
    category: "jacket",
    image: "/jacket1.webp",
    name: "Men's Bomber Jacket Lightweight Casual Spring Fall",
    description: "Classic Jacket for winter use",
    price: "$250.00",
    PromoPrice: "$287.50",
  },
  {
    id: 13,
    category: "pants",
    image: "/pant2.webp",
    name: "Mens Lightweight Track Pants",
    description: "Classic Jacket for winter use",
    price: "$150.00",
    PromoPrice: "$160.50",
  },
];

const category = ["tshirt",  "jacket", "pants", "hoodie", "short"];
const WearList = () => {
  const [selectedCategory, setSelectedCategory] = useState("tshirt");
  const filteredWears = selectedCategory
    ? Wears.filter((wear) => wear.category === selectedCategory)
    : Wears;
  return (
    <div className="wear-container">
      <div className="filter">
        {category.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
        <button
          className="repeat"
          onClick={() => setSelectedCategory(null)} 
        >
          <span>
            <Repeat />
          </span>
        </button>

      </div>
      <div className="wear-item">
        {filteredWears.map((wear) => (
          <WearCard key={wear.id} wear={wear} />
        ))}
      </div>
      {filteredWears.length === 0 ? (
        <UnvailableWear selectedCategory={selectedCategory} /> 
      ) : (
        <div className="wear-item">
          {filteredWears.map((wear) => (
            <WearCard key={wear.id} wear={wear} />
          ))}
        </div>
      )}
    </div>
  );
};




export default WearList;
