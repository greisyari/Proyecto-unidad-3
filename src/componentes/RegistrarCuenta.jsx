import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

function RegistrarCuenta() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    
    const navigate = useNavigate();

    // Función para crear un usuario
    const registrar = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        setErrorMessage("");
        setSuccessMessage("");
        
        if (password !== confirmPassword) {
            setErrorMessage("Las contraseñas no coinciden. Inténtalo de nuevo.");
            return;
        }

        if (password.length < 6) {
            setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        // Asumiendo que getAuth() ya está inicializado con tu app de Firebase.
        const auth = getAuth();
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSuccessMessage("🎉 ¡Cuenta creada con éxito! Serás redirigido para iniciar sesión.");
                console.log("Usuario registrado");
                // Redirigir al usuario después de un breve momento
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.error("Error al crear tu cuenta:", error);

                let message = "Error al registrar la cuenta. Por favor, inténtalo de nuevo.";
                if (errorCode === 'auth/email-already-in-use') {
                    message = "Este correo ya está registrado. Intenta iniciar sesión.";
                } else if (errorCode === 'auth/invalid-email') {
                    message = "El formato del correo electrónico es inválido.";
                }
                setErrorMessage(message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4 font-sans">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl border-t-4 border-purple-600 transform hover:shadow-purple-900/50 transition duration-500">
                
                <h3 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                    Crea Tu Portal Cósmico 🔑
                </h3>

                {/* Mensaje de Error */}
                {errorMessage && (
                    <div className="p-3 text-sm text-pink-200 bg-pink-700/30 border border-pink-500 rounded-lg text-center shadow-md">
                        {errorMessage}
                    </div>
                )}
                
                {/* Mensaje de Éxito */}
                {successMessage && (
                    <div className="p-3 text-sm text-green-200 bg-green-700/30 border border-green-500 rounded-lg text-center shadow-md">
                        {successMessage}
                    </div>
                )}

                <form className="space-y-4" onSubmit={registrar}>
                    
                    {/* Campo de Email */}
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="tu.portal@cosmico.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                        />
                    </div>

                    {/* Campo de Contraseña */}
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                            Contraseña (Mínimo 6 caracteres)
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Elige tu clave estelar"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength="6"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                        />
                    </div>

                    {/* Campo de Confirmar Contraseña */}
                    <div className="relative">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Repite la clave estelar"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            minLength="6"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                        />
                    </div>
                    
                    {/* Botón de Registro */}
                    <button 
                        type='submit'
                        className="w-full py-3 rounded-xl font-bold text-white shadow-lg transition duration-300 transform hover:scale-[1.01] active:scale-100 
                                   bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-800 hover:to-pink-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                    >
                        ✨ Registrar Cuenta
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-400">
                    ¿Ya eres un viajero cósmico? 
                    <Link 
                    to="/iniciar" 
                    className="font-medium text-purple-400 hover:text-purple-300 ml-1 transition duration-200">
                        Inicia sesión aquí.
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default RegistrarCuenta;