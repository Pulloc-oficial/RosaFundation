import React from "react";

const Info: React.FC = () => {
  return (
    <section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Informacion
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Campestre
            </h3>
            <p className="text-gray-600 mb-8 font-[Montserrat]">
              los mejores espaciosy los mejores diseños
              <br />
              <br /> 
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-6">
            <img
              className="w-full sm:h-64 mx-auto"
              src="../images/Info2.png" // Cambia la ruta de la imagen si es necesario
              alt="Hero"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          {/* Left Column */}
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img
              className="w-5/6 sm:h-64 mx-auto"
              src="../images/Info1.png" // Cambia la ruta de la imagen si es necesario
              alt="Connected World"
            />
          </div>

          {/* Right Column */}
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Excelente compañia
              </h3>
              <p className="text-gray-600 mb-8 font-[Montserrat]  ">
                Amigos, familia personas
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;