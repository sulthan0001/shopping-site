import React from "react";
import maps from "../../assets/maps.png";

const Maps = () => {
  return (
    <div className="container w-full h-[300px]">
      <img
        src={maps}
        alt="maps navigation"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Maps;
