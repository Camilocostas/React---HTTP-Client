    import { useEffect, useState } from "react";
    import { useParams, useNavigate } from "react-router-dom";
    import { obtenerPersonajePorId } from "../services/api";

    function DetallePersonaje() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {
        cargarPersonaje();
    }, [id]);

    const cargarPersonaje = async () => {
        const res = await obtenerPersonajePorId(id);
        setPersonaje(res.data);
    };

    if (!personaje) return <p>Cargando...</p>;

    return (
        <div style={{ padding: "20px" }}>
        <button onClick={() => navigate(-1)}>← Volver</button>
        <h2>{personaje.name}</h2>
        <img
            src={personaje.image}
            alt={personaje.name}
            width={250}
            style={{ borderRadius: "10px" }}
        />
        <p><strong>Estado:</strong> {personaje.status}</p>
        <p><strong>Especie:</strong> {personaje.species}</p>
        <p><strong>Género:</strong> {personaje.gender}</p>
        <p><strong>Origen:</strong> {personaje.origin.name}</p>
        <p><strong>Ubicación:</strong> {personaje.location.name}</p>
        </div>
    );
    }

    export default DetallePersonaje;