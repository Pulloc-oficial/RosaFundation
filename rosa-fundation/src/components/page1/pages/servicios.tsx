import { useEffect, useRef, useState } from "react";

const itemServicios = [
  {
    titulo: "Evaluación y Diagnóstico", 
    descripcion: "Evaluación integral, análisis médico, psicológico y social. Diagnóstico preciso, plan de tratamiento personalizado.", 
    imagen: "",
  },
  {
    titulo: "Tratamientos de Desintoxicación", 
    descripcion: "Desintoxicación médicamente supervisada, manejo de síntomas de abstinencia.Alivio de síntomas, seguridad y comodidad del paciente.", 
    imagen: "",
  },
  {
    titulo: "Terapias Psicológicas", 
    descripcion: "Terapia Cognitivo-Conductual (TCC), Terapia Motivacional, Terapia Familiar.Cambio de patrones de pensamiento, apoyo familiar.", 
    imagen: "",
  },
  {
    titulo:  "Terapias Grupales y de Apoyo", 
    descripcion: "Sesiones de terapia grupal, grupos de apoyo continuos.Apoyo mutuo, desarrollo de habilidades sociales.", 
    imagen: "",  
  },
  {
    titulo: "Terapias Complementarias", 
    descripcion: "Meditación y Yoga, Acupuntura, Asesoramiento Nutricional.Reducción del estrés, mejora del bienestar general.", 
    imagen: "",
  },
  {
    titulo: "Terapia Deportiva",
    descripcion: "Actividades deportivas, programas de ejercicio personalizados. Multicanchas.Mejora de la salud física, reducción del estrés.", 
    imagen: "",
  },
  {
    titulo: "Terapia Cognitivo-Conductual (TCC)",
    descripcion: "Identificación de Patrones de Pensamiento Desarrollo de Habilidades de Afrontamiento", 
    imagen: "",
  },
  {
    titulo: "Terapia Motivacional",
    descripcion: "Entrevista Motivacional: Utilizamos técnicas de entrevista motivacional para ayudar a los pacientes a reconocer y aumentar su motivación interna para el cambio.", 
    imagen: "",
  },
  {
    titulo: "Seguimiento y Apoyo Post-Rehabilitación",
    descripcion: "Seguimiento y Apoyo Post-Rehabilitación", 
    imagen: "",
  },
  
];

function servicios() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeYear, setActiveYear] = useState<string>(itemServicios[0].titulo);

  const scrollToYear = (item: string) => {
    sectionRefs.current[item]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id.startsWith("year-")) {
            const item = entry.target.id.replace("year-", "");
            setActiveYear(item);
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px", // activa cuando está en el centro
        threshold: 0.5,
      }
    );

    itemServicios.forEach((item) => {
      const ref = sectionRefs.current[item.titulo];
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-[calc(100vh-72px)] py-50 bg-white px-6 md:px-20 mx-auto">
      {/* Encabezado centrado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-[Montserrat] font-bold text-[#004B5A] mb-8">Nuestros Servicios</h1>
      </div>
  
      {/* Contenedor principal */}
      <div className="flex">
        {/* Columna izquierda: Fechas */}
        <div className="w-1/4 sticky top-[140px] h-[calc(100vh-72px)] p-4 bg-white">
          {itemServicios.map((item) => (
            <button
              key={item.titulo}
              onClick={() => scrollToYear(item.titulo)}
              className={`w-full text-left text-xl px-4 py-3 transition-all duration-300 border-b border-b-[#57D700]
                ${activeYear === item.titulo 
                  ? "bg-[#57D700] text-white" 
                  : "bg-white text-[#004B5A] hover:bg-gray-100"}`}
            >
              {item.titulo}
            </button>
          ))}
        </div>
        {/* Contenido derecho */}
        <div className="w-3/4 p-8 scroll-mt-[300px]">
            {itemServicios.map((item, index) => (
              <section
                key={item.titulo}
                ref={(el) => {
                  sectionRefs.current[item.titulo] = el;
                }}
                id={`year-${item.titulo}`}
                className="min-h-screen "
              >
                {/* Alterna dirección con flex-row o flex-row-reverse */}
                <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-6`}>
                  <div className="w-3/4 p-8">
                    <h2 className="text-4xl font-bold text-[#57D700]">
                      {item.titulo}
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {item.descripcion}  
                    </p>
                  </div>
                  <div className="w-1/4">
                    {item.imagen}
                  </div>
                </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default servicios;
