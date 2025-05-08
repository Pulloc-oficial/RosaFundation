// Preguntas.tsx
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
    title: "1. ¿Qué servicios ofrece Rosa IPS Centro Campestre de Rehabilitación Terapéutica para Adictos?",
    content: (
      <div className="space-y-6">
        Ofrecemos tratamiento integral para personas con adicciones a sustancias psicoactivas y alcohol, 
        incluyendo evaluación diagnóstica, desintoxicación médica, terapias psicológicas, terapia 
        cognitivo-conductual (TCC), terapia motivacional, apoyo nutricional, terapia deportiva y programas 
        de seguimiento post-rehabilitación.
      </div>
    ),
  },
  {
    id: 2,
    title: "2. ¿Cuál es el enfoque terapéutico de RICART?",
    content: (
      <div className="space-y-6">
        Nuestro enfoque es bio-psico-social, centrado en el ser humano. Combinamos atención médica, 
        psicológica, terapias complementarias y reintegración social para lograr una recuperación integral 
        y sostenible.
      </div>
    ),
  },
  {
    id: 3,
    title: "3. ¿Qué profesionales conforman el equipo de atención?",
    content: (
      <div className="space-y-6">
        Contamos con un equipo multidisciplinario de médicos, psicólogos, psiquiatras, trabajadores 
        sociales y terapeutas ocupacionales, todos comprometidos con brindar atención de alta calidad 
        y basada en la evidencia científica.
      </div>
    ),
  },
  {
    id: 4,
    title: "4. ¿Cómo es el proceso de desintoxicación en Rosa IPS?",
    content: (
      <div className="space-y-6">
        La desintoxicación es supervisada médicamente, garantizando seguridad y control durante el manejo 
        de los síntomas de abstinencia. Es el primer paso del tratamiento integral.
      </div>
    ),
  },
  {
    id: 5,
    title: "5. ¿Qué tipo de terapias se implementan en el proceso de rehabilitación?",
    content: (
      <div className="space-y-6">
        Utilizamos diversas terapias como la terapia cognitivo-conductual, terapia motivacional, 
        terapia familiar, terapias grupales, yoga, meditación, acupuntura, terapia deportiva y 
        asesoramiento nutricional.
      </div>
    ),
  },
  {
    id: 6,
    title: "6. ¿Cómo es el entorno del centro de rehabilitación?",
    content: (
      <div className="space-y-6">
        Nuestro centro está diseñado como un espacio campestre tipo hotel cinco estrellas, rodeado de 
        naturaleza, con instalaciones modernas y cómodas que favorecen la recuperación emocional y física 
        del paciente.
      </div>
    ),
  },
  {
    id: 7,
    title: "7. ¿RICART atiende a personas no aseguradas o en situación de calle?",
    content: (
      <div className="space-y-6">
        Sí. En cumplimiento de la Ley 1641 de 2013, brindamos atención integral a población no asegurada 
        y en situación de calle, promoviendo su inclusión y reintegración social.
      </div>
    ),
  },
  {
    id: 8,
    title: "8. ¿Qué tecnologías utilizan para el seguimiento clínico?",
    content: (
      <div className="space-y-6">
        Contamos con sistemas de monitoreo médico, software de gestión clínica y plataformas de 
        telemedicina para consultas remotas, lo que permite un seguimiento eficiente y continuo del 
        tratamiento.
      </div>
    ),
  },
  {
    id: 9,
    title: "9. ¿Se ofrece acompañamiento después del tratamiento",
    content: (
      <div className="space-y-6">
        Sí. Implementamos programas de seguimiento post-rehabilitación, que incluyen consultas periódicas, 
        reuniones grupales de apoyo y creación de redes comunitarias que fortalecen la sobriedad a largo plazo.
      </div>
    ),
  },
  {
    id: 10,
    title: "10. ¿Qué beneficios ofrece el enfoque personalizado de tratamiento?",
    content: (
      <div className="space-y-6">
        Los programas personalizados permiten atender las necesidades médicas, psicológicas y sociales 
        de cada paciente, asegurando una recuperación más efectiva, adaptada a su realidad y entorno.
      </div>
    ),
  },
  {
    id: 11,
    title: "11. ¿Qué diferencia a Rosa IPS de otros centros de rehabilitación?",
    content: (
      <div className="space-y-6">
        Nuestra diferencia radica en la combinación de un enfoque clínico de alta calidad, instalaciones 
        tipo resort campestre, innovación tecnológica y un fuerte compromiso con la dignidad y el bienestar 
        humano.
      </div>
    ),
  },
  {
    id: 12,
    title: "12. ¿Qué papel cumple la familia en el proceso de rehabilitación?",
    content: (
      <div className="space-y-6">
        La familia es parte activa del tratamiento. Se realizan terapias familiares y talleres educativos 
        para fortalecer los vínculos, mejorar la convivencia y apoyar la recuperación del paciente.
      </div>
    ),
  },
];

const Preguntas: React.FC = () => {
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-[Montserrat] font-bold text-[#004B5A] mb-8 pb-30">Preguntas y Respuestas</h1>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:gap-8 gap-y-8 mb-12">
        <div className="w-3/4 md:pr-10 ms:pr-0">
          <div className="w-full mx-auto">
            {accordionData.map((item) => (
              <div key={item.id} className="border-b border-slate-400">
                <button
                  onClick={() => handleToggle(item.id)}
                  className="w-full flex justify-between content-left py-5 text-xl text-[#004B5A] focus:outline-none"
                >
                  <span className='text-left text-start flex-grow'>{item.title}</span>
                  <span className="text-slate-800 transition-transform duration-300">
                    {openItem === item.id ? <DownIcon /> : <UpIcon />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === item.id ? "max-h-200" : "max-h-0"
                  }`}
                >
                  <div className="pb-5 text-base text-slate-500 px-2">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Preguntas


