import { useEffect, useRef, useState } from "react";

const years = [
  "Evaluación y Diagnóstico", 
  "Tratamientos de Desintoxicación", 
  "Terapias Psicológicas", 
  "Terapias Grupales y de Apoyo", 
  "Terapias Complementarias", 
  "Terapia Deportiva",
  "Terapia Cognitivo-Conductual (TCC)",
  "Terapia Motivacional",
  "Seguimiento y Apoyo Post-Rehabilitación"
];

function servicios() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeYear, setActiveYear] = useState<string>(years[0]);

  const scrollToYear = (year: string) => {
    sectionRefs.current[year]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id.startsWith("year-")) {
            const year = entry.target.id.replace("year-", "");
            setActiveYear(year);
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px", // activa cuando está en el centro
        threshold: 0.5,
      }
    );

    years.forEach((year) => {
      const ref = sectionRefs.current[year];
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
        <div className="w-1/4 sticky top-[140px] h-[calc(100vh-72px)] p-4 bg-white border-r border-gray-200">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => scrollToYear(year)}
              className={`block mb-4 font-semibold text-left transition-colors ${
                activeYear === year ? "text-green-600" : "text-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
  
        {/* Contenido derecho */}
        <div className="w-3/4 p-8 scroll-mt-[300px]">
          {years.map((year) => (
            <section
              key={year}
              ref={(el) => {
                sectionRefs.current[year] = el;
              }}
              id={`year-${year}`}
              className="min-h-screen "
            >
              <h2 className="text-4xl font-bold text-green-600">{year}</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Contenido histórico del año <strong>{year}</strong>. Puedes
                reemplazar esto por imágenes, texto institucional, citas, etc.
                Esta es una sección amplia para asegurar que el scroll se detecte
                correctamente por el IntersectionObserver.
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default servicios;
