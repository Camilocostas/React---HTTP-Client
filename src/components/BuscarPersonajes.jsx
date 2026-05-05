    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { buscarPersonajesPorNombre } from "../services/api";

    function BuscarPersonajes() {
    const [nombre, setNombre] = useState("");
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const buscar = async () => {
        if (!nombre.trim()) return;
        setCargando(true);
        setMensaje("");
        setPersonajes([]);

        try {
        const res = await buscarPersonajesPorNombre(nombre);
        setPersonajes(res.data.results);
        } catch {
        setMensaje("No se encontraron personajes con ese nombre.");
        }

        setCargando(false);
    };

    return (
        <div>
        <h2>Buscar Personajes</h2>
        <input
            type="text"
            placeholder="Ej: Rick, Morty, Beth..."
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
        />
        <button onClick={buscar} disabled={cargando}>
            Buscar
        </button>

        {cargando && <p>Buscando personajes...</p>}
        {mensaje && <p>{mensaje}</p>}

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

    export default BuscarPersonajes;