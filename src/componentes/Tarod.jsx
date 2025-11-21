// Tarod.jsx (Código Final con la Nueva Imagen Principal y Estilos Profesionales)

import React, { useState } from 'react';

// --- 0. Componente Modal ---
const Modal = ({ isOpen, onClose, title, content, imageUrl, altText }) => {
  if (!isOpen) return null;

  return (
    // 🌌 Fondo oscuro para el modal (Con Backdrop-blur para efecto moderno)
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300">
      
      {/* 🔮 Contenedor del Modal */}
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform scale-100 transition-all duration-500 ease-out">
        
        {/* Encabezado */}
        <div className="p-6 bg-gradient-to-r from-purple-700 to-pink-600 text-white sticky top-0 rounded-t-lg z-10 border-b-4 border-white/30">
          <h2 className="text-3xl font-serif font-bold mb-2">{title}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-pink-200 transition"
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>
        
        {/* Cuerpo del Contenido */}
        <div className="p-6">
          <img
            className="w-full h-auto object-cover rounded-xl mb-6 border-4 border-pink-400 shadow-lg"
            src={imageUrl}
            alt={altText}
          />
          <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line text-left">
            {content}
            <br/><br/>
            <strong className="text-purple-700">Análisis Profundo:</strong> Las cartas te están pidiendo una pausa. El verdadero obstáculo no es externo, sino la resistencia a aceptar la verdad de tu situación actual. Este es el momento de la introspección profunda. No busques excusas; busca soluciones en tu interior. La energía de la semana exige honestidad brutal.
          </p>
          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-purple-700 text-white text-xl font-semibold rounded-full hover:bg-pink-600 transition duration-300 shadow-xl tracking-wider"
            >
              Cerrar Lectura
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 1. Componente Card ---
const Card = ({ title, content, imageUrl, altText, bgColor, onClick }) => {
  return (
    <div
      className={`${bgColor} rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] cursor-pointer transition-all duration-300 p-6 text-center transform`}
      onClick={onClick}
      role="button"
      tabIndex="0"
    >
      <h3 className="text-2xl font-bold text-black mb-4">
        {title}
      </h3>
      <p className="text-base text-gray-700 mb-4 line-clamp-4">
        {content}
      </p>
      <img
        className="w-full mx-auto border-4 border-gray-700 rounded-xl transition-transform duration-500"
        src={imageUrl}
        alt={altText}
      />
    </div>
  );
};

// 🌟 2. Datos de las tarjetas (IMÁGENES TEMÁTICAS)
const cardData = [
  {
    title: 'SEMANA DECISIVA: El tarot de octubre te muestra lo que estás evitando',
    content:
      'La segunda mitad de octubre ya no está jugando. Esta semana tiene la energía de esas conversaciones que llevas evitando, de ese email que no quieres abrir, y de ese espejo que preferirías no mirar. El tarot no viene a prometerte arcoíris.',
    imageUrl: 'https://i.pinimg.com/736x/15/56/b2/1556b2786c4482fb2c27325066180c3e.jpg', 
    altText: 'tirada de cartas de tarot decisiva',
    bgColor: 'bg-purple-300',
  },
  {
    title: 'EL TAROT TE DICE DÓNDE Y CUÁNDO ENCONTRARÁS EL AMOR SEGÚN TU SIGNO',
    content:
      'Encontrar el amor no siempre es un cuento de hadas con banda sonora de película romántica… a veces es más bien una comedia incómoda con plot twists, silencios raros y timing pésimo. Pero, si algo tiene el tarot, es que no endulza la verdad. No te dice lo que quieres.',
    imageUrl: 'https://i.pinimg.com/736x/49/46/ea/4946ea44e66add3269adf90876645af2.jpg',
    altText: 'carta del tarot del Enamorado',
    bgColor: 'bg-pink-200',
  },
  {
    title: '¿QUÉ TE ESTÁ FRENANDO PARA ALCANZAR TUS METAS?',
    content:
      'Tienes miedo de lo que puedes lograr hacer tú mismo con tus esfuerzos, de tu capacidad o de lo que dirán de ti. No dejes que el miedo a la opinión de los demás te frene. ¿Qué dirán las personas si te atreves a seguir tus sueños?',
    imageUrl: 'https://content25.lecturas.com/medio/2023/11/03/tarot-el-loco_fcbe38ad_231103210518_1200x675.jpg',
    altText: 'carta del tarot del Loco',
    bgColor: 'bg-purple-300',
  },
  {
    title: 'ESTÁS LISTO, PERO AÚN NO LO SABES',
    content:
      'El tarot no muestra un problema... sino una revelación. Todo lo que necesitas ya está dentro de ti: la fuerza, la idea, el momento perfecto. Pero sigues esperando una señal más grande, un empujón, una certeza imposible. Esta lectura es tu señal. El mundo no te debe claridad. Tú debes atreverte con todo y dudas.',
    imageUrl: 'https://content20.lecturas.com/medio/2023/11/07/tarot-la-sacerdotisa_4192950b_231107153519_1280x720.jpg',
    altText: 'carta del tarot La Sacerdotisa',
    bgColor: 'bg-pink-300',
  },
  {
    title: 'NO TODO SILENCIO ES AUSENCIA',
    content:
      'A veces, cuando no hay respuestas, es porque el universo está reordenando todo en secreto. El tarot muestra que lo que ahora sientes como vacío es, en realidad, un espacio sagrado que se está preparando para algo mayor. No fuerces lo que necesita silencio. Escucha lo que tu alma intenta decirte entre todo ese ruido.',
    imageUrl: 'https://i.pinimg.com/474x/28/c4/03/28c403b3eb7837d57ab85f208bfa8cfa.jpg', 
    altText: 'carta del tarot El Ermitaño',
    bgColor: 'bg-purple-200',
  },
  {
    title: 'TUS GUÍAS TIENEN UN MENSAJE PARA TI',
    content:
      'No estás solo. Aunque a veces el camino se sienta oscuro, tus guías han estado susurrando señales en los lugares más sutiles: un sueño que se repite, una canción que aparece justo cuando la necesitas, un número que ves una y otra vez. El tarot revela que hay algo que debes recordar: estás siendo guiado incluso cuando no entiendes el destino. Confía. Ellos no te han soltado ni un segundo.',
    imageUrl: 'https://64.media.tumblr.com/9ea633da9255540ecbe926a171a17e91/0ad0fd1570c63da0-f1/s1280x1920/75efde36386d81e9f57302cf70eb4f7153ad8f81.jpg', 
    altText: 'guías espirituales o ángeles',
    bgColor: 'bg-pink-200',
  },
];

// 💖 3. Componente Principal Tarod
function Tarod() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    selectedCard: null,
  });

  const openModal = (card) => {
    setModalState({
      isOpen: true,
      selectedCard: card,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      selectedCard: null,
    });
  };
  
  const { isOpen, selectedCard } = modalState;

  return (
    <div className="text-center font-sans px-4 py-8 space-y-12 bg-gray-50 min-h-screen">
      
      {/* Encabezado Principal H1 (Animación sutil en hover) */}
      <header>
        <h1 className="text-center font-serif p-6 bg-gradient-to-r from-purple-700 via-pink-500 to-purple-800 text-white font-extrabold text-4xl rounded-lg shadow-2xl tracking-wide transition duration-300 hover:scale-[1.01]">
          DESCUBRE CON NOSOTROS LO QUE EL FUTURO TIENE PREPARADO PARA TI
        </h1>
      </header>

      {/* 🔮 Imagen Principal (ACTUALIZADA con el nuevo diseño místico) */}
      <div className="max-w-4xl mx-auto">
        <img
          className="w-full md:w-3/4 lg:w-2/3 mx-auto border-4 border-purple-500 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.01] brightness-110"
          // URL de la nueva imagen AI-generada de Pixabay
          src="https://i.etsystatic.com/12828793/r/il/62eed8/6090835361/il_794xN.6090835361_5csc.jpg" 
          alt="Ilustración de mujer mística de tarot en estilo moderno"
        />
      </div>


      {/* Título de la sección de tarjetas (H2) */}
      <h2 className="text-center font-serif text-3xl font-bold text-purple-800 mt-12 pb-4 border-b-2 border-pink-400">
        Lecturas Destacadas
      </h2>
      
      {/* Contenedor de las Tarjetas: Mapeo de datos */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10 p-4 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <Card
            key={index} 
            title={card.title}
            content={card.content}
            imageUrl={card.imageUrl}
            altText={card.altText}
            bgColor={card.bgColor}
            onClick={() => openModal(card)}
          />
        ))}
      </main>

      {/* Pie de Página / Llamada a la acción (H2) (Animación sutil en hover) */}
      <footer>
        <h2 className="text-center font-serif p-6 bg-gradient-to-r from-purple-700 via-pink-500 to-purple-800 text-white font-extrabold text-4xl rounded-lg shadow-2xl tracking-wide mt-12 transition duration-300 hover:scale-[1.01]">
          ¡LA AVENTURA DE TU VIDA COMIENZA AQUÍ! Descubre tu destino y atrévete a seguir tus sueños
        </h2>
        {/* Componente de Derechos de Autor simple */}
        <div className="text-center text-sm text-gray-600 mt-6 pb-4">
            <p>&copy; {new Date().getFullYear()} Tarod. Todos los derechos reservados.</p>
            <p className="text-xs mt-1">Disclaimer: Este sitio es solo para fines de entretenimiento.</p>
        </div>
      </footer>

      {/* 💎 Modal */}
      {isOpen && selectedCard && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          title={selectedCard.title}
          content={selectedCard.content}
          imageUrl={selectedCard.imageUrl}
          altText={selectedCard.altText}
        />
      )}
    </div>
  );
}

export default Tarod;