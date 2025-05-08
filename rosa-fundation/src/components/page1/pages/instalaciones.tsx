//instalaciones.tsx

const cards = [
  {
    titulo: "Habitaciones", 
    descripcion: "privadas y compartidas, equipadas con todas las comodidades necesarias para asegurar el confort y la privacidad de los pacientes.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Áreas Comunes", 
    descripcion: "Espacios comunes acogedores donde los pacientes pueden socializar y participar en actividades grupales. Estos incluyen salas de estar, comedores y áreas de recreación.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Consultorios Médicos y Psicológicos", 
    descripcion: "Consultorios bien equipados para consultas médicas, terapias individuales y familiares.", 
    imagen: "images/Service.png",
  },
  {
    titulo:  "Salas de Terapia Grupal", 
    descripcion: "Espacios diseñados específicamente para facilitar sesiones de terapia grupal y reuniones de apoyo.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Gimnasio y Áreas de Actividad Física", 
    descripcion: "Instalaciones para el ejercicio físico y la actividad recreativa, promoviendo el bienestar físico como parte integral de la recuperación.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Áreas de Terapia Alternativa",
    descripcion: "Espacios dedicados a la meditación, yoga y otras terapias complementarias que apoyan la salud mental y física.", 
    imagen: "images/Service.png",
  },
  {
    titulo: "Cocina y Comedor",
    descripcion: "Áreas de cocina y comedor donde se preparan y sirven comidas saludables y nutritivas, adaptadas a las necesidades dietéticas de los pacientes.", 
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
      <div className="flex content-center bg-white">
        <div className="w-2/5 pl-25">
          <img src="images/Instalaciones001.jpg"></img>
        </div>
        <div className="w-3/5 p-25 text-center text-[#004B5A]">
          <p className="text-2xl mb-12">
          En <strong>Rosa IPS</strong> Centro Campestre de <strong>Rehabilitación Terapéutica</strong> 
          Para Adictos S.A.S, nuestras <strong>instalaciones</strong> están diseñadas para proporcionar 
          un <strong>entorno seguro</strong>, <strong>cómodo</strong> y <strong>terapéutico</strong> 
          que apoye la <strong>recuperación</strong> de nuestros pacientes. Contamos con una 
          <strong>infraestructura moderna</strong> y bien equipada que facilita la implementación 
          de nuestros <strong>programas de tratamiento integral</strong>.
          </p>
        </div>
      </div>
  
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-25 pt-25 font-[Montserrat] ">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group bg-white hover:bg-[#4BC000] text-[#004B5A] hover:text-white rounded-lg overflow-hidden shadow-md transition-colors duration-300 cursor-pointer"
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
          </div>
        ))}
      </div>

    </div>
  );
}

export default instalaciones;
