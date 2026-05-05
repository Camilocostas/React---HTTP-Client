import { useEffect, useState } from "react";
import { obtenerChisteAleatorio } from "../services/api";

function ChisteAleatorio() {
    const [chiste, setChiste] = useState("");
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
    cargarChiste();
    }, []);

const cargarChiste = async () => {
    setCargando(true);
    const valor = await obtenerChisteAleatorio();
    setChiste(valor);
    setCargando(false);
};

    return (
    <div>
        <h2>Chiste de Chuck Norris</h2>
        {cargando ? <p>Cargando...</p> : <p>{chiste}</p>}
        <button onClick={cargarChiste} disabled={cargando}>
        Otro chiste
        </button>
    </div>
    );
}

export default ChisteAleatorio;