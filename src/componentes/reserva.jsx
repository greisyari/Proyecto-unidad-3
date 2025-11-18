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
    // 1. Contenedor Principal: Fondo Místico con Degradado Oscuro
    <div 
      className="
        min-h-screen 
        w-full 
        flex 
        items-center 
        justify-center 
        p-6 
        // Degradado Oscuro y Profundo (Negro/Morado Oscuro)
        bg-gradient-to-br 
        from-black 
        via-gray-900 
        to-purple-900 
        font-sans 
      "
    >
      
      

      {/* 2. Tarjeta de Reserva (El Formulario) */}
      <div 
        className="
          // Estilo Glassmorphism Oscuro: Fondo Morado con Transparencia
          bg-purple-900/40 
          backdrop-blur-md 
          border 
          border-pink-500/50 // Borde Rosa Brillante
          p-8 
          md:p-12 
          rounded-3xl // Bordes más redondeados
          shadow-2xl 
          shadow-fuchsia-500/30 // Sombra Rosa-Fucsia
          max-w-xl 
          w-full
          text-white
          transform hover:scale-[1.01] transition duration-500 // Efecto sutil al pasar el ratón
        "
      >
        <h2 
          className="
            text-5xl // Título más grande
            font-extrabold // Más impacto
            font-serif 
            text-center 
            mb-4 // Espacio reducido para la descripción
            // Degradado Rosa/Morado Vívido en el texto
            bg-clip-text 
            text-transparent 
            bg-gradient-to-r 
            from-pink-400 
            to-purple-300
            drop-shadow-xl // Sombra más marcada para el título
          "
        >
          Guía tu Destino 🔮
        </h2>
        
        <p className="text-center text-pink-200/90 italic mb-8">
          Conéctate con la sabiduría ancestral. Llena el formulario para asegurar tu espacio.
        </p>

        {/* 3. Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Campo Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-bold mb-1 text-purple-300">
              Tu Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="
                w-full p-3 
                bg-black/30 // Fondo de campo negro semi-transparente
                border-b-2 border-pink-600/60 // Borde inferior rosa para detalle
                rounded-t-lg // Solo redondeado arriba
                focus:border-pink-400 
                focus:ring-0 // Quitar el anillo de enfoque por defecto
                text-white placeholder-gray-400 
                transition duration-300
              "
              placeholder="Ej: Luna Estelar"
            />
          </div>

          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1 text-purple-300">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full p-3 
                bg-black/30 
                border-b-2 border-pink-600/60 
                rounded-t-lg 
                focus:border-pink-400 
                focus:ring-0 
                text-white placeholder-gray-400 
                transition duration-300
              "
              placeholder="contacto@estrellas.com"
            />
          </div>
          
          {/* Campo Tipo de Consulta */}
          <div>
            <label htmlFor="tipoConsulta" className="block text-sm font-bold mb-1 text-purple-300">
              Tipo de Consulta
            </label>
            <select
              id="tipoConsulta"
              name="tipoConsulta"
              value={formData.tipoConsulta}
              onChange={handleChange}
              required
              className="
                w-full p-3 
                bg-black/30 
                border-b-2 border-pink-600/60 
                rounded-t-lg 
                focus:border-pink-400 
                focus:ring-0 
                text-white appearance-none 
                transition duration-300
              "
              // Color de flecha personalizado (rosa)
              style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23DB2777'%3e%3cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3e%3c/svg%3e\")" }}
            >
              {/* Opciones con fondo oscuro para resaltar el texto claro */}
              <option value="" className="bg-gray-800 text-white">--- Selecciona una opción ---</option>
              <option value="general" className="bg-gray-800 text-white">Lectura General (30 min)</option>
              <option value="amor" className="bg-gray-800 text-white">Especial Amor y Relaciones (60 min)</option>
              <option value="carrera" className="bg-gray-800 text-white">Camino Profesional (60 min)</option>
              <option value="anual" className="bg-gray-800 text-white">Predicción Anual (90 min)</option>
            </select>
          </div>

          {/* Campo Fecha y Hora */}
          <div>
            <label htmlFor="fecha" className="block text-sm font-bold mb-1 text-purple-300">
              Fecha y Hora Deseada 📅
            </label>
            <input
              type="datetime-local"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              className="
                w-full p-3 
                bg-black/30 
                border-b-2 border-pink-600/60 
                rounded-t-lg 
                focus:border-pink-400 
                focus:ring-0 
                text-white 
                transition duration-300
              "
              min={new Date().toISOString().slice(0, 16)} 
            />
          </div>
          
          {/* Botón de Envío */}
          <button
            type="submit"
            className="
              w-full 
              py-4 // Relleno más grande
              px-4 
              rounded-full 
              font-extrabold // Texto más grueso
              text-xl 
              // Degradado del botón: Morado Brillante a Rosa Fucsia
              bg-gradient-to-r 
              from-purple-600 
              to-pink-500 
              text-white // Texto blanco para contraste
              hover:from-purple-700 
              hover:to-pink-600 
              shadow-xl 
              shadow-pink-500/50 // Sombra que combina con el color
              transition 
              transform 
              hover:scale-[1.03] // Efecto de elevación más notable
              duration-300
              mt-8
            "
          >
            Reservar Mi Consulta Mística ✨
          </button>
        </form>
        
      </div>
      
    </div>
    
  );
};

export default TarotBooking;