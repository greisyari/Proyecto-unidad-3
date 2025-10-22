import React, { useState } from 'react';

// --- Contenido de Ejemplo ---

const dummyHoroscope = {
  Aries: {
    title: 'Aries: ¡Energía Explosiva!',
    luck: 'Tu suerte está en los **nuevos comienzos**. Un proyecto olvidado puede resurgir con fuerza. En el amor, sé directo y honesto.',
    today: 'La alineación de Marte te da un impulso de confianza. Es un día excelente para enfrentar tareas difíciles o iniciar una conversación importante. Cuidado con la impaciencia.'
  },
  Tauro: {
    title: 'Tauro: Estabilidad y Placer',
    luck: 'La suerte te sonríe en el área **financiera**. Es un buen momento para planificar inversiones. Busca el placer en las pequeñas cosas.',
    today: 'Venus te trae calma y apreciación por la belleza. Disfruta de un ambiente tranquilo. En el trabajo, tu perseverancia será recompensada. No te aferres demasiado a la rutina.'
  },
  // ... (Podrías añadir los otros signos aquí)
  Géminis: {
    title: 'Géminis: Comunicación en Foco',
    luck: 'Tu habilidad para **conectar** con otros te abrirá puertas. Si tienes que firmar algo, lee bien la letra pequeña. En la salud, evita el estrés.',
    today: 'Mercurio, tu regente, te da agilidad mental. Es un día ideal para aprender algo nuevo o para socializar. Ten cuidado de no dispersarte demasiado con muchas ideas a la vez.'
  },
  Cáncer: {
    title: 'Cáncer: Refugio Emocional',
    luck: 'La suerte está en la **familia** y el hogar. Un reencuentro te traerá mucha paz. Escucha a tu intuición en decisiones importantes.',
    today: 'La Luna te hace sentir sensible y protector. Es un buen momento para cuidar de ti y de tus seres queridos. Busca el equilibrio entre tu vida pública y privada.'
  },
  Leo: {
    title: 'Leo: Brillo y Creatividad',
    luck: 'El centro de atención es tu lugar. Tu suerte está en los **proyectos creativos**. No temas mostrar tu talento con orgullo.',
    today: 'El Sol ilumina tu camino, llenándote de vitalidad. Hoy es un día para liderar y tomar la iniciativa. Sé generoso, pero no dejes que abusen de tu bondad.'
  },
  Virgo: {
    title: 'Virgo: Orden y Detalle',
    luck: 'La suerte te llega a través de la **organización**. Ordenar tus espacios o tus ideas te dará claridad. Evita el perfeccionismo excesivo.',
    today: 'La energía de la Tierra te invita a ser práctico. Es un día excelente para la planificación y el trabajo detallado. Recuerda tomar un descanso, no todo es trabajo.'
  },
  Libra: {
    title: 'Libra: Armonía y Justicia',
    luck: 'Tu suerte está en las **asociaciones**. Un compromiso o colaboración te será muy favorable. Busca el equilibrio en tus relaciones.',
    today: 'Venus te impulsa a buscar la belleza y la diplomacia. Es un día para resolver conflictos con tacto. No dejes que la indecisión te paralice; confía en tu juicio.'
  },
  Escorpio: {
    title: 'Escorpio: Transformación Profunda',
    luck: 'La suerte está en la **verdad oculta**. Investiga a fondo cualquier situación. Una transformación personal se avecina, acéptala.',
    today: 'Plutón te da la intensidad para sumergirte en asuntos profundos. Es un día para la introspección y para soltar lo que ya no sirve. Controla tus impulsos y sé estratégico.'
  },
  Sagitario: {
    title: 'Sagitario: Expansión y Aventura',
    luck: 'Tu suerte te espera en el **viaje** o en la enseñanza. Un conocimiento nuevo te traerá grandes beneficios. No le temas al riesgo.',
    today: 'Júpiter te llena de optimismo y ganas de explorar. Es un día para pensar en grande y expandir tus horizontes. Evita hacer promesas que no puedas cumplir por exceso de entusiasmo.'
  },
  Capricornio: {
    title: 'Capricornio: Ambición y Disciplina',
    luck: 'La suerte está ligada a tus **metas profesionales**. El esfuerzo que hagas hoy tendrá una recompensa visible. Sé paciente y constante.',
    today: 'Saturno te recuerda la importancia de la estructura y la responsabilidad. Es un día para enfocarte en tus deberes y construir bases sólidas. Permítete un momento de relajación al final del día.'
  },
  Acuario: {
    title: 'Acuario: Innovación y Amistad',
    luck: 'La suerte está en la **comunidad** y las ideas futuristas. Un amigo te dará un consejo valioso. No temas ser diferente.',
    today: 'Urano te da un toque de originalidad e ingenio. Es un día excelente para la lluvia de ideas y para colaborar en equipo. Acepta los cambios inesperados con una mente abierta.'
  },
  Piscis: {
    title: 'Piscis: Intuición y Sueños',
    luck: 'Tu suerte está en tu **mundo interior**. Presta atención a tus sueños y corazonadas. Un acto de bondad será devuelto con creces.',
    today: 'Neptuno acentúa tu empatía e imaginación. Es un día para la creatividad y para ayudar a otros. Asegúrate de establecer límites para no absorber demasiada energía emocional.'
  },
};

