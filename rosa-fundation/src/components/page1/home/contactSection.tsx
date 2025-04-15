// src/components/ContactSection.tsx

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiX } from "react-icons/si";

const ContactSection = () => {
  return (
    <div className="font-[Montserrat] text-[#004B5A] relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 w-full">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Info Column */}
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight ">
                Contactanos
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                Llena el formulario e inicia una conversacion
              </p>

              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <FaInstagram />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  @FundacionRosa
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <FaFacebookF />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  @FundacionRosa
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <SiX />
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  FundacionRosa
                </div>
              </div>
            </div>

            {/* Form Column */}
            <form className="p-6 flex flex-col justify-center w-full">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="tel" className="sr-only">Phone</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Phone Number"
                  className="py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-[#57D700] hover:bg-[#4BC000] text-white font-semibold py-3 px-6 rounded-lg transition ease-in-out duration-300 w-full md:w-32"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
