    import { useEffect, useState } from "react";
    import { useParams, useNavigate } from "react-router-dom";
    import { obtenerDetalleCocktail } from "../services/api";

    function DetalleComponent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        cargarDetalle();
    }, [id]);

    const cargarDetalle = async () => {
        const res = await obtenerDetalleCocktail(id);
        setCocktail(res.data.drinks[0]);
    };

    if (!cocktail) return <p>Cargando...</p>;

    return (
        <div style={{ padding: "20px" }}>
        <button onClick={() => navigate(-1)}>← Volver</button>
        <h2>{cocktail.strDrink}</h2>
        <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            width={250}
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
    );
    }

    export default DetalleComponent;