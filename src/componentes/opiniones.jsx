import React, { useState, useEffect } from 'react';
// Se importan las funciones necesarias de Firebase Auth.
import { getAuth, onAuthStateChanged, updateProfile, signOut } from "firebase/auth"; 
import { Link, useNavigate } from 'react-router-dom';

// Datos de ejemplo iniciales (Ahora incluyen 'ownerId' para simular la pertenencia)
// NOTA: Estas reseñas tienen ownerId: 'default' y NO mostrarán los botones de edición para los usuarios autenticados.
// Los botones SÍ aparecerán en las reseñas que el usuario cree.
const opinionesTarotIniciales = [
    { id: 1, usuario: "Alma_Buscadora", puntuacion: 5, comentario: "El tarot es una herramienta sagrada de autoconocimiento.", fecha: "2024-09-15", ownerId: 'default' },
    { id: 2, usuario: "katshnn", puntuacion: 5, comentario: "Ame la pagina es muy interactiva y su lectura del tarot personalizada es muy buena ameeee", fecha: "2024-09-10", ownerId: 'default' },
    { id: 3, usuario: "jackie_23", puntuacion: 4, comentario: "La lectura fue muy precisa sobre mi situación actual. Me ayudó a tomar decisiones importantes.", fecha: "2024-09-20", ownerId: 'default' },
    { id: 4, usuario: "Neutro_Observador", puntuacion: 3, comentario: "Está bien, cumple con lo prometido pero no me sorprendió.", fecha: "2024-10-01", ownerId: 'default' },
];

