import { useState } from "react";
import { buscarCocktail } from "../services/api";

function BuscarCoctel() {
    const [texto, setTexto] = useState("");
    const [cocteles, setCocteles] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const buscar = async () => {
    if (!texto.trim()) return;
    setCargando(true);
    setMensaje("");
    setCocteles([]);

    const res = await buscarCoctelPorNombre(texto);

    if (!res.data.drinks) {
        setMensaje("No se encontraron cócteles.");
    } else {
        setCocteles(res.data.drinks);
    }

    setCargando(false);
    };

    const obtenerIngredientes = (coctel) => {
    const ingredientes = [];
    for (let i = 1; i <= 15; i++) {
        const ingrediente = coctel[`strIngredient${i}`];
        if (ingrediente) ingredientes.push(ingrediente);
    }
    return ingredientes;
    };

    return (
    <div>
        <h2>Buscar Cóctel</h2>
        <input
        type="text"
        placeholder="Nombre del cóctel..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={buscar} disabled={cargando}>
        Buscar
        </button>

        {cargando && <p>Buscando...</p>}
        {mensaje && <p>{mensaje}</p>}

        <div>
        {cocteles.map((coctel) => (
            <div key={coctel.idDrink} style={{ marginBottom: "20px" }}>
            <h3>{coctel.strDrink}</h3>
            <img src={coctel.strDrinkThumb} alt={coctel.strDrink} width={150} />
            <p>{coctel.strInstructions}</p>
            <strong>Ingredientes:</strong>
            <ul>
                {obtenerIngredientes(coctel).map((ing, index) => (
                <li key={index}>{ing}</li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    </div>
    );
}

export default BuscarCoctel;