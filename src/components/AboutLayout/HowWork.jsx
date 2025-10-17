import React from "react";
import History3 from "../../assets/howweworks.png";
const HowWork = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center h-[350px]">
          <img
            src={History3}
            alt="Crafting pottery"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-8 text-gray-800">
            HOW WE WORKS
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Product design
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">Crafted</h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque
                tempus.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Sell product
              </h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">
                Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam
                nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
