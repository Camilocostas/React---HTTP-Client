    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { filtrarPersonajes } from "../services/api";

    function FiltrarPersonajes() {
    const [estado, setEstado] = useState("");
    const [genero, setGenero] = useState("");
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    const filtrar = async () => {
        setCargando(true);
        setMensaje("");
        setPersonajes([]);

        try {
        const res = await filtrarPersonajes(estado, genero);
        setPersonajes(res.data.results);
        } catch {
        setMensaje("No se encontraron personajes con esos filtros.");
        }

        setCargando(false);
    };

    return (
        <div>
        <h2>Filtrar Personajes</h2>

        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="">-- Estado --</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
        </select>

        <select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            style={{ marginLeft: "10px" }}
        >
            <option value="">-- Género --</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="genderless">Sin género</option>
            <option value="unknown">Desconocido</option>
        </select>

        <button onClick={filtrar} disabled={cargando} style={{ marginLeft: "10px" }}>
            Filtrar
        </button>

        {cargando && <p>Cargando personajes...</p>}
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

    export default FiltrarPersonajes;