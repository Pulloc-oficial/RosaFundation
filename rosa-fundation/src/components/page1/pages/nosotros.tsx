// Nosotros.tsx
import React, { JSX } from 'react'
import { useState } from "react";

interface AccordionItem {
  id: number;
  title: string;
  content: JSX.Element;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "Misión",
    content: (
      <p className="text-lg leading-relaxed">
              Proporcionar un tratamiento integral, científico y personalizado para la rehabilitación de 
              personas con adicciones, respetando siempre la dignidad y los derechos humanos de cada individuo.
      </p>
    ),
  },
  {
    id: 2,
    title: "Visión",
    content: (
      <p className="text-lg leading-relaxed">
              Convertirnos en la clínica líder en Cartagena y la región Caribe, reconocida por la excelencia 
              en tratamientos de adicciones y la promoción de estilos de vida saludables y libres de sustancias.
      </p>
    ),
  },
  {
    id: 3,
    title: "Nuestros Valores",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Compasión</h3>
          <p className="text-base leading-relaxed">
          Atendemos a cada paciente con empatía, respeto y comprensión, valorando su dignidad y acompañándolo 
          en su camino de recuperación.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Innovación</h3>
          <p className="text-base leading-relaxed">
            Incorporamos los métodos y técnicas más modernos, actualizando constantemente nuestros tratamientos 
            para garantizar resultados efectivos y sostenibles. 
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Colaboración</h3>
          <p className="text-base leading-relaxed">
            Promovemos el trabajo interdisciplinario y alianzas estratégicas con profesionales e instituciones 
            para ofrecer un tratamiento integral de alta calidad.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
          <p className="text-base leading-relaxed">
            Comprometidos con la excelencia clínica, ofrecemos servicios basados en evidencia científica y las 
            mejores prácticas de rehabilitación.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Nuestros Objetivos",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
          <p className="text-base leading-relaxed">
            Diseñamos programas de desintoxicación y tratamiento terapéutico individualizado, combinando 
            intervención médica, terapia psicológica y apoyo emocional.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Reintegración Social y Familiar</h3>
          <p className="text-base leading-relaxed">
            Implementamos programas de seguimiento que facilitan la reinserción social y fortalecen 
            los vínculos familiares, promoviendo estilos de vida saludables.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Prevención y Educación</h3>
          <p className="text-base leading-relaxed">
            Desarrollamos campañas educativas y talleres de prevención para sensibilizar a la comunidad 
            sobre los riesgos del consumo de sustancias y fortalecer habilidades de afrontamiento.
          </p>
        </div>
      </div>
    ),
  },
];

const Nosotros: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const UpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
  );

  const DownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
    </svg>
  );


  return (
    <section className="min-h-[calc(100vh-72px)] py-50 w-full bg-white px-6 md:px-20 mx-auto text-gray-800">      
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:gap-8 gap-y-8 mb-12">
        <div className="md:w-3/5 md:pr-10 ms:pr-0">
          <h1 className="text-4xl font-[Montserrat] font-bold text-[#004B5A] mb-8 text-left">Sobre Nosotros</h1>
          <p className="text-lg mb-12 text-justify leading-relaxed">
              En <strong className='text-[#004B5A]'>RICART</strong>, nos dedicamos a brindar atención integral a personas que enfrentan problemas 
              de adicción al alcohol y sustancias psicoactivas. Nuestro enfoque terapéutico combina prevención, 
              desintoxicación, tratamiento y rehabilitación, garantizando una recuperación sostenible y basada 
              en el respeto a los derechos humanos.Gracias a un equipo de profesionales altamente capacitados, 
              en un entorno acogedor y seguro, promovemos la transformación de vidas, el fortalecimiento de 
              vínculos familiares y el retorno saludable a la sociedad.
          </p>
          <div className="w-full mx-auto">
            {accordionData.map((item) => (
              <div key={item.id} className="border-b border-slate-400">
                <button
                  onClick={() => handleToggle(item.id)}
                  className="w-full flex justify-between items-center py-5 text-3xl text-[#004B5A] focus:outline-none"
                >
                  <span>{item.title}</span>
                  <span className="text-slate-800 transition-transform duration-300">
                    {openItem === item.id ? <DownIcon /> : <UpIcon />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === item.id ? "max-h-200" : "max-h-0"
                  }`}
                >
                  <div className="pb-5 text-sm text-slate-500 px-2">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='md:w-2/5'>
          <img src="./images/About1.png"></img>
        </div>
      </div>
    </section>
  )
}

export default Nosotros


