import { useEffect, useState } from "react";
import { obtenerCategorias, obtenerChistePorCategoria } from "../services/api";

function ChistePorCategoria() {
    const [categorias, setCategorias] = useState([]);
    const [chiste, setChiste] = useState("");
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
    cargarCategorias();
    }, []);

    const cargarCategorias = async () => {
    const res = await obtenerCategorias();
    setCategorias(res.data);
    };

    const seleccionarCategoria = async (categoria) => {
        setCargando(true);
        const valor = await obtenerChistePorCategoria(categoria);
        setChiste(valor);
        setCargando(false);
    };

    return (
        <div>
        <h2>Chiste por Categoría</h2>
        <ul>
            {categorias.map((cat) => (
            <li key={cat}>
                <button onClick={() => seleccionarCategoria(cat)}>{cat}</button>
            </li>
            ))}
        </ul>
        {cargando && <p>Cargando chiste...</p>}
        {chiste && !cargando && <p>{chiste}</p>}
        </div>
    );
}

export default ChistePorCategoria;