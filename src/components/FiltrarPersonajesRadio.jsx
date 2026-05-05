    import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { filtrarPersonajes } from "../services/api";

    function FiltrarPersonajesRadio() {
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

    const estiloGrupo = {
        display: "flex",
        gap: "15px",
        marginBottom: "10px"
    };

    return (
        <div>
        <h2>Filtrar Personajes (Radio)</h2>

        <p><strong>Estado:</strong></p>
        <div style={estiloGrupo}>
            {["alive", "dead", "unknown"].map((op) => (
            <label key={op}>
                <input
                type="radio"
                name="estado"
                value={op}
                checked={estado === op}
                onChange={(e) => setEstado(e.target.value)}
                />
                {" "}
                {op === "alive" ? "Vivo" : op === "dead" ? "Muerto" : "Desconocido"}
            </label>
            ))}
            <label>
            <input
                type="radio"
                name="estado"
                value=""
                checked={estado === ""}
                onChange={() => setEstado("")}
            />
            {" "} Todos
            </label>
        </div>

        <p><strong>Género:</strong></p>
        <div style={estiloGrupo}>
            {["male", "female", "genderless", "unknown"].map((op) => (
            <label key={op}>
                <input
                type="radio"
                name="genero"
                value={op}
                checked={genero === op}
                onChange={(e) => setGenero(e.target.value)}
                />
                {" "}
                {op === "male"
                ? "Masculino"
                : op === "female"
                ? "Femenino"
                : op === "genderless"
                ? "Sin género"
                : "Desconocido"}
            </label>
            ))}
            <label>
            <input
                type="radio"
                name="genero"
                value=""
                checked={genero === ""}
                onChange={() => setGenero("")}
            />
            {" "} Todos
            </label>
        </div>

        <button onClick={filtrar} disabled={cargando}>
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

    export default FiltrarPersonajesRadio;