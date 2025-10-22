import React, { useState } from "react";
import { Link } from "react-router-dom";

const dreamsData = [
  {
    title: "Los sueños más comunes y su interpretación oculta",
    img: "https://www.economistjurist.es/wp-content/uploads/sites/2/2022/02/my-bed-is-my-the-best-friend.jpg",
    alt: "Sueños comunes",
    excerpt:
      "Soñar es una función vital del cerebro. No solo sirve para que tu mente se entretenga mientras duermes...",
    fullText:
      "Soñar es una función vital del cerebro. No solo sirve para que tu mente se entretenga mientras duermes, sino que también puede tener significados profundos relacionados con nuestras emociones y experiencias diarias. Descubre el significado oculto de los sueños más comunes y qué te están tratando de decir.",
    direccion: "/suenos-comunes",
  },
  {
    title: "Las 10 pesadillas más comunes y su significado",
    img: "https://media.a24.com/p/5d0815c96bbc81579fc3adeb2ce3a9ee/adjuntos/296/imagenes/009/578/0009578394/1200x675/smart/mujer_pesadillasjpg.jpg",
    alt: "Pesadillas comunes",
    excerpt:
      "¿Alguna vez te has despertado en medio de la noche, sudando y con el corazón a mil, después de una pesadilla?...",
    fullText:
      "¿Alguna vez te has despertado en medio de la noche, sudando y con el corazón acelerado después de una pesadilla? Este artículo explora las 10 pesadillas más comunes y sus significados para ayudarte a entender lo que tu subconsciente está tratando de comunicar.",
    direccion: "/pesadillas",
  },
  {
    title: "Qué significa soñar con la persona que te gusta",
    img: "https://www.marie-claire.es/wp-content/uploads/sites/2/2023/09/12/6500cfc532828.jpeg",
    alt: "Soñar con agua",
    excerpt:
      "Soñar con la persona que te gusta es una de las experiencias más comunes. Estos sueños están vinculados a nuestros deseos, esperanzas...",
    fullText:
      "Soñar con la persona que te gusta es una de las experiencias más comunes. Estos sueños están vinculados a **nuestros deseos, esperanzas y a la importancia emocional** que le otorgamos. Reflejan el **apego y la cantidad de veces que pensamos en ella** en el subconsciente. Este artículo te ayudará a interpretar si es un reflejo de tus anhelos o una invitación a la acción.",
    direccion: "/significado-agua",
  },
];

export default function Sueños() {
  const [selectedDream, setSelectedDream] = useState(null);

  return (
    <>
      {/* Fondo de color vibrante */}
      <div className="relative min-h-screen bg-gray-900 overflow-hidden py-12">
        <div className="max-w-6xl mx-auto p-4">
          <header className="text-center mb-12 bg-white/10 p-6 rounded-xl shadow-lg border-b-4 border-pink-500">
            {/* Título y Subtítulo con nuevo diseño y colores */}
            <h1 className="text-5xl font-extrabold font-comfortaa mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300 transform transition-all duration-500 hover:scale-[1.02] cursor-default">
              El Santuario de los Sueños 🌌
            </h1>
            <p className="text-indigo-200 text-xl font-light">
              Descubre el significado de tus sueños y lo que intentan decirte.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-3">
            {dreamsData.map(({ title, img, alt, excerpt, fullText, direccion }) => (
              <article
                key={title}
                // Estilo de tarjeta más oscuro y contrastante
                className="bg-gray-800 rounded-xl shadow-xl overflow-hidden 
                           hover:shadow-pink-500/50 transition-all duration-300 cursor-pointer 
                           border-b-4 border-transparent hover:border-pink-500 transform hover:translate-y-[-4px]"
                onClick={() => setSelectedDream({ title, img, alt, fullText, direccion })}
                aria-label={`Abrir modal para ${title}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedDream({ title, img, alt, fullText, direccion });
                  }
                }}
              >
                <img src={img} alt={alt} className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                <div className="p-6 flex flex-col h-full">
                  <h2 className="font-comfortaa text-2xl font-bold mb-4 text-white">
                    {title}
                  </h2>
                  <p className="text-gray-400 flex-grow">{excerpt}</p>
                  <span className="mt-6 inline-block text-pink-400 hover:text-pink-300 hover:underline font-semibold transition-colors duration-300">
                    Leer más →
                  </span>
                </div>
              </article>
            ))}
          </section>
        </div>

        {/* Modal */}
        {selectedDream && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={() => setSelectedDream(null)}
          >
            <div
              // Estilo del modal renovado
              className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl shadow-purple-500/50 relative transform transition-transform duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar más visible */}
              <button
                onClick={() => setSelectedDream(null)}
                className="absolute top-4 right-4 text-pink-400 hover:text-white bg-gray-700/80 p-2 rounded-full z-10 focus:outline-none transition-colors"
                aria-label="Cerrar modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Contenido del modal */}
              <img
                src={selectedDream.img}
                alt={selectedDream.alt}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-8">
                <h2
                  id="modal-title"
                  className="font-comfortaa text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
                >
                  {selectedDream.title}
                </h2>
                <p className="text-gray-300 mb-6 border-l-4 border-purple-500 pl-4 py-1">
                  {selectedDream.fullText}
                </p>
                <Link
                  to={selectedDream.direccion}
                  className="inline-block px-4 py-2 bg-pink-600 text-white rounded-lg font-semibold 
                             hover:bg-pink-500 transition-colors duration-300 shadow-md hover:shadow-lg"
                  onClick={() => setSelectedDream(null)} // cerrar modal al hacer click
                >
                  Continuar leyendo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}