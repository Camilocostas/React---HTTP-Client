    import { useState } from "react";
    import { obtenerCocktailsPorIngrediente } from "../services/api";

    function CocktailsPorIngrediente() {
    const [ingrediente, setIngrediente] = useState("");
    const [cocktails, setCocktails] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const buscar = async () => {
        if (!ingrediente.trim()) return;
        setCargando(true);
        setMensaje("");
        setCocktails([]);

        try {
        const res = await obtenerCocktailsPorIngrediente(ingrediente);
        if (res.data.drinks) {
            setCocktails(res.data.drinks);
        } else {
            setMensaje("No se encontraron cócteles con ese ingrediente.");
        }
        } catch {
        setMensaje("No se encontraron cócteles con ese ingrediente.");
        }

        setCargando(false);
    };

    return (
        <div>
        <h2>Cócteles por Ingrediente</h2>
        <input
            type="text"
            placeholder="Ej: Gin, Vodka, Rum..."
            value={ingrediente}
            onChange={(e) => setIngrediente(e.target.value)}
        />
        <button onClick={buscar} disabled={cargando}>
            Buscar
        </button>

        {cargando && <p>Buscando cócteles...</p>}
        {mensaje && <p>{mensaje}</p>}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px" }}>
            {cocktails.map((cocktail) => (
            <div
                key={cocktail.idDrink}
                style={{ textAlign: "center", width: "120px" }}
            >
                <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                width={100}
                height={100}
                style={{ borderRadius: "8px" }}
                />
                <p style={{ fontSize: "12px" }}>{cocktail.strDrink}</p>
            </div>
            ))}
        </div>
        </div>
    );
    }

    export default CocktailsPorIngrediente;