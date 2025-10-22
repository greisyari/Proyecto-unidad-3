import React from "react";

const pesadillasComunes = [
  {
    title: "Ser perseguido",
    description:
      "Manifiesta que estás evitando un problema o conflicto importante. Si no puedes correr, refleja impotencia.",
    iconChar: "🏃💨", // Corriendo y escape
    colors: "from-pink-600 to-purple-800",
  },
  {
    title: "Caer al vacío",
    description:
      "Simboliza el miedo a perder el control sobre una situación o a sentir una profunda inseguridad e inestabilidad.",
    iconChar: "😵‍💫", // Vértigo/Mareo
    colors: "from-purple-700 to-black",
  },
  {
    title: "Dientes que caen",
    description:
      "Ligada a la ansiedad, inseguridad sobre tu apariencia o el miedo a la pérdida de poder, estatus o vitalidad.",
    iconChar: "🦷💔", // Diente roto
    colors: "from-black to-pink-500",
  },
  {
    title: "Desnudo en público",
    description:
      "Refleja un miedo intenso a la vulnerabilidad, a ser expuesto, juzgado o a que los demás descubran tus inseguridades.",
    iconChar: "🙈", // Ocultar
    colors: "from-pink-500 to-purple-600",
  },
  {
    title: "Llegar tarde",
    description:
      "Indica estrés, presión o miedo a perder una oportunidad crucial, a no estar preparado o a estar fallando en una meta.",
    iconChar: "⏰", // Alarma/Tiempo
    colors: "from-purple-600 to-pink-700",
  },
  {
    title: "Fracaso en examen",
    description:
      "Símbolo de la preocupación por el desempeño, el miedo al fracaso o la sensación de no estar a la altura de las expectativas.",
    iconChar: "❌", // Error/Fallo
    colors: "from-black to-purple-500",
  },
  {
    title: "Estar atrapado",
    description:
      "Representa la sensación de restricción o confinamiento en alguna área de tu vida, sintiendo que no puedes escapar de una circunstancia.",
    iconChar: "⛓️", // Cadenas/Encierro
    colors: "from-purple-500 to-black",
  },
  {
    title: "Accidentes/Lesiones",
    description:
      "Simboliza la vulnerabilidad, el miedo a ser herido o la dificultad para afrontar un cambio o 'golpe' en la vida real.",
    iconChar: "🩹", // Herida/Vulnerabilidad
    colors: "from-pink-700 to-purple-700",
  },
  {
    title: "Muerte de un ser querido",
    description:
      "Es una forma de procesar el duelo, el miedo a la pérdida o a la inevitabilidad de los cambios, no una predicción literal.",
    iconChar: "🥀", // Marchitar/Pérdida
    colors: "from-black to-purple-800",
  },
  {
    title: "Desastres naturales",
    description:
      "Indica que te sientes abrumado por emociones intensas o por situaciones incontrolables, a menudo relacionadas con crisis.",
    iconChar: "🌪️", // Tormenta/Caos
    colors: "from-purple-800 to-pink-600",
  },
];

export default function Pesadillas() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden py-12">
      {/* Fondo sutil de degradado oscuro para la sección principal */}
      <section className="max-w-5xl mx-auto p-8 bg-gray-800 rounded-xl shadow-3xl border border-purple-900/50">
        {/* Biografía introductoria - Adaptada al tema Pesadillas */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="w-full md:w-1/3 h-64 rounded-lg overflow-hidden shadow-xl border-2 border-pink-400">
            {/* Placeholder de imagen con colores oscuros y vibrantes */}
            <img
              src="https://media.a24.com/p/5d0815c96bbc81579fc3adeb2ce3a9ee/adjuntos/296/imagenes/009/578/0009578394/1200x675/smart/mujer_pesadillasjpg.jpg"
              alt="Símbolo de Pesadilla abstracto"
              className="w-full h-full object-cover opacity-70 transition duration-500 hover:opacity-100"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-extrabold mb-4 font-comfortaa text-white">
              Las 10 Pesadillas más Comunes y su Intenso Significado
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg border-l-4 border-pink-500 pl-4 bg-gray-700/50 p-3 rounded-md shadow-inner">
              Las pesadillas son sueños cargados de emociones negativas como
              miedo, terror o angustia, que nos despiertan abruptamente. Estos
              sueños intensos no solo son producto del estrés, sino que también
              actúan como una potente señal de nuestro subconsciente para
              alertarnos sobre conflictos emocionales no resueltos, ansiedades
              profundas o situaciones de la vida que nos hacen sentir vulnerables
              o fuera de control. Entender el símbolo detrás de ellas es el
              primer paso para enfrentarlas.
            </p>
          </div>
        </div>

        {/* Lista de Pesadillas Comunes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pesadillasComunes.map(({ title, description, iconChar, colors }) => (
            <div
              key={title}
              className="flex flex-col items-center bg-gray-900 rounded-xl p-6 shadow-2xl border border-gray-700 
                         transform transition-all duration-300 hover:scale-[1.05] hover:shadow-pink-500/30 cursor-pointer group"
            >
              {/* Nuevo Icono creativo, interactivo y con degradado */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 text-4xl font-bold select-none
                           bg-gradient-to-br ${colors} text-white shadow-xl 
                           transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-pink-400/80`}
              >
                {iconChar}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-pink-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-400 text-center text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}