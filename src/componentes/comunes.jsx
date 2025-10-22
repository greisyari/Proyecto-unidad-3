import React from "react";

const sueñoscomunes = [
  {
    title: "Caer",
    description:
      "Soñar que caes es uno de los sueños más comunes y suele reflejar inseguridad o pérdida de control en tu vida.",
    iconChar: "↓", // Ícono simple de caída
    colors: "from-pink-500 to-purple-600",
  },
  {
    title: "Ser perseguido",
    description:
      "Este sueño indica que estás evitando algún problema o conflicto que necesitas enfrentar.",
    iconChar: "🏃", // Ícono simple de corredor
    colors: "from-purple-600 to-black",
  },
  {
    title: "Volando",
    description:
      "Soñar que vuelas representa libertad, superación de obstáculos y deseos de escapar.",
    iconChar: "🕊️", // Ícono de pájaro/vuelo
    colors: "from-pink-400 to-purple-500",
  },
  {
    title: "Dientes que se caen",
    description:
      "Este sueño está relacionado con ansiedad, inseguridad sobre tu apariencia o miedo a perder poder.",
    iconChar: "🦷", // Ícono de diente
    colors: "from-black to-pink-600",
  },
  {
    title: "Llegar tarde",
    description:
      "Soñar con llegar tarde puede reflejar estrés, presión o miedo a perder oportunidades.",
    iconChar: "⏱️", // Ícono de reloj/tiempo
    colors: "from-purple-500 to-pink-500",
  },
  {
    title: "Estar desnudo en público",
    description:
      "Este sueño simboliza vulnerabilidad, inseguridad o miedo a ser juzgado.",
    iconChar: "👤", // Ícono de persona (vulnerable)
    colors: "from-pink-600 to-purple-800",
  },
  {
    title: "Exámenes o pruebas",
    description:
      "Refleja preocupación por el desempeño personal o miedo al fracaso.",
    iconChar: "📝", // Ícono de examen/nota
    colors: "from-black to-purple-700",
  },
  {
    title: "Perderse o estar perdido",
    description:
      "Indica confusión, falta de dirección o ansiedad por no saber qué camino tomar.",
    iconChar: "❓", // Ícono de pregunta/duda
    colors: "from-purple-800 to-pink-700",
  },
];

export default function Comunes() {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden py-12">
      <section className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
        {/* Biografía introductoria */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="w-full md:w-1/3 h-64 rounded-lg overflow-hidden shadow-lg">
            {/* Imagen cambiada y adaptada a la paleta de colores */}
            <img
              src="https://www.economistjurist.es/wp-content/uploads/sites/2/2022/02/my-bed-is-my-the-best-friend.jpg"
              alt="Sueño abstracto"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-extrabold mb-4 text-gray-900 font-comfortaa">
              Los sueños más comunes y su interpretación oculta

            </h1>
            <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-purple-500 pl-4 bg-purple-50/50 p-2 rounded-md">
              Soñar es una función vital del cerebro. No solo sirve para que tu mente se entretenga mientras duermes, sino que también puede tener significados profundos relacionados con nuestras emociones y experiencias diarias. Descubre el significado oculto de los sueños más comunes y qué te están tratando de decir.
            </p>
          </div>
        </div>

        {/* Lista de sueños comunes - Estilos actualizados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sueñoscomunes.map(({ title, description, iconChar, colors }) => (
            <div
              key={title}
              className="flex flex-col items-center bg-white rounded-xl p-5 shadow-lg border-t-4 border-pink-500/50 
                         transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer group"
            >
              {/* Nuevo Icono creativo, interactivo y con degradado */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 text-4xl font-bold select-none
                           bg-gradient-to-br ${colors} text-white shadow-xl 
                           transition-all duration-500 group-hover:rotate-6 group-hover:shadow-purple-400/80`}
              >
                {iconChar}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-pink-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}