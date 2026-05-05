    import { useEffect, useState } from "react";
    import { useParams, useNavigate } from "react-router-dom";
    import { obtenerDetalleEpisodio, obtenerPersonajesPorUrls } from "../services/api";

    function EpisodioDetalle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [episodio, setEpisodio] = useState(null);
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        cargarEpisodio();
    }, [id]);

    const cargarEpisodio = async () => {
        setCargando(true);
        const res = await obtenerDetalleEpisodio(id);
        setEpisodio(res.data);
        const personajesData = await obtenerPersonajesPorUrls(res.data.characters);
        setPersonajes(personajesData.map((r) => r.data));
        setCargando(false);
    };

    if (cargando) return <p>Cargando episodio...</p>;
    if (!episodio) return null;

    return (
        <div style={{ padding: "20px" }}>
        <button onClick={() => navigate(-1)}>← Volver</button>
        <h2>{episodio.name}</h2>
        <p><strong>Episodio:</strong> {episodio.episode}</p>
        <p><strong>Fecha de emisión:</strong> {episodio.air_date}</p>
        <h3>Personajes</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {personajes.map((personaje) => (
            <div
                key={personaje.id}
                onClick={() => navigate(`/personaje/${personaje.id}`)}
                style={{ textAlign: "center", width: "100px", cursor: "pointer" }}
            >
                <img
                src={personaje.image}
                alt={personaje.name}
                width={80}
                height={80}
                style={{ borderRadius: "8px" }}
                />
                <p style={{ fontSize: "11px" }}>{personaje.name}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default EpisodioDetalle;