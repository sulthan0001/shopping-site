import React from "react";

const Sidebar = ({ onCategorySelect, selectedCategory }) => {
  const categories = [
    { name: "All", count: 20 },
    { name: "Drinkware", count: 3 },
    { name: "Decor", count: 5 },
    { name: "Furniture", count: 7 },
    { name: "Office sets", count: 2 },
    { name: "Kitchen", count: 3 },
    { name: "Food", count: 2 },
  ];
  return (
    <aside className="space-y-8">
      {/* Popular Posts */}
      <div>
        <h3 className="font-semibold mb-4 text-gray-800">POPULAR POSTS</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>What is a Garden set?</li>
          <li>How Can I Use Ceramic When I Decorate?</li>
          <li>The Secrets to a Living Room set</li>
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4 text-gray-800">CATEGORIES</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          {categories.map((cat) => (
            <li
              key={cat.name}
              onClick={() => onCategorySelect(cat.name)}
              className={`cursor-pointer flex justify-between items-center border-l-4 pl-2 transition ${
                selectedCategory === cat.name
                  ? "border-gray-800 font-semibold text-gray-900"
                  : "border-transparent hover:border-gray-400"
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-xs text-gray-500">({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-semibold mb-4 text-gray-800">TAGS POST</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Ceramic",
            "Kitchen",
            "Office sets",
            "Lamp",
            "Flower",
            "Plate",
            "Home",
          ].map((tag) => (
            <span
              key={tag}
              className="border text-xs px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
