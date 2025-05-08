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
    title: "Pregunta 1",
    content: (
      <div className="space-y-6">
        Respuesta generica a pregunta
      </div>
    ),
  },
  {
    id: 2,
    title: "Pregunta 2",
    content: (
      <div className="space-y-6">
        Respuesta generica a pregunta
      </div>
    ),
  },
  {
    id: 3,
    title: "Pregunta 3",
    content: (
      <div className="space-y-6">
        Respuesta generica a pregunta
      </div>
    ),
  },
  {
    id: 4,
    title: "Pregunta 4",
    content: (
      <div className="space-y-6">
        Respuesta generica a pregunta
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
      </div>
    </section>
  )
}

export default Preguntas


