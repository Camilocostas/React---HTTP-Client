    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { obtenerPersonajes } from "../services/api";

    function PersonajesTabla() {
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
        <h2>Tabla de Personajes</h2>
        {cargando && <p>Cargando personajes...</p>}

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
                <th style={estiloTh}>Nombre</th>
                <th style={estiloTh}>Especie</th>
                <th style={estiloTh}>Origen</th>
                <th style={estiloTh}>Ubicación</th>
            </tr>
            </thead>
            <tbody>
            {personajes.map((personaje) => (
                <tr
                key={personaje.id}
                onClick={() => navigate(`/personaje/${personaje.id}`)}
                style={{ cursor: "pointer" }}
                >
                <td style={estiloTd}>{personaje.name}</td>
                <td style={estiloTd}>{personaje.species}</td>
                <td style={estiloTd}>{personaje.origin.name}</td>
                <td style={estiloTd}>{personaje.location.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    }

    const estiloTh = {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left"
    };

    const estiloTd = {
    border: "1px solid #ccc",
    padding: "8px"
    };

    export default PersonajesTabla;