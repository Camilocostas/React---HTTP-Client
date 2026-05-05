    import { useState } from "react";
    import { obtenerCocktailsPorTipo } from "../services/api";

    function CocktailsPorTipo() {
    const [tipo, setTipo] = useState("");
    const [cocktails, setCocktails] = useState([]);
    const [cargando, setCargando] = useState(false);

    const seleccionarTipo = async (e) => {
        const valor = e.target.value;
        setTipo(valor);
        if (!valor) return;
        setCargando(true);
        setCocktails([]);
        const res = await obtenerCocktailsPorTipo(valor);
        setCocktails(res.data.drinks);
        setCargando(false);
    };

    return (
        <div>
        <h2>Cócteles por Tipo</h2>
        <select value={tipo} onChange={seleccionarTipo}>
            <option value="">-- Selecciona un tipo --</option>
            <option value="Alcoholic">Alcoholic</option>
            <option value="Non_Alcoholic">Non Alcoholic</option>
            <option value="Optional_alcohol">Optional Alcohol</option>
        </select>

        {cargando && <p>Cargando cócteles...</p>}

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

    export default CocktailsPorTipo;