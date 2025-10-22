import React from "react";

const interpretacionesAmor = [
  {
    title: "Deseo y Atracción Inconsciente",
    description:
      "Soñar con la persona que te gusta es una manifestación directa de tus deseos y atracción. Tu subconsciente revive y procesa los sentimientos y fantasías que tienes en la vida real, buscando una forma de satisfacción emocional que aún no se ha materializado.",
    iconText: "❤️",
  },
  {
    title: "Procesamiento de la Relación",
    description:
      "Si ya interactúas con esa persona, el sueño es tu mente procesando las conversaciones y encuentros. Analiza la dinámica de la relación, lo que se dijo o no se dijo, y te ayuda a prepararte (o a preocuparte) por los próximos pasos.",
    iconText: "🧠",
  },
  {
    title: "Reflejo de Necesidades Personales",
    description:
      "A veces, esa persona simboliza algo que necesitas: seguridad, afecto, aventura o un ideal. El sueño no es solo sobre ellos, sino sobre la parte de ti que anhela las cualidades o la conexión que asocias con esa persona.",
    iconText: "✨",
  },
];

export default function SuenosAmor() {
  return (
    <div className="relative min-h-screen bg-gray-200 overflow-hidden">
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      {/* Biografía introductoria */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <div className="w-full md:w-1/3 h-64 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 text-lg font-semibold border-2 border-pink-300 w-full h-full">
          <img src="https://media.glamour.mx/photos/647d6d7a445fc17983e4bfff/16:9/w_2560%2Cc_limit/pareja-correcta.jpg" alt="" />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-4 font-comfortaa text-gray-900">
            ¿Por qué Sueñas con la Persona que te Gusta?
          </h1>
          <p className="text-gray-700 leading-relaxed text-gray-700 leading-relaxed text-lg border-l-4 border-purple-500 pl-4 bg-purple-50/50 p-2 rounded-md">
            Soñar con la persona que ocupa tus pensamientos es una experiencia común, a menudo dulce y a veces frustrante. El subconsciente utiliza estos sueños para explorar tus emociones más profundas, tus expectativas y la naturaleza de la atracción que sientes. Aquí te presentamos las razones más frecuentes que la psicología del sueño ofrece para este fenómeno.
          </p>
        </div>
      </div>

      {/* Lista de Interpretaciones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {interpretacionesAmor.map(({ title, description, iconText }) => (
          <div
            key={title}
            className="flex flex-col items-center bg-pink-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-pink-500"
          >
            {/* Ícono Específico */}
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center text-3xl mb-4 select-none">
              {iconText}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
              {title}
            </h3>
            <p className="text-gray-700 text-center text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}