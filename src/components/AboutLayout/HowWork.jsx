import React from "react";
import { PenTool, Hammer, Truck } from "lucide-react";
import HowWeWorkImage from "../../assets/howweworks.png";

const steps = [
  {
    id: 1,
    title: "Product Design",
    description:
      "Our skilled designers create unique ceramic pieces, combining functionality with aesthetic appeal, ensuring each product is thoughtfully designed.",
    icon: <PenTool className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Crafting",
    description:
      "Expert artisans carefully handcraft each piece using traditional techniques, ensuring high quality and attention to detail.",
    icon: <Hammer className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Product Distribution",
    description:
      "Finished products are prepared for delivery to our stores and online platforms, making our handmade ceramics available to customers worldwide.",
    icon: <Truck className="w-6 h-6 text-white" />,
  },
];

const HowWork = () => {
  return (
    <section className="w-full bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide mb-12 text-center text-gray-800">
          HOW WE WORK
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>

          {/* Timeline steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`md:flex md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text content */}
                <div className="md:w-1/2 md:px-8 flex flex-col justify-center text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-3">
                    <div className="bg-gray-900 p-3 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold ml-3">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Optional Image */}
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                  <img
                    src={HowWeWorkImage}
                    alt={step.title}
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
