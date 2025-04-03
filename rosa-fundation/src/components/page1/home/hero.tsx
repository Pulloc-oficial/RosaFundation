import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden ">
      <video
        className="absolute pt-[78px] top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./images/VideoHero.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
    </div>
  );
};

export default Hero;