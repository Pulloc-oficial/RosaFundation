//instalaciones.tsx
import { useEffect, useRef, useState } from "react";

const cards = [
  {
    titulo: "Evaluación y Diagnóstico", 
    descripcion: "Evaluación integral, análisis médico, psicológico y social. Diagnóstico preciso, plan de tratamiento personalizado.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Tratamientos de Desintoxicación", 
    descripcion: "Desintoxicación médicamente supervisada, manejo de síntomas de abstinencia.Alivio de síntomas, seguridad y comodidad del paciente.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Terapias Psicológicas", 
    descripcion: "Terapia Cognitivo-Conductual (TCC), Terapia Motivacional, Terapia Familiar.Cambio de patrones de pensamiento, apoyo familiar.", 
    imagen: "images/Service.png",
  },
  {
    titulo:  "Terapias Grupales y de Apoyo", 
    descripcion: "Sesiones de terapia grupal, grupos de apoyo continuos.Apoyo mutuo, desarrollo de habilidades sociales.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Terapias Complementarias", 
    descripcion: "Meditación y Yoga, Acupuntura, Asesoramiento Nutricional.Reducción del estrés, mejora del bienestar general.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Terapia Deportiva",
    descripcion: "Actividades deportivas, programas de ejercicio personalizados. Multicanchas.Mejora de la salud física, reducción del estrés.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Terapia Cognitivo-Conductual (TCC)",
    descripcion: "Identificación de Patrones de Pensamiento Desarrollo de Habilidades de Afrontamiento", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Terapia Motivacional",
    descripcion: "Entrevista Motivacional: Utilizamos técnicas de entrevista motivacional para ayudar a los pacientes a reconocer y aumentar su motivación interna para el cambio.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Seguimiento y Apoyo Post-Rehabilitación",
    descripcion: "Seguimiento y Apoyo Post-Rehabilitación", 
    imagen: "images/Service.png",
  },
  
];

function instalaciones() {
  
  return (
    <div className="min-h-[calc(100vh-72px)] py-50 bg-white mx-auto">
      {/* Encabezado centrado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-[Montserrat] font-bold text-[#004B5A] mb-8 pb-30">Instalaciones y Recursos Tecnológicos</h1>
      </div>
      <div className="flex content-center bg-[rgb(241,234,226)]">
        <div className="w-2/5 p-20 pl-30">
          <img src="images/Instalaciones001.png"></img>
        </div>
        <div className="w-3/5 p-20 pt-50 text-center text-[#004B5A]">
          <p className="text-2xl mb-12">
            El consumo de <strong>sustancias psicoactivas</strong> y <strong>alcohol</strong> es una de las principales problemáticas de 
            <strong> salud pública</strong>, que afecta tanto a individuos como a sus familias y comunidades. En respuesta, 
            el centro de rehabilitación Rosa IPS <strong>(RICART)</strong> ofrece una <strong>atención integral</strong> y <strong>especializada</strong> 
            a personas con <strong>adicciones</strong>, bajo la legislación colombiana, en especial la <strong>Ley 1641 de 2013</strong>.
          </p>
        </div>
      </div>
  
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20 pt-20 ">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group bg-white hover:bg-blue-900 text-black hover:text-white rounded-lg overflow-hidden shadow-md transition-colors duration-300 cursor-pointer"
          >
            <div className="overflow-hidden h-48">
              <img
                src={card.imagen}
                alt={card.titulo}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.titulo}</h3>
              <p className="text-sm">{card.descripcion}</p>
            </div>
            <div className="p-4 flex justify-end">
              <div className="w-6 h-6 bg-blue-100 group-hover:bg-white rounded-full flex items-center justify-center transition duration-300">
                ➤
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default instalaciones;
