import React, { useState } from 'react';

const TarotBooking = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoConsulta: '',
    fecha: '',
  });

  // Manejador de cambios para actualizar el estado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejador del envío del formulario (simulado)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de la reserva enviados:', formData);
    alert('¡Consulta reservada! Revisa la consola para ver los datos.');
    // Aquí iría la lógica real de envío a un backend
  };

  return (
    // 1. Contenedor Principal: Fondo Místico
    <div 
      className="
        min-h-screen 
        w-full 
        flex 
        items-center 
        justify-center 
        p-6 
        // Degradado de la esquina superior izquierda a la inferior derecha (br)
        // Colores: Morado Oscuro (800) -> Rosa Intenso (600) -> Azul Místico (500)
        bg-gradient-to-br 
        from-violet-900 
        via-pink-600 
        to-blue-600
        font-sans // Fuente moderna y limpia
      "
    >
      
      

      {/* 2. Tarjeta de Reserva (El Formulario) */}
      <div 
        className="
          // Estilo de tarjeta mística: fondo semi-transparente (glassmorphism)
          bg-white/10 
          backdrop-blur-sm 
          border 
          border-white/20
          p-8 
          md:p-12 
          rounded-xl 
          shadow-2xl 
          max-w-xl 
          w-full
          text-white
        "
      >
        <h2 
          className="
            text-4xl 
            font-serif 
            text-center 
            mb-6 
            // Degradado en el texto para destacar el título
            bg-clip-text 
            text-transparent 
            bg-gradient-to-r 
            from-pink-300 
            to-sky-300
            drop-shadow-lg
          "
        >
          Reserva tu Consulta de Tarot
        </h2>
        
        <p className="text-center text-white/80 mb-8">
          Conéctate con tu destino. Llena el formulario para asegurar tu espacio.
        </p>

        {/* 3. Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Campo Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium mb-1 text-pink-200">
              Tu Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 text-white placeholder-gray-300 transition duration-200"
              placeholder="Ej: Luna Estelar"
            />
          </div>

          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-pink-200">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 text-white placeholder-gray-300 transition duration-200"
              placeholder="contacto@estrellas.com"
            />
          </div>
          
          {/* Campo Tipo de Consulta */}
          <div>
            <label htmlFor="tipoConsulta" className="block text-sm font-medium mb-1 text-pink-200">
              Tipo de Consulta
            </label>
            <select
              id="tipoConsulta"
              name="tipoConsulta"
              value={formData.tipoConsulta}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 text-white appearance-none transition duration-200"
              // Agregamos un pequeño icono de flecha hacia abajo simulado con un fondo
              style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23FBCFE8'%3e%3cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3e%3c/svg%3e\")" }}
            >
              <option value="" className="bg-violet-900 text-white">--- Selecciona una opción ---</option>
              <option value="general" className="bg-violet-900 text-white">Lectura General (30 min)</option>
              <option value="amor" className="bg-violet-900 text-white">Especial Amor y Relaciones (60 min)</option>
              <option value="carrera" className="bg-violet-900 text-white">Camino Profesional (60 min)</option>
              <option value="anual" className="bg-violet-900 text-white">Predicción Anual (90 min)</option>
            </select>
          </div>

          {/* Campo Fecha y Hora */}
          <div>
            <label htmlFor="fecha" className="block text-sm font-medium mb-1 text-pink-200">
              Fecha y Hora Deseada
            </label>
            <input
              type="datetime-local"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400 text-white transition duration-200"
              min={new Date().toISOString().slice(0, 16)} // No permite fechas pasadas
            />
          </div>
          
          {/* Botón de Envío */}
          <button
            type="submit"
            className="
              w-full 
              py-3 
              px-4 
              rounded-full 
              font-bold 
              text-lg 
              // Degradado del botón: Morado a Azul
              bg-gradient-to-r 
              from-purple-500 
              to-blue-400 
              hover:from-purple-600 
              hover:to-blue-500 
              shadow-lg 
              shadow-violet-500/50 
              transition 
              transform 
              hover:scale-[1.01]
              duration-300
              mt-8
            "
          >
            Reservar Mi Consulta Mística
          </button>
        </form>
      </div>
      
    </div>
    
  );
};

export default TarotBooking;