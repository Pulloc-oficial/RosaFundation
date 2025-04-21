import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="font-[Montserrat] text-[#004B5A] bg-gray-100 dark:bg-gray-900 py-12 px-4">
    {/* Título centrado */}
    <h2 className="text-4xl font-bold text-center mb-10">Ubicación</h2>

    {/* Contenedor del contenido */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      {/* Columna izquierda */}
      <div className="md:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex items-start mb-4">
          <div className="py-2">
                <FaMapMarkerAlt />    
          </div>
          <div className="ml-4">
            <p className="font-semibold text-2xl">Dirección</p>
            <p>CR 5A #25-44, Fusagasugá</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="py-2">
                <FaPhoneAlt />
          </div>
          <div className="ml-4">
            <p className="font-semibold text-2xl">Teléfono</p>
            <p>3213214455</p>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className="md:col-span-2 h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border-2 border-[#57D700]">
        <iframe
          title="Mapa de ubicación"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.4106325950754!2d-74.3749!3d4.3445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a7c5b84a2f5%3A0x52d0e0a60c97e179!2sFusagasug%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1618349116612!5m2!1ses-419!2sco"
        ></iframe>
      </div>
    </div>
  </section>
);
};

export default MapSection;
