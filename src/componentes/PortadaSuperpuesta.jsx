import React, { useState } from 'react';
import { Link } from "react-router-dom";

const PortadaSuperpuesta = () => {
  // 🔥 AQUI agregamos navLinks
  const navLinks = [
    { name: "Iniciar sesión", href: "/iniciar" },
    { name: "Registrarse", href: "/registrarse" },
    { name: "Opiniones", href: "/opiniones" },
  ];


  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      
      {/* 1. Fondo de Imagen de la Portada (Hero Section) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        // Asegúrate de reemplazar esta URL por la de tu imagen de fondo mística
        style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1534796636681-30d87b350993?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            filter: 'brightness(0.6)' // Oscurece la imagen para que el texto blanco resalte
        }}
      ></div>

      {/* 2. Capa de Gradiente Oscuro (para mejorar la legibilidad del texto) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-gray-900/20"></div>

      {/* 3. Navbar (Cabezal) - Posicionado arriba de todo, superpuesto */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            
          {/* Logo o Nombre del Sitio */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400"
            >
              Péndulo Cósmico
            </a>
          </div>

          {/* Enlaces Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6 lg:space-x-8">
                <Link
                  to="/iniciar"
                  className="text-gray-100 text-lg hover:text-white hover:underline underline-offset-4 transition duration-200"
                >
                  Iniciar sección
                </Link>
                <Link
                  to="/registrarse"
                  className="text-gray-100 text-lg hover:text-white hover:underline underline-offset-4 transition duration-200"
                >
                  Registrarse
                </Link>
              {/* Botón de acción similar al de la imagen "Book Now" */}
              <Link
            className="ml-6 px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105"
            to="/opiniones"
          >
            ✨ Opiniones
          </Link>
              <Link 
                className="ml-6 px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105"
                to="/reserva"
              >
                Reservar Consulta
              </Link>
            </div>
          </div>

          {/* Botón Móvil (Hamburguesa) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Menú Móvil Desplegable */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-gray-800/90 rounded-md py-2 px-2" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Link
                className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-700 text-white font-semibold rounded-md shadow-md hover:opacity-90 transition duration-300"
                to="/reserva"
              >
                Reservar Consulta
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* 4. Contenido Principal de la Portada (Texto y CTA) - Superpuesto */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-8 pt-24 md:pt-32">
        <h1 
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 leading-tight mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Descubre Tu Paraíso <br className="md:hidden"/>Interior
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-10 font-light leading-relaxed">
          Las antiguas artes del Tarot y la sabiduría del Horóscopo se unen para revelar los caminos ocultos de tu alma y destino.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            className="px-8 py-3 text-lg font-semibold rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105"
            to="/tarod"
          >
            🔮 Lectura de Tarot
          </Link>
          
          <Link
            className="px-8 py-3 text-lg font-semibold rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            to="/horoscopo"
          >
            ✨ Mi Horóscopo Diario
          </Link>
          <Link 
            className="px-8 py-3 text-lg font-semibold rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105"
            to="/suenos"
          >
            💤 Sueños
          </Link>
          <Link
            className="px-8 py-3 text-lg font-semibold rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            to="/numero"
          >
            ✨ Numerologia
          </Link>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white p-8 pt-24 md:pt-32">
        <p className="text-xl md:text-base text-gray-200 max-w-3xl mb-10 font-light leading-relaxed">
          Para reservar consulta debes iniciar sesión o resgristrarte
        </p>
      </div>

    </div>
  );
};

export default PortadaSuperpuesta;