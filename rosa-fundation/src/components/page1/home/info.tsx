import React from "react";

const Info: React.FC = () => {
  return (
    <section className="w-full min-h-[calc(100vh-72px)] px-4 bg-white text-center content-center">
      <h2 className="text-4xl md:text-5xl font-[Montserrat] font-bold text-[#004B5A] mb-8">
        Centro para la rehabilitación
      </h2>

      <div className="inline-block border-2 border-[#57D700] px-6 py-3">
        <p className="text-2xl font-[Montserrat] font-bold text-[#004B5A]">
          333 123 4567
        </p>
      </div>
    </section>
  );
};

export default Info;