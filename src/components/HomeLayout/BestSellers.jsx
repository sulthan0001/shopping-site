import React from "react";
import product1 from "../../assets/smallbowl.png";
import product2 from "../../assets/whitevase.png";
import product3 from "../../assets/dinnerplate1.png";
import product4 from "../../assets/whitevase1.png";
import product5 from "../../assets/handeledvase.png";
import product6 from "../../assets/dinnerplate2.png";
import product7 from "../../assets/creamicvase.png";
import product8 from "../../assets/luanabowl.png";

const bestSellersData = [
  {
    id: 1,
    name: "Ecru Gray Compote Bowl",
    price: "$40.00",
    description:
      "Elegant and understated, this small compote bowl enhances your dining setup with subtle beauty and timeless appeal.",
    image: product1,
  },
  {
    id: 2,
    name: "Warwick Speckled Vase 14cm",
    price: "$49.00",
    description:
      "A handcrafted white vase with soft natural speckles, perfect for adding artisanal charm to your tabletop or shelf.",
    image: product2,
  },
  {
    id: 3,
    name: "Blush Porcelain Dessert Plate",
    price: "$48.00",
    description:
      "Minimal yet eye-catching — this pink glazed plate pairs perfectly with modern dinnerware  beautiful collections.",
    image: product3,
  },
  {
    id: 4,
    name: "Warwick White Vase 20cm",
    price: "$49.00",
    description:
      "Smooth and tall, this elegant ceramic vase makes a refined statement on its own or when paired with fresh florals design.",
    image: product4,
  },
  {
    id: 5,
    name: "Rounded Dual-Handled Vase",
    price: "$49.00",
    description:
      "With its classic shape and soft matte finish, this handcrafted vase embodies timeless design and artisan craftsmanship.",
    image: product5,
  },
  {
    id: 6,
    name: "Marin Blue Dinner Plate",
    price: "$48.00",
    description:
      "Crafted with a soft blue glaze, this plate brings a touch of coastal calm to any dining setting. Perfect for everyday meals or elegant gatherings.",
    image: product6,
  },
  {
    id: 7,
    name: "Tall Cream Ceramic Vase",
    price: "$48.00",
    description:
      "A minimalist vase with a ribbed texture, ideal for showcasing dried florals or fresh blooms. A timeless accent for any interior.",
    image: product7,
  },
  {
    id: 8,
    name: "Luana White Bowl",
    price: "$49.00",
    description:
      "Sleek and versatile, this handcrafted bowl offers modern simplicity — perfect for serving salads, soups, or side dishes.",
    image: product8,
  },
  {
    id: 9,
    name: "Ecru Gray Compote Bowl",
    price: "$40.00",
    description:
      "A soft gray ceramic compote that combines simplicity with sophistication. Perfect for desserts, fruits, or decor.",
    image: product1,
  },
  {
    id: 10,
    name: "Blush Porcelain Dessert Plate",
    price: "$48.00",
    description:
      "Hand-glazed in a delicate blush tone with subtle gold speckles — a chic accent for special occasions or daily indulgence.",
    image: product3,
  },
];

const BestSellers = () => {
  return (
    <section className="w-full p-2">
      <p className="text-center text-2xl font-semibold tracking-wide mb-6">
        BEST SELLERS
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
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-sm font-semibold uppercase mb-1">
              {item.name}
            </h3>
            <p className="text-gray-800 font-semibold mb-1">{item.price}</p>
            <p className="text-gray-500 text-sm mb-4">{item.description}</p>
            <button
              className="border border-gray-800 cursor-pointer rounded text-gray-800 px-6 py-2 text-sm font-semibold 
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

export default BestSellers;
