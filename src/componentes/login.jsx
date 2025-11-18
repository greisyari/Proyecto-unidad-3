import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';

// Instancia global del proveedor de Google
const provider = new GoogleAuthProvider();

function LoginUsuario() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Estado para manejar errores y mensajes al usuario
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();

    // Función para manejar el inicio de sesión con Email y Contraseña
    function iniciarSesion() {
        setErrorMessage(""); // Limpiar errores previos
        
        // La configuración de Firebase (firebaseConfig) debe ser accesible aquí o inicializada previamente.
        // Asumiendo que getAuth() ya está inicializado con tu app de Firebase.
        const auth = getAuth(); 
        
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("Inicio de sesión exitoso");
            navigate("/"); // Redirigir a la página principal
        })
        .catch((error) => {
            console.error("Error al iniciar sesión:", error);
            // Mostrar un mensaje de error legible para el usuario
            let message = "Error al iniciar sesión. Verifica tu email y contraseña.";
            if (error.code === 'auth/user-not-found') {
                message = "El usuario no existe.";
            } else if (error.code === 'auth/wrong-password') {
                message = "Contraseña incorrecta.";
            }
            setErrorMessage(message);
        });
    } 

    // Función para manejar el inicio de sesión con Google
    function iniciarGoogle() {
        setErrorMessage(""); // Limpiar errores previos
        const auth = getAuth();
        
        signInWithPopup(auth, provider)
        .then(() => {
            console.log("Inicio de sesión con Google exitoso");
            navigate("/"); // Redirigir a la página principal
        }).catch((error) => {
            console.error("Error al iniciar sesión con Google:", error);
            // Mostrar un mensaje de error legible para el usuario
            setErrorMessage("Error al iniciar sesión con Google. Inténtalo de nuevo.");
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 font-sans">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl border-t-4 border-pink-600 transform hover:shadow-pink-900/50 transition duration-500">
                
                <h3 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                    Bienvenido, Explorador 🚪
                </h3>

                {/* Mostrar mensaje de error si existe */}
                {errorMessage && (
                    <div className="p-3 text-sm text-pink-200 bg-pink-700/30 border border-pink-500 rounded-lg text-center shadow-md">
                        {errorMessage}
                    </div>
                )}

                <div className="space-y-4">
                    
                    {/* Campo de Email */}
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            Correo Electrónico
                        </label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="tu.destino@cosmico.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
                        />
                    </div>

                    {/* Campo de Contraseña */}
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                            Contraseña
                        </label>
                        <input 
                            id="password"
                            type="password" // Corregido de 'pasword' a 'password'
                            placeholder="Contraseña secreta" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
                        />
                    </div>
                </div>

                {/* Botón de Inicio de Sesión (Email/Password) */}
                <button 
                    onClick={iniciarSesion}
                    className="w-full py-3 rounded-xl font-bold text-white shadow-lg transition duration-300 transform hover:scale-[1.01] active:scale-100 
                               bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
                >
                    🌌 Iniciar Sesión 
                </button>

                {/* Separador */}
                <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-700"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-sm">O</span>
                    <div className="flex-grow border-t border-gray-700"></div>
                </div>

                {/* Botón de Inicio de Sesión con Google */}
                <button 
                    onClick={iniciarGoogle}
                    className="w-full py-3 rounded-xl font-semibold text-gray-100 border border-gray-600 bg-gray-700/50 shadow-md hover:bg-gray-700 transition duration-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                >
                    {/* Icono de Google (SVG simple para un look limpio) */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0001 4.75C14.0001 4.75 15.6181 5.438 16.8901 6.643L19.5051 3.999C17.7561 2.375 15.0001 1.5 12.0001 1.5C7.27211 1.5 3.19711 3.974 1.25011 7.422L4.54211 9.967C5.46711 7.214 8.48711 4.75 12.0001 4.75Z" fill="#EA4335"/>
                        <path d="M23.25 12.0001C23.25 11.1001 23.181 10.2561 23.007 9.47911H12V13.5001H18.665C18.375 15.1561 17.49 16.5141 16.273 17.3871L19.505 19.9631C21.782 17.9571 23.25 15.1111 23.25 12.0001Z" fill="#4285F4"/>
                        <path d="M6.642 16.891L3.349 19.435C5.297 22.883 9.373 25.358 14.101 25.358C17.042 25.358 19.704 24.367 21.611 22.793L18.878 20.252C17.306 21.36 15.093 22.067 12.355 22.067C8.944 22.067 6.009 19.742 4.962 16.891H6.642Z" fill="#FBBC05"/>
                        <path d="M1.25 7.42197L4.542 9.96697C4.168 11.054 3.975 12.0001 3.975 13.5001C3.975 14.8811 4.249 16.2001 4.747 17.3871L1.25 20.2451C0.292 18.2321 0 15.8641 0 13.5001C0 10.7411 0.707 8.52897 1.25 7.42197Z" fill="#0F9D58"/>
                    </svg>
                    <span>Ingresa con Google</span>
                </button>

                <p className="mt-6 text-center text-sm text-gray-400">
                    ¿Aún no tienes cuenta? 
                    <Link 
                    to="/registrarse" 
                    className="font-medium text-pink-400 hover:text-pink-300 ml-1 transition duration-200">
                        Regístrate aquí.
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginUsuario;