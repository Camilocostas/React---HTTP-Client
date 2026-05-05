    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { obtenerPersonajes } from "../services/api";

    function PersonajesLista() {
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        cargarPersonajes();
    }, []);

    const cargarPersonajes = async () => {
        setCargando(true);
        const res = await obtenerPersonajes();
        setPersonajes(res.data.results);
        setCargando(false);
    };

    return (
        <div>
        <h2>Personajes de Rick and Morty</h2>
        {cargando && <p>Cargando personajes...</p>}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px" }}>
            {personajes.map((personaje) => (
            <div
                key={personaje.id}
                onClick={() => navigate(`/personaje/${personaje.id}`)}
                style={{ textAlign: "center", width: "120px", cursor: "pointer" }}
            >
                <img
                src={personaje.image}
                alt={personaje.name}
                width={100}
                height={100}
                style={{ borderRadius: "8px" }}
                />
                <p style={{ fontSize: "12px" }}>{personaje.name}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default PersonajesLista;