const tarotCards = [
  { name: 'El Mago', meaning: 'Iniciativa, habilidad, recursos. Estás listo para empezar un nuevo ciclo con todas las herramientas a tu disposición.' },
  { name: 'La Sacerdotisa', meaning: 'Intuición, misterio, sabiduría interior. Es momento de escuchar tu voz interna y buscar conocimiento oculto.' },
  { name: 'La Emperatriz', meaning: 'Fertilidad, abundancia, naturaleza. Un periodo de crecimiento y de goce de la vida te espera.' },
  { name: 'El Emperador', meaning: 'Autoridad, estructura, control. Es necesario establecer límites y tener una disciplina firme para alcanzar tus metas.' },
  { name: 'Los Enamorados', meaning: 'Decisión, unión, elecciones. Estás ante una encrucijada y debes elegir un camino guiado por el corazón.' },
  { name: 'La Rueda de la Fortuna', meaning: 'Cambio de ciclo, destino, suerte. Un giro inesperado está por ocurrir, acepta el movimiento de la vida.' },
  { name: 'La Fuerza', meaning: 'Coraje, compasión, autocontrol. La verdadera fuerza viene de dominar tus instintos con gentileza.' },
  { name: 'La Justicia', meaning: 'Equilibrio, verdad, legalidad. Las cosas se están nivelando. Sé honesto contigo mismo y con los demás.' },
  { name: 'El Ermitaño', meaning: 'Introspección, soledad, guía. Es momento de retirarse para reflexionar y encontrar la luz en tu interior.' },
  { name: 'La Muerte', meaning: 'Transformación, final de ciclo, cambio. Algo termina para que algo nuevo y mejor pueda nacer. No temas a la evolución.' },
  { name: 'El Sol', meaning: 'Alegría, éxito, vitalidad. Un periodo de claridad y felicidad se presenta. Todo lo que inicies ahora estará bendecido.' },
  { name: 'El Diablo', meaning: 'Ataduras, vicios, materialismo. Examina aquello que te limita o te obsesiona. La liberación está en reconocer tus cadenas.' },
];

// --- Componente del Modal de Tarot (Se mantiene igual) ---

const TarotModal = ({ card, onClose }) => {
  if (!card) return null; // No renderiza si no hay carta

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100 border-2 border-pink-500"
        onClick={(e) => e.stopPropagation()} // Evita que el click dentro del modal lo cierre
      >
        <h3 className="text-4xl font-bold text-pink-300 mb-4 text-center">
          Tu Carta del Día: {card.name}
        </h3>
        <div className="flex flex-col items-center mb-6">
          {/* Simulación de una carta de tarot más detallada */}
          <div className="w-48 h-72 bg-gray-700 rounded-md flex flex-col items-center justify-center shadow-lg border-4 border-purple-500 mb-4 transform rotate-3 hover:rotate-0 transition-transform">
            <span className="text-7xl text-purple-400 mb-2">🔮</span>
            <p className="text-lg text-gray-300 font-semibold">{card.name}</p>
          </div>
          <p className="text-lg text-gray-300 text-center italic mt-4">
            "{card.meaning}"
          </p>
        </div>
        
        <p className="text-sm text-gray-400 mt-6 text-center">
          Este arcano te guiará en tu jornada.
        </p>
        <button
          onClick={onClose}
          className="mt-6 block w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
        >
          Cerrar Mensaje
        </button>
      </div>
    </div>
  );
};


// --- NUEVO Componente del Modal de Horóscopo ---

const HoroscopeModal = ({ signData, onClose }) => {
  if (!signData) return null; // No renderiza si no hay datos del horóscopo

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div 
        className="bg-gray-800 p-10 rounded-xl shadow-2xl max-w-2xl w-full my-10 transform transition-all duration-300 scale-100 border-2 border-pink-500"
        onClick={(e) => e.stopPropagation()} // Evita que el click dentro del modal lo cierre
      >
        <h2 className="text-5xl font-bold text-center text-pink-300 mb-8 border-b pb-4 border-purple-700">
          {signData.title}
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-extrabold text-purple-400 mb-3 flex items-center">
              <span className="text-4xl mr-3">🍀</span> Tu Suerte de Hoy
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed bg-gray-700 p-4 rounded-lg italic" 
               dangerouslySetInnerHTML={{ __html: signData.luck }} />
          </div>
          
          <div>
            <h3 className="text-3xl font-extrabold text-purple-400 mb-3 flex items-center">
              <span className="text-4xl mr-3">🌟</span> Mensaje del Día
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed bg-gray-700 p-4 rounded-lg">
              {signData.today}
            </p>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="mt-10 block w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg"
        >
          Entendido, ¡A por el día!
        </button>
      </div>
    </div>
  );
};


