

const InspiracionSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#CCE5E7] to-white py-12 font-[Montserrat]">
      {/* Primer bloque */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:gap-8 gap-y-8 mb-12">
        {/* Texto */}
        <div className="md:w-3/5 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#004B5A] mb-4">
            Nuestra inspiración
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
          En Fundación RICART, nos comprometemos con el derecho fundamental a la salud, ofreciendo 
          atención terapéutica integral y digna, en línea con la Sentencia T-043/15. Nuestro enfoque 
          bio-psico-social garantiza que cada paciente reciba un tratamiento personalizado y humanizado, 
          diseñado por un equipo multidisciplinario de profesionales en medicina, psicología, psiquiatría,
           trabajo social y terapia ocupacional. A través de intervenciones como la desintoxicación 
           médica, la terapia cognitivo-conductual y el acompañamiento psicosocial, promovemos una 
           recuperación sostenible y el fortalecimiento de estilos de vida saludables.


          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-2/5">
          <img
            src="/images/in1.png"
            alt="Inspiración"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Segundo bloque */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center md:gap-8 gap-y-8">
        {/* Texto */}
        <div className="md:w-3/5 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#004B5A] mb-4">
            Nuestro impacto
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
          RICART se diferencia por ofrecer un modelo de atención centrado en el ser humano, 
          en un entorno campestre tipo hotel cinco estrellas que fomenta la conexión con la naturaleza 
          y la desconexión del estrés urbano. Este ambiente físico y emocionalmente seguro es clave en 
          el proceso de rehabilitación, ya que respeta la dignidad de cada paciente mientras promueve 
          una recuperación profunda. Nuestro compromiso con la calidad, la humanización de los servicios 
          y el bienestar integral hace de RICART un referente en centros terapéuticos en Colombia.  
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-2/5">
          <img
            src="/images/in2.png"
            alt="Impacto"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default InspiracionSection;
