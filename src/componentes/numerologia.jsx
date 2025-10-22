import React from 'react';

// Diccionario de ejemplo para los significados
const SIGNIFICADOS_NUMEROLOGIA = {
    1: {
        titulo: "El Iniciador - Liderazgo",
        descripcion: "Representa la independencia, el liderazgo, la ambición y la originalidad. Tu camino es crear, ser pionero y confiar en tu individualidad."
    },
    2: {
        titulo: "El Pacificador - Cooperación",
        descripcion: "Simboliza la armonía, la diplomacia, la cooperación y la sensibilidad. Estás aquí para unir a las personas y mediar conflictos."
    },
    3: {
        titulo: "El Comunicador - Expresión",
        descripcion: "Encarna la creatividad, la expresión, la alegría y el optimismo. Tu propósito es inspirar y compartir tu luz con el mundo a través del arte o la comunicación."
    },
    4: {
        titulo: "El Constructor - Estabilidad",
        descripcion: "Significa la disciplina, el trabajo duro, la organización y la construcción de bases sólidas. Eres la roca de tu comunidad o familia."
    },
    5: {
        titulo: "El Aventurero - Libertad",
        descripcion: "Representa el cambio, la libertad, el viaje y la adaptabilidad. Tu vida está marcada por la exploración y la superación de limitaciones."
    },
    6: {
        titulo: "El Nutridor - Responsabilidad",
        descripcion: "Simboliza el amor, el servicio, la responsabilidad y la vida familiar. Tu camino es cuidar, enseñar y ofrecer consuelo a los demás."
    },
    7: {
        titulo: "El Buscador - Análisis",
        descripcion: "Encarna la introspección, el análisis, la espiritualidad y la búsqueda de la verdad. Necesitas tiempo a solas para meditar y aprender."
    },
    8: {
        titulo: "El Gerente - Poder",
        descripcion: "Significa la autoridad, el éxito material, la ambición y la justicia. Estás destinado a manejar grandes proyectos o finanzas con integridad."
    },
    9: {
        titulo: "El Humanitario - Servicio Universal",
        descripcion: "Representa la compasión, la generosidad, la finalización de ciclos y la sabiduría. Vienes a servir a la humanidad sin esperar nada a cambio."
    },
    11: {
        titulo: "El Maestro Idealista - Iluminación (Número Maestro)",
        descripcion: "Un número maestro de gran intuición y conciencia espiritual. Tienes el potencial de inspirar a las masas y traer iluminación."
    },
    22: {
        titulo: "El Maestro Constructor - Gran Visión (Número Maestro)",
        descripcion: "El número más potente. Puedes convertir sueños ambiciosos en realidad, construir estructuras duraderas y lograr el éxito a gran escala."
    },
    33: {
        titulo: "El Maestro Sanador - Servicio Compasivo (Número Maestro)",
        descripcion: "El número de la maestría en el amor universal y la curación. Vienes a ser un faro de amor incondicional y servicio."
    },
    'Tu Número': {
        titulo: "Número no calculado",
        descripcion: "Por favor, ingresa una fecha de nacimiento válida (DD/MM/AAAA) para calcular tu Número de Trayectoria de Vida."
    }
};

// Componente simple para el Modal
const ModalSignificado = ({ numero, significado, onClose }) => {
    if (!numero || !significado) return null;

    return (
        // Overlay para oscurecer el fondo
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={onClose} // Cerrar al hacer clic fuera del modal
        >
            {/* Contenedor del Modal */}
            <div 
                className="bg-gray-800 p-8 rounded-xl max-w-lg w-full shadow-2xl transform transition-all duration-300 scale-100 border border-pink-500/50"
                onClick={e => e.stopPropagation()} // Evitar que el clic dentro cierre el modal
            >
                <div className="text-right">
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-white text-3xl font-light leading-none"
                    >
                        &times;
                    </button>
                </div>
                
                <div className="text-center">
                    <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 tracking-wider">
                        {numero}
                    </span>
                    <h3 className="text-3xl font-bold text-purple-400 mt-4 mb-2">
                        {significado.titulo}
                    </h3>
                    <p className="text-lg text-gray-300 mt-4">
                        {significado.descripcion}
                    </p>
                </div>
            </div>
        </div>
    );
};