// --- Componente Principal ---

function HoroscopoTarot() {
  // Estado para guardar el signo seleccionado y controlar el modal del horóscopo
  const [selectedSignData, setSelectedSignData] = useState(null); 
  // Estado para el modal de tarot
  const [tarotCard, setTarotCard] = useState(null);

  const zodiacSigns = [
    { name: 'Aries', date: 'Mar 21 - Abr 19', icon: '♈' },
    { name: 'Tauro', date: 'Abr 20 - May 20', icon: '♉' },
    { name: 'Géminis', date: 'May 21 - Jun 20', icon: '♊' },
    { name: 'Cáncer', date: 'Jun 21 - Jul 22', icon: '♋' },
    { name: 'Leo', date: 'Jul 23 - Ago 22', icon: '♌' },
    { name: 'Virgo', date: 'Ago 23 - Sep 22', icon: '♍' },
    { name: 'Libra', date: 'Sep 23 - Oct 22', icon: '♎' },
    { name: 'Escorpio', date: 'Oct 23 - Nov 21', icon: '♏' },
    { name: 'Sagitario', date: 'Nov 22 - Dic 21', icon: '♐' },
    { name: 'Capricornio', date: 'Dic 22 - Ene 19', icon: '♑' },
    { name: 'Acuario', date: 'Ene 20 - Feb 18', icon: '♒' },
    { name: 'Piscis', date: 'Feb 19 - Mar 20', icon: '♓' },
  ];

  // Función para manejar el click en "Ver Horóscopo"
  const handleViewHoroscope = (signName) => {
    // Mapea el nombre del signo al contenido de ejemplo y abre el modal.
    setSelectedSignData(dummyHoroscope[signName]);
  };

  // Función para cerrar el modal de Horóscopo
  const handleCloseHoroscopeModal = () => {
    setSelectedSignData(null);
  };

  // Función para manejar el click en "Tirar una Carta de Tarot"
  const handleDrawTarotCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];
    setTarotCard(card); // Abre el modal con la carta seleccionada
  };

  // Función para cerrar el modal de Tarot
  const handleCloseTarotModal = () => {
    setTarotCard(null);
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      
      {/* 1. Modal del Tarot */}
      <TarotModal card={tarotCard} onClose={handleCloseTarotModal} />
      
      {/* 2. Modal del Horóscopo (NUEVO) */}
      <HoroscopeModal signData={selectedSignData} onClose={handleCloseHoroscopeModal} />


      <header className="py-12 bg-gradient-to-r from-purple-900 to-indigo-900 text-center">
        <h1 className="text-5xl font-bold text-pink-300 mb-4 tracking-wide">
          Horóscopo & Lectura de Tarot
        </h1>
        <p className="text-xl text-purple-200">
          Descubre tu destino guiado por las estrellas y el tarot.
        </p>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        
        {/* 3. Sección de Selección de Signo */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold text-center text-purple-300 mb-10">
            Elige tu Signo Zodiacal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {zodiacSigns.map((sign) => (
              <div
                key={sign.name}
                className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-800 flex flex-col justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="text-6xl text-purple-400 mb-4 text-center">{sign.icon}</div>
                  <h3 className="text-2xl font-bold text-pink-200 mb-1 text-center">
                    {sign.name}
                  </h3>
                  <p className="text-md text-gray-400 mb-4 text-center">{sign.date}</p>
                </div>
                {/* El botón ahora abre el modal del horóscopo */}
                <button 
                  onClick={() => handleViewHoroscope(sign.name)}
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Ver Horóscopo
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Sección de Tarot (Se mantiene igual) */}
        <section className="bg-gray-800 p-8 rounded-lg shadow-xl border border-purple-800">
          <h2 className="text-4xl font-semibold text-center text-purple-300 mb-8">
            Lectura de la Carta del Día
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="w-32 h-48 bg-gray-700 rounded-md flex items-center justify-center shadow-lg border-2 border-purple-500">
              <span className="text-5xl text-purple-400">🃏</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl text-gray-300 mb-6 max-w-lg">
                ¿Qué tiene el **Arcano Mayor** para ti hoy? Haz click para que el universo revele
                un mensaje clave para tu jornada.
              </p>
              <button 
                onClick={handleDrawTarotCard}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Tirar una Carta de Tarot
              </button>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-8 mt-16 text-center text-gray-500 text-sm border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Astrología y Destino. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default HoroscopoTarot;