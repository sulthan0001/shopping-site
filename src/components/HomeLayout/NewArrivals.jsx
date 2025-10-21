import React from "react";
import product1 from "../../assets/dinnerplate3.png";
import product2 from "../../assets/naturalvase.png";
import product3 from "../../assets/dinnerplate4.png";
import product4 from "../../assets/luanabowl1.png";
import product5 from "../../assets/dinnerplate1.png";

const bestSellersData = [
  {
    id: 1,
    name: "Celeste Porcelain Dinner Plate",
    price: "$49.00",
    description:
      "A refined porcelain plate with a smooth matte glaze — perfect for elegant everyday dining.",
    image: product1,
  },
  {
    id: 2,
    name: "Ophelia Matte Natural Vase",
    price: "$49.00",
    description:
      "Handcrafted with a textured matte finish, this vase brings organic warmth and timeless charm to your space.",
    image: product2,
  },
  {
    id: 3,
    name: "Aurora Porcelain Dinner Plate",
    price: "$48.00",
    description:
      "Minimalist and modern, this softly glazed plate adds a touch of sophistication to any dining.",
    image: product3,
  },
  {
    id: 4,
    name: "Luana Ceramic Bowl",
    price: "$49.00",
    description:
      "A versatile handcrafted bowl with a natural glaze finish — ideal for salads, soups, or simple home décor.",
    image: product4,
  },
  {
    id: 5,
    name: "Rounded Dual-Handled Vase",
    price: "$49.00",
    description:
      "Classic yet contemporary, this sculpted vase features a rounded body and twin handles — a true artisan statement.",
    image: product5,
  },
];

const NewArrivals = () => {
  return (
    <section className="w-full p-2 pb-5">
      <p className="text-center text-2xl font-semibold tracking-wide mb-6">
        DISCOVER NEW ARRIVALS
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-10 md:px-20 gap-8">
        {bestSellersData.map((item) => (
          <div
            key={item.id}
            className="text-center pb-5 transition-transform transform hover:scale-105 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 rounded object-cover mb-4"
            />
            <h3 className="text-sm font-semibold uppercase mb-1">
              {item.name}
            </h3>
            <p className="text-gray-800 font-semibold mb-1">{item.price}</p>
            <p className="text-gray-500 text-sm mb-4">{item.description}</p>
            <button
              className="border border-gray-800 rounded text-gray-800 px-6 py-2 text-sm font-semibold 
              hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
