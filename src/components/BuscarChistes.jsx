import { useState } from "react";
import { buscarChistes } from "../services/api";

function BuscarChistes() {
    const [texto, setTexto] = useState("");
    const [resultados, setResultados] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const buscar = async () => {
    if (!texto.trim()) return;
    setCargando(true);
    setMensaje("");
    setResultados([]);

    const chistes = await buscarChistes(texto);

    if (chistes.length === 0) {
        setMensaje("No se encontraron resultados.");
    } else {
        setResultados(chistes);
    }

    setCargando(false);
    };

    return (
    <div>
        <h2>Buscar Chistes</h2>
        <input
            type="text"
            placeholder="Escribe una palabra..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            />  
        <button onClick={buscar} disabled={cargando}>
            Buscar
        </button>

        {cargando && <p>Buscando chistes...</p>}
        {mensaje && <p>{mensaje}</p>}

        <ul style={{ listStyle: "none", padding: 0 }}>
            {resultados.map((chiste) => (
            <li key={chiste.id} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <img src={chiste.icon_url} alt="Chuck Norris" width={40} height={40} />
                <span>{chiste.value}</span>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default BuscarChistes;