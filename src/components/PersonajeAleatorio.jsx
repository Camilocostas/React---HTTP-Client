    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { obtenerPersonajeAleatorio } from "../services/api";

    function PersonajeAleatorio() {
    const [personaje, setPersonaje] = useState(null);
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();

    const cargar = async () => {
        setCargando(true);
        const res = await obtenerPersonajeAleatorio();
        setPersonaje(res.data);
        setCargando(false);
    };

    return (
        <div>
        <h2>Personaje Aleatorio</h2>
        <button onClick={cargar} disabled={cargando}>
            Sorpresa
        </button>

        {cargando && <p>Cargando personaje...</p>}

        {personaje && !cargando && (
            <div style={{ marginTop: "15px" }}>
            <img
                src={personaje.image}
                alt={personaje.name}
                width={200}
                style={{ borderRadius: "10px" }}
            />
            <h3>{personaje.name}</h3>
            <p><strong>Estado:</strong> {personaje.status}</p>
            <p><strong>Especie:</strong> {personaje.species}</p>
            <p><strong>Género:</strong> {personaje.gender}</p>
            <p><strong>Origen:</strong> {personaje.origin.name}</p>
            <p><strong>Ubicación:</strong> {personaje.location.name}</p>
            <button onClick={() => navigate(`/personaje/${personaje.id}`)}>
                Ver detalle completo
            </button>
            </div>
        )}
        </div>
    );
    }

    export default PersonajeAleatorio;