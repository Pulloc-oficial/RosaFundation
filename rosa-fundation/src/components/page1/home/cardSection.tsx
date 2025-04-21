import React from "react";
import { FaHandHoldingMedical, FaUsers, FaChalkboardTeacher } from "react-icons/fa";

const CardsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 min-h-[calc(100vh-72px)] content-center px-6 md:px-20 font-[Montserrat] text-[#004B5A]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg mb-12 text-justify">
          El consumo de <strong>sustancias psicoactivas</strong> y <strong>alcohol</strong> es una de las principales problemáticas de 
          <strong> salud pública</strong>, que afecta tanto a individuos como a sus familias y comunidades. En respuesta, 
          el centro de rehabilitación Rosa IPS <strong>(RICART)</strong> ofrece una <strong>atención integral</strong> y <strong>especializada</strong> 
          a personas con <strong>adicciones</strong>, bajo la legislación colombiana, en especial la <strong>Ley 1641 de 2013</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-10 text-left text-[17px] items-start">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-justify md:text-left">
            <FaHandHoldingMedical size={100} color="#57D700" />
            <div className="flex flex-col justify-center">          
              <p>
                Desarrollamos programas, combinando apoyo 
                 psicológico, médico y emocional.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-justify md:text-left">
            <FaUsers size={100} color="#57D700" />
            <div className="flex flex-col justify-center">
              <p>
                Promovemos la reintegración familiar y social a través de seguimiento continuo.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-justify md:text-left">
            <FaChalkboardTeacher size={100} color="#57D700" />
            <div className="flex flex-col justify-center">
              <p>
                Implementamos talleres y campañas educativas para sensibilizar sobre el 
                riesgo del consumo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;