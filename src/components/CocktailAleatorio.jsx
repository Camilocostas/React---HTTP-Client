    import { useState } from "react";
    import { obtenerCocktailAleatorio } from "../services/api";

    function CocktailAleatorio() {
    const [cocktail, setCocktail] = useState(null);
    const [cargando, setCargando] = useState(false);

    const cargar = async () => {
        setCargando(true);
        const res = await obtenerCocktailAleatorio();
        setCocktail(res.data.drinks[0]);
        setCargando(false);
    };

    return (
        <div>
        <h2>Cóctel Sorpresa</h2>
        <button onClick={cargar} disabled={cargando}>
            Sorpresa
        </button>

        {cargando && <p>Cargando...</p>}

        {cocktail && !cargando && (
            <div style={{ marginTop: "15px" }}>
            <h3>{cocktail.strDrink}</h3>
            <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                width={200}
                style={{ borderRadius: "10px" }}
            />
            <p><strong>Categoría:</strong> {cocktail.strCategory}</p>
            <p><strong>Tipo:</strong> {cocktail.strAlcoholic}</p>
            <p><strong>Instrucciones:</strong> {cocktail.strInstructions}</p>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                {[...Array(15)].map((_, i) => {
                const ingrediente = cocktail[`strIngredient${i + 1}`];
                const medida = cocktail[`strMeasure${i + 1}`];
                return ingrediente ? (
                    <li key={i}>{medida} {ingrediente}</li>
                ) : null;
                })}
            </ul>
            </div>
        )}
        </div>
    );
    }

    export default CocktailAleatorio;