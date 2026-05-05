    import { useEffect, useState } from "react";
    import { obtenerEpisodios, obtenerPersonajesPorUrls } from "../services/api";

    function EpisodiosLista() {
    const [episodios, setEpisodios] = useState([]);
    const [personajesEpisodio, setPersonajesEpisodio] = useState([]);
    const [episodioSeleccionado, setEpisodioSeleccionado] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [cargandoPersonajes, setCargandoPersonajes] = useState(false);

    useEffect(() => {
        cargarEpisodios();
    }, []);

    const cargarEpisodios = async () => {
        setCargando(true);
        const res = await obtenerEpisodios();
        setEpisodios(res.data.results);
        setCargando(false);
    };

    const verPersonajes = async (episodio) => {
        setEpisodioSeleccionado(episodio);
        setPersonajesEpisodio([]);
        setCargandoPersonajes(true);
        const resultados = await obtenerPersonajesPorUrls(episodio.characters);
        setPersonajesEpisodio(resultados.map((r) => r.data));
        setCargandoPersonajes(false);
    };

    return (
        <div>
        <h2>Episodios de Rick and Morty</h2>
        {cargando && <p>Cargando episodios...</p>}

        <ul>
            {episodios.map((episodio) => (
            <li key={episodio.id} style={{ marginBottom: "8px" }}>
                <strong>{episodio.episode}</strong> — {episodio.name}
                <button
                onClick={() => verPersonajes(episodio)}
                style={{ marginLeft: "10px" }}
                >
                Ver personajes
                </button>
            </li>
            ))}
        </ul>

        {episodioSeleccionado && (
            <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "15px" }}>
            <h3>
                Personajes en {episodioSeleccionado.episode} — {episodioSeleccionado.name}
            </h3>
            {cargandoPersonajes && <p>Cargando personajes...</p>}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px" }}>
                {personajesEpisodio.map((personaje) => (
                <div
                    key={personaje.id}
                    style={{ textAlign: "center", width: "100px" }}
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
            <button onClick={() => setEpisodioSeleccionado(null)}>
                Cerrar
            </button>
            </div>
        )}
        </div>
    );
    }

    export default EpisodiosLista;