// Datos de ejemplo para las opiniones, con una estructura mejorada
const opinionesTarot = [
  {
    id: 1,
    usuario: "Alma_Buscadora",
    puntuacion: 5,
    comentario: "El tarot es una herramienta sagrada de autoconocimiento. No es adivinación, es una forma de ponerle nombre a lo que ya sabes. Me ha dado muchísima claridad. ¡Súper recomendado!",
    fecha: "2024-09-15"
  },
  {
    id: 2,
    usuario: "katshnn",
    puntuacion: 5,
    comentario: "Ame la pagina es muy interactiva y su lectura del tarot personalizada es muy buena ameeee",
    fecha: "2024-09-10"
  },
  {
    id: 3,
    usuario: "jackie_23",
    puntuacion: 4,
    comentario: "La lectura fue muy precisa sobre mi situación actual. Sentí una profunda conexión y validación. Me ayudó a tomar decisiones importantes y a sentirme más segura del camino a seguir.",
    fecha: "2024-09-20"
  },
  {
    id: 4,
    usuario: "Mente_Abierta",
    puntuacion: 5,
    comentario: "Lo uso como una herramienta práctica, casi como meditación para ordenar mis ideas. Es increíble cómo te ayuda a salir de la caja y a ver perspectivas diferentes. No lo enfoco en el futuro.",
    fecha: "2024-09-22"
  },
  {
    id: 5,
    usuario: "eis_gry",
    puntuacion: 3,
    comentario: "Amé la pagina y tambien que la chica del tarot hace bien su trabajo, acierta en todas",
    fecha: "2024-09-18"
  },
];


export const StarRating = ({ rating }) => {
  const totalStars = 5;
  
  return (
    <div className="flex space-x-0.5">
      {[...Array(totalStars)].map((_, index) => {
        // Rellena la estrella si el índice es menor que la puntuación
        const isFilled = index < rating;
        return (
          <svg
            key={index}
            className={`w-5 h-5 ${isFilled ? 'text-pink-400' : 'text-purple-200'}`} // Estrellas rosadas y morado claro
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.691h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.042a1 1 0 00-1.175 0l-2.817 2.042c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.691l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
};

// ----------------------------------------------------------------------
// Componente de la Tarjeta de Opinión
// Se exporta para poder usarse de forma independiente
// ----------------------------------------------------------------------

export const TarotReviewCard = ({ review }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-purple-100"> {/* Borde morado claro */}
    <div className="flex justify-between items-start mb-3">
      <p className="text-lg font-semibold text-purple-700">{review.usuario}</p> {/* Usuario en morado oscuro */}
      <p className="text-sm text-gray-500">{review.fecha}</p>
    </div>
    
    <div className="mb-4">
      <StarRating rating={review.puntuacion} />
    </div>
    
    <p className="text-gray-700 italic border-l-4 border-pink-300 pl-3"> {/* Borde izquierdo rosado */}
      "{review.comentario}"
    </p>
  </div>
);

// ----------------------------------------------------------------------
// Componente Principal del Dashboard (Resumen y Listado)
// Se exporta por defecto ya que es el componente principal
// ----------------------------------------------------------------------

export default function TarotReviewDashboard({ reviews = opinionesTarot }) {
  // Manejo de caso sin reviews para evitar división por cero
  if (!reviews || reviews.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No hay opiniones disponibles para mostrar.
      </div>
    );
  }

  // Cálculo del promedio
  const totalPuntuaciones = reviews.reduce((sum, review) => sum + review.puntuacion, 0);
  const promedio = (totalPuntuaciones / reviews.length).toFixed(1);

  // Contadores para polaridad
  const positivas = reviews.filter(r => r.puntuacion >= 4).length;
  const negativas = reviews.filter(r => r.puntuacion <= 2).length;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 p-8"> {/* Fondo con degradado sutil */}
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 border-b-4 border-purple-400 pb-2"> {/* Título en azul oscuro con borde morado */}
        🔮 Opiniones de Usuarios sobre Lecturas de Tarot
      </h1>

      {/* Tarjeta de Resumen Global */}
      <div className="bg-purple-700 text-white p-6 rounded-xl shadow-xl mb-10"> {/* Fondo morado oscuro */}
        <h2 className="text-2xl font-bold mb-3">Resumen Global</h2>
        <div className="flex justify-around items-center text-center flex-wrap gap-4">
          <div>
            <p className="text-5xl font-extrabold text-pink-300">{promedio}</p> {/* Puntuación en rosado claro */}
            <p className="text-purple-200">Puntuación Promedio (de 5)</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold">{reviews.length}</p>
            <p className="text-purple-200">Total de Opiniones</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-green-300">{positivas}</p> {/* Positivas en verde, si quieres mantener ese color para "bueno" */}
            <p className="text-purple-200">Positivas (4-5 ⭐)</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-red-300">{negativas}</p> {/* Negativas en rojo, si quieres mantener ese color para "malo" */}
            <p className="text-purple-200">Negativas (1-2 ⭐)</p>
          </div>
        </div>
      </div>
      
      {/* Listado de Opiniones */}
      <h2 className="text-3xl font-bold text-purple-800 mb-6">Testimonios Destacados</h2> {/* Título de testimonios en morado oscuro */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map(review => (
          <TarotReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

// Nota: Si usas el código de ejemplo en un solo archivo, la línea 'export default...' 
// funciona mejor si el componente se define con 'function TarotReviewDashboard...'
// como se ha hecho arriba.