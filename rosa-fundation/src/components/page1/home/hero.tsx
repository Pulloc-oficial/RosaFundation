import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./images/VideoHero.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>
    </div>
  );
};

export default Hero;