// Componente StarRating (sin cambios, usa rosado y morado)
export const StarRating = ({ rating, size = 'w-5 h-5', onRatingChange, isEditable = false }) => {
    const totalStars = 5;
    
    // Función para manejar el clic y actualizar la puntuación
    const handleStarClick = (newRating) => {
        if (isEditable && onRatingChange) {
            onRatingChange(newRating);
        }
    };

    return (
        <div className="flex space-x-0.5">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                const isFilled = starValue <= rating;
                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleStarClick(starValue)}
                        disabled={!isEditable}
                        className={isEditable ? "hover:scale-110 transition duration-150" : ""}
                    >
                        <svg
                            className={`${size} ${isFilled ? 'text-pink-400' : 'text-purple-200'} ${isEditable ? 'cursor-pointer' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.691h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.042a1 1 0 00-1.175 0l-2.817 2.042c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.691l1.07-3.292z" />
                        </svg>
                    </button>
                );
            })}
        </div>
    );
};

// Componente de la Tarjeta de Opinión (Limpieza de diseño)
export const TarotReviewCard = ({ review, currentUser, onEdit, onDelete }) => {
    // Solo muestra los botones si el ID del usuario actual coincide con el ownerId de la reseña
    const isOwner = currentUser && currentUser.uid === review.ownerId;

    return (
        // Se añade 'relative' para que los botones con 'absolute' se posicionen respecto a esta tarjeta.
        <div className="bg-gray-800 p-6 pt-10 rounded-xl shadow-2xl transition duration-300 border-l-4 border-pink-500 hover:border-purple-500 flex flex-col justify-between relative">
            
            {/* Acciones de Edición/Eliminación: Posicionadas en la esquina superior derecha */}
            {isOwner && (
                <div className="absolute top-2 right-2 flex space-x-1">
                    <button
                        onClick={() => onEdit(review)}
                        title="Editar Reseña"
                        // Icono de Lápiz (Editar)
                        className="p-1 text-xs rounded-full text-purple-300 hover:bg-purple-900 transition"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM14 5l1 1-7 7-1-1 7-7z"></path><path d="M5 18a1 1 0 01-1-1v-4a1 1 0 112 0v4h4a1 1 0 110 2H5z"></path></svg>
                    </button>
                    <button
                        onClick={() => onDelete(review.id)}
                        title="Eliminar Reseña"
                        // Icono de Bote de Basura (Eliminar)
                        className="p-1 text-xs rounded-full text-red-300 hover:bg-red-900 transition"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            )}
            
            {/* Contenido de la reseña */}
            <div>
                <div className="flex justify-between items-start mb-3">
                    {/* Eliminado el max-w para que el texto fluya libremente */}
                    <p className="text-lg font-semibold text-pink-400">{review.usuario || 'Anónimo'}</p> 
                    <p className="text-sm text-gray-400 hidden sm:block">{review.fecha}</p>
                </div>
                
                <div className="mb-4">
                    <StarRating rating={review.puntuacion} />
                </div>
                
                <p className="text-gray-200 italic pl-3 mb-4 text-sm"> 
                    "{review.comentario}"
                </p>
            </div>
        </div>
    );
};

// --- MODAL DE EDICIÓN DE PERFIL (Mantenido) ---
const EditProfileModal = ({ isOpen, onClose, user, onUpdate }) => {
    const [newDisplayName, setNewDisplayName] = useState(user?.displayName || '');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleUpdate = async () => {
        if (!newDisplayName.trim()) {
            setError("El nombre no puede estar vacío.");
            return;
        }
        setLoading(true);
        setError('');
        await onUpdate(newDisplayName.trim());
        setLoading(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-sm border-t-4 border-purple-600 space-y-4">
                <h3 className="text-2xl font-bold text-pink-400">Editar Nombre de Usuario</h3>
                
                {error && <p className="text-sm text-red-400">{error}</p>}

                <input
                    type="text"
                    value={newDisplayName}
                    onChange={(e) => setNewDisplayName(e.target.value)}
                    placeholder="Nuevo Nombre"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-purple-500"
                    disabled={loading}
                />
                
                <div className="flex justify-end space-x-3 mt-4">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 text-sm font-semibold text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
                        disabled={loading}
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={handleUpdate} 
                        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg hover:opacity-90 transition"
                        disabled={loading}
                    >
                        {loading ? 'Actualizando...' : 'Guardar Cambios'}
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- MODAL DE EDICIÓN DE RESEÑA (Mantenido) ---
const EditReviewModal = ({ isOpen, review, onClose, onSave }) => {
    const [editText, setEditText] = useState(review?.comentario || '');
    const [editRating, setEditRating] = useState(review?.puntuacion || 5);
    const [error, setError] = useState('');

    useEffect(() => {
        // Sincronizar estado cuando la reseña a editar cambie
        setEditText(review?.comentario || '');
        setEditRating(review?.puntuacion || 5);
        setError('');
    }, [review]);

    const handleSave = () => {
        if (editText.length < 10) {
            setError("Tu reseña debe tener al menos 10 caracteres.");
            return;
        }
        if (review) {
            onSave(review.id, editText, editRating);
            onClose();
        }
    };

    if (!isOpen || !review) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-lg border-t-4 border-pink-600 space-y-4">
                <h3 className="text-2xl font-bold text-purple-400">Editando Reseña de {review.usuario}</h3>
                
                {error && <p className="text-sm text-red-400">{error}</p>}

                <div className="flex items-center space-x-3">
                    <label className="text-gray-400">Puntuación:</label>
                    <StarRating rating={editRating} size="w-7 h-7" isEditable={true} onRatingChange={setEditRating} />
                </div>
                
                <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder="Edita tu opinión aquí..."
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-pink-500 transition duration-200"
                    required
                ></textarea>
                
                <div className="flex justify-end space-x-3 mt-4">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 text-sm font-semibold text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={handleSave} 
                        className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg hover:opacity-90 transition"
                    >
                        Guardar Edición
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- MODAL DE CONFIRMACIÓN DE ELIMINACIÓN (Mantenido) ---
const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, reviewId }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-gray-900 p-8 rounded-xl shadow-2xl w-full max-w-sm border-t-4 border-red-600 space-y-6">
                <h3 className="text-2xl font-bold text-red-400">⚠️ Confirmar Eliminación</h3>
                <p className="text-gray-300">
                    ¿Estás absolutamente seguro de que deseas eliminar esta reseña? Esta acción no se puede deshacer.
                </p>
                
                <div className="flex justify-end space-x-3">
                    <button 
                        onClick={onClose} 
                        className="px-4 py-2 text-sm font-semibold text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
                    >
                        Cancelar
                    </button>
                    <button 
                        onClick={() => { onConfirm(reviewId); onClose(); }} 
                        className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
                    >
                        Eliminar Reseña
                    </button>
                </div>
            </div>
        </div>
    );
};


// ----------------------------------------------------------------------
// Componente Principal del Dashboard
// ----------------------------------------------------------------------

export default function TarotReviewDashboard({ initialReviews = opinionesTarotIniciales }) {
    // Se inicializa Firebase Auth
    const auth = getAuth();
    const navigate = useNavigate();
    const [reviews, setReviews] = useState(initialReviews);
    const [currentUser, setCurrentUser] = useState(null);
    
    // Estados para la edición de perfil
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    
    // Estados para la publicación de reseña
    const [newReviewText, setNewReviewText] = useState('');
    const [newReviewRating, setNewReviewRating] = useState(5);
    const [reviewError, setReviewError] = useState('');

    // Estados para la edición de reseña
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [reviewToEdit, setReviewToEdit] = useState(null);

    // Estados para la confirmación de eliminación
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [reviewIdToDelete, setReviewIdToDelete] = useState(null);


    // 1. Manejo del estado de autenticación (Reconocer usuario logueado)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, [auth]);

    // 2. Funcionalidad de Edición de Perfil
    const handleUpdateProfile = async (newDisplayName) => {
        if (!currentUser) return;

        try {
            await updateProfile(currentUser, { displayName: newDisplayName });
            // Recargar el usuario para que el componente se actualice
            setCurrentUser({ ...currentUser, displayName: newDisplayName }); 
        } catch (error) {
            console.error("Error al actualizar el perfil:", error);
        }
    };
    
    // 3. Funcionalidad de Publicar Reseña
    const handlePostReview = (e) => {
        e.preventDefault();
        setReviewError('');

        if (!currentUser) {
            setReviewError("Debes iniciar sesión para publicar una reseña.");
            return;
        }

        if (newReviewText.length < 10) {
            setReviewError("Tu reseña debe tener al menos 10 caracteres.");
            return;
        }
        
        const newReview = {
            id: Date.now(), // Usamos timestamp como ID temporal
            ownerId: currentUser.uid, // ¡Clave para la pertenencia!
            usuario: currentUser.displayName || currentUser.email.split('@')[0],
            puntuacion: newReviewRating,
            comentario: newReviewText,
            fecha: new Date().toISOString().split('T')[0],
        };
        
        // Simulación: actualizamos el estado local. En Firebase, usarías addDoc.
        setReviews([newReview, ...reviews]); 
        setNewReviewText('');
        setNewReviewRating(5);
    };

    // 4. Funcionalidad de Eliminación de Reseña
    const handleDeleteReviewStart = (reviewId) => {
        setReviewIdToDelete(reviewId);
        setIsConfirmModalOpen(true);
    }

    const handleDeleteReviewConfirm = (reviewId) => {
        // Simulación: filtramos el estado local. En Firebase, usarías deleteDoc.
        setReviews(reviews.filter(r => r.id !== reviewId));
        setReviewIdToDelete(null);
    };

    // 5. Funcionalidad de Edición de Reseña
    const handleEditStart = (review) => {
        setReviewToEdit(review);
        setIsReviewModalOpen(true);
    };

    const handleEditSave = (reviewId, newComment, newRating) => {
        // Simulación: actualizamos el estado local. En Firebase, usarías updateDoc.
        setReviews(reviews.map(r => 
            r.id === reviewId ? { ...r, comentario: newComment, puntuacion: newRating, fecha: new Date().toISOString().split('T')[0] } : r
        ));
        setReviewToEdit(null);
        setIsReviewModalOpen(false);
    };


    // Cálculo del promedio y totales
    const totalPuntuaciones = reviews.reduce((sum, review) => sum + review.puntuacion, 0);
    const promedio = (reviews.length > 0 ? (totalPuntuaciones / reviews.length) : 0).toFixed(1);
    const positivas = reviews.filter(r => r.puntuacion >= 4).length; // 4 y 5 estrellas
    const neutras = reviews.filter(r => r.puntuacion === 3).length; // 3 estrellas
    const negativas = reviews.filter(r => r.puntuacion <= 2).length; // 1 y 2 estrellas
    
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
            {/* Modales */}
            <EditProfileModal 
                isOpen={isProfileModalOpen} 
                onClose={() => setIsProfileModalOpen(false)} 
                user={currentUser} 
                onUpdate={handleUpdateProfile} 
            />
            {reviewToEdit && (
                <EditReviewModal 
                    isOpen={isReviewModalOpen} 
                    review={reviewToEdit} 
                    onClose={() => setIsReviewModalOpen(false)} 
                    onSave={handleEditSave}
                />
            )}
            <ConfirmDeleteModal
                isOpen={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                onConfirm={handleDeleteReviewConfirm}
                reviewId={reviewIdToDelete}
            />


            {/* --- SECCIÓN DE BIENVENIDA Y ACCIONES DEL USUARIO --- */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl mb-10 border-l-4 border-pink-500">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                    ¡Hola, {currentUser?.displayName || currentUser?.email || 'Viajero Cósmico'}!
                </h2>
                <p className="text-gray-400 mb-4">
                    Administra tu perfil y publica tu testimonio sobre el tarot.
                </p>
                <div className="flex flex-wrap gap-3">
                    {currentUser ? (
                        <>
                            <button 
                                onClick={() => setIsProfileModalOpen(true)}
                                className="px-4 py-2 text-sm font-semibold rounded-full bg-purple-600 hover:bg-purple-700 transition duration-200"
                            >
                                ✏️ Editar Mi Nombre
                            </button>
                            <button 
                                onClick={handleLogout}
                                className="px-4 py-2 text-sm font-semibold rounded-full bg-pink-600 hover:bg-pink-700 transition duration-200"
                            >
                                🚪 Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link 
                            to="/login"
                            className="px-4 py-2 text-sm font-semibold rounded-full bg-pink-600 hover:bg-pink-700 transition duration-200"
                        >
                            Inicia Sesión para participar
                        </Link>
                    )}
                </div>
            </div>
            
            <hr className="border-gray-700 my-8"/>

            {/* --- SECCIÓN DE PUBLICAR NUEVA RESEÑA --- */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl mb-10 border-l-4 border-purple-500">
                <h2 className="text-2xl font-bold text-purple-400 mb-4">Comparte Tu Experiencia ✍️</h2>
                
                {currentUser ? (
                    <form onSubmit={handlePostReview} className="space-y-4">
                        
                        <div className="flex items-center space-x-3">
                            <label className="text-gray-400">Puntuación:</label>
                            <StarRating 
                                rating={newReviewRating} 
                                size="w-7 h-7" 
                                isEditable={true} 
                                onRatingChange={setNewReviewRating} 
                            />
                        </div>

                        {reviewError && <p className="text-sm text-red-400">{reviewError}</p>}

                        <textarea
                            value={newReviewText}
                            onChange={(e) => setNewReviewText(e.target.value)}
                            placeholder="Escribe tu opinión sincera aquí..."
                            rows="4"
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-pink-500 transition duration-200"
                            required
                        ></textarea>
                        
                        <button 
                            type="submit"
                            className="w-full py-2 font-bold text-white rounded-lg bg-gradient-to-r from-pink-600 to-purple-700 hover:opacity-90 transition duration-200"
                        >
                            Publicar Reseña
                        </button>
                    </form>
                ) : (
                    <p className="text-gray-400">
                        Inicia sesión para poder publicar tu propia reseña.
                    </p>
                )}
            </div>

            <hr className="border-gray-700 my-8"/>

            {/* --- SECCIÓN DE RESUMEN GLOBAL --- */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl mb-10 border-l-4 border-pink-500">
                <h2 className="text-2xl font-bold mb-4 text-pink-400">Resumen Global</h2>
                <div className="flex justify-around items-center text-center flex-wrap gap-6">
                    <div>
                        <p className="text-5xl font-extrabold text-purple-300">{promedio}</p>
                        <p className="text-gray-400">Puntuación Promedio (de 5)</p>
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold text-pink-300">{reviews.length}</p>
                        <p className="text-gray-400">Total de Opiniones</p>
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold text-green-400">{positivas}</p>
                        <p className="text-gray-400">Positivas (4-5 ⭐)</p>
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold text-yellow-400">{neutras}</p>
                        <p className="text-gray-400">Neutras (3 ⭐)</p>
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold text-red-400">{negativas}</p>
                        <p className="text-gray-400">Negativas (1-2 ⭐)</p>
                    </div>
                </div>
            </div>
            
            {/* --- SECCIÓN DE LISTADO DE OPINIONES --- */}
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Testimonios del Cosmos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map(review => (
                    <TarotReviewCard 
                        key={review.id} 
                        review={review} 
                        currentUser={currentUser}
                        onEdit={handleEditStart}
                        onDelete={handleDeleteReviewStart}
                    />
                ))}
            </div>
        </div>
    );
}