const SeccionNumerologia = () => {

    // Función de cálculo corregida para seguir la Numerología Pitagórica estándar
    const calcularNumero = (fecha) => {
        if (!fecha) return 'Tu Número';
        
        // 1. Limpiar y Obtener todos los dígitos de la fecha (DD/MM/AAAA)
        // Se reemplazan todos los caracteres no numéricos y se concatenan (ej: '24111985')
        const digitosStr = fecha.replace(/[^0-9]/g, ''); 
        
        if (digitosStr.length !== 8) return 'Tu Número'; // Asegura que sean 8 dígitos

        // Función auxiliar para reducir un número a un solo dígito o a un Número Maestro
        const reducir = (num) => {
             let resultado = num;
             // Se itera hasta que sea un dígito simple (1-9) o un Número Maestro (11, 22, 33)
             while (resultado > 9 && resultado !== 11 && resultado !== 22 && resultado !== 33) {
                // Suma los dígitos de la cadena del número
                resultado = String(resultado).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
             }
             return resultado;
        };

        // 2. Sumar todos los dígitos individuales (ej: 2+4+1+1+1+9+8+5 = 31)
        let sumaTotal = digitosStr.split('').reduce((acc, digit) => acc + parseInt(digit), 0);

        // 3. Reducir la suma total (ej: 31 -> 3+1 = 4)
        return reducir(sumaTotal);
    };


    // Estado para manejar la entrada y el resultado
    const [fechaNacimiento, setFechaNacimiento] = React.useState('');
    const [resultado, setResultado] = React.useState(null);
    // NUEVO ESTADO para controlar el modal
    const [mostrarModal, setMostrarModal] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const num = calcularNumero(fechaNacimiento);
        setResultado(num);
        setMostrarModal(false); 
    };
    
    // Función para obtener el significado y mostrar el modal
    const handleVerSignificado = () => {
        if (resultado) {
            setMostrarModal(true);
        }
    };
    
    // Obtener el objeto de significado para el modal
    const significadoActual = SIGNIFICADOS_NUMEROLOGIA[resultado] || SIGNIFICADOS_NUMEROLOGIA['Tu Número'];

    return (
        <section 
            id="numerologia" 
            className="py-16 md:py-24 bg-gray-800 text-white relative overflow-hidden"
        >
            {/* Fondo decorativo (círculos de energía numerológica) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="w-96 h-96 rounded-full bg-pink-500 blur-3xl absolute top-10 left-1/4 transform -translate-x-1/2"></div>
                <div className="w-80 h-80 rounded-full bg-purple-500 blur-3xl absolute bottom-10 right-1/4 transform translate-x-1/2"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                
                {/* Título de la Sección */}
                <div className="text-center mb-12">
                    <h2 
                        className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4"
                    >
                        El Secreto de la Numerología 🔢
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Cada número vibra con una energía única. Descubre tu **Número de Trayectoria de Vida** para entender tu verdadero propósito.
                    </p>
                </div>

                {/* Calculadora (Formulario) */}
                <div className="bg-gray-900/70 p-8 md:p-10 rounded-xl shadow-2xl border border-indigo-600/50 max-w-xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <label className="block text-gray-300 text-xl font-semibold mb-2">
                            Ingresa tu Fecha de Nacimiento
                        </label>
                        <input
                            type="text"
                            placeholder="DD/MM/AAAA (Ej: 24/11/1985)"
                            value={fechaNacimiento}
                            onChange={(e) => setFechaNacimiento(e.target.value)}
                            className="w-full px-5 py-3 border border-indigo-500/50 bg-gray-700/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200 placeholder-gray-400"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full px-6 py-3 text-lg font-bold rounded-lg bg-gradient-to-r from-pink-600 to-purple-700 text-white shadow-lg hover:opacity-95 transition duration-300 transform hover:scale-[1.01]"
                        >
                            Calcular mi Número
                        </button>
                    </form>
                    
                    {/* Resultado */}
                    {resultado && (
                        <div className="mt-8 pt-6 border-t border-indigo-600/50 text-center">
                            <p className="text-2xl text-gray-300 mb-2">Tu Número de Trayectoria de Vida es:</p>
                            <span 
                                className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 tracking-widest"
                            >
                                {resultado}
                            </span>
                            <p className="mt-4 text-xl text-pink-300">
                                Haz clic para leer el significado completo de tu número.
                            </p>
                            <button
                                className="mt-4 px-6 py-2 text-md font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition duration-200"
                                onClick={handleVerSignificado} // Llamar a la función que abre el modal
                            >
                                Ver Significado
                            </button>
                        </div>
                    )}
                </div>

                {/* Descripción y Contexto */}
                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-semibold text-purple-300 mb-4">¿Qué es el Número de Vida?</h3>
                    <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                        Es el número más importante en tu Carta Numerológica, determinado por tu fecha de nacimiento. Representa tus talentos innatos, los desafíos que enfrentarás y el camino de aprendizaje que viniste a recorrer en esta vida. Entender este número es el primer paso hacia el autoconocimiento.
                    </p>
                </div>

            </div>
            
            {/* Modal que se muestra condicionalmente */}
            {mostrarModal && resultado && (
                <ModalSignificado 
                    numero={resultado}
                    significado={significadoActual}
                    onClose={() => setMostrarModal(false)} // Función para cerrar el modal
                />
            )}
            
        </section>
    );
};

export default SeccionNumerologia;  