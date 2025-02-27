import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="container mx-auto text-center py-6 mb-12">
      {/* Título */}
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Call to Action
      </h2>

      {/* Divisor */}
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      {/* Subtítulo */}
      <h3 className="my-4 text-3xl leading-tight">
        Main Hero Message to sell yourself!
      </h3>

      {/* Botón de Acción */}
      <button className="mx-auto lg:mx-0 hover:underline bg-[#E63946] text-white font-bold 
      rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out">
        Action!
      </button>
    </section>
  );
};

export default CallToAction;