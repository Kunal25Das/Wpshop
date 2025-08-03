import React from "react";
import StarryNight from "@/components/widgets/StarryNight";
import DarkVeil from "@/components/widgets/DarkVeil";

const Background: React.FC = () => {
  return (
    <div className="absolute">
      <div className="relative overflow-hidden w-screen h-[75dvh]">
        <DarkVeil />
      </div>

      <div className="absolute w-screen h-[200px] z-10 bg-radial from-black from-30% via-black/50 via-60% to-80% to-transparent transform -translate-y-1/4"></div>
      <div className="absolute w-screen h-[200px] z-10 bg-gradient-to-b from-black from-0% to-40% to-transparent"></div>

      <div className="relative w-screen h-[125vh]">
        <StarryNight starCount={150} />
      </div>

      <div className="absolute bottom-0 w-screen h-[200px] z-10 bg-gradient-to-b from-transparent from-0% via-black via-50% to-100% to-transparent transform translate-y-1/2"></div>
    </div>
  );
};

export default Background;
