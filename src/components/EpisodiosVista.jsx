    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { obtenerEpisodios } from "../services/api";

    function EpisodiosVista() {
    const [episodios, setEpisodios] = useState([]);
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        cargarEpisodios();
    }, []);

    const cargarEpisodios = async () => {
        setCargando(true);
        const res = await obtenerEpisodios();
        setEpisodios(res.data.results);
        setCargando(false);
    };

    return (
        <div style={{ padding: "20px" }}>
        <button onClick={() => navigate(-1)}>← Volver</button>
        <h2>Episodios de Rick and Morty</h2>
        {cargando && <p>Cargando episodios...</p>}
        <ul>
            {episodios.map((episodio) => (
            <li
                key={episodio.id}
                onClick={() => navigate(`/episodios/${episodio.id}`)}
                style={{ cursor: "pointer", marginBottom: "8px" }}
            >
                <strong>{episodio.episode}</strong> — {episodio.name}
            </li>
            ))}
        </ul>
        </div>
    );
    }

    export default EpisodiosVista;