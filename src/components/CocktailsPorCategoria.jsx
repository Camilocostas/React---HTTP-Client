    import { useEffect, useState } from "react";
    import {
    obtenerCategoriasCocktail,
    obtenerCocktailsPorCategoria,
    obtenerDetalleCocktail
    } from "../services/api";

    function CocktailsPorCategoria() {
    const [categorias, setCategorias] = useState([]);
    const [cocktails, setCocktails] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [detalle, setDetalle] = useState(null);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        cargarCategorias();
    }, []);

    const cargarCategorias = async () => {
        const res = await obtenerCategoriasCocktail();
        setCategorias(res.data.drinks);
    };

    const seleccionarCategoria = async (e) => {
        const categoria = e.target.value;
        setCategoriaSeleccionada(categoria);
        setDetalle(null);
        if (!categoria) return;
        setCargando(true);
        const res = await obtenerCocktailsPorCategoria(categoria);
        setCocktails(res.data.drinks);
        setCargando(false);
    };

    const verDetalle = async (id) => {
        const res = await obtenerDetalleCocktail(id);
        setDetalle(res.data.drinks[0]);
    };

    return (
        <div>
        <h2>Cócteles por Categoría</h2>
        <select value={categoriaSeleccionada} onChange={seleccionarCategoria}>
            <option value="">-- Selecciona una categoría --</option>
            {categorias.map((cat) => (
            <option key={cat.strCategory} value={cat.strCategory}>
                {cat.strCategory}
            </option>
            ))}
        </select>

        {cargando && <p>Cargando cócteles...</p>}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px" }}>
            {cocktails.map((cocktail) => (
            <div
                key={cocktail.idDrink}
                onClick={() => verDetalle(cocktail.idDrink)}
                style={{ textAlign: "center", width: "120px", cursor: "pointer" }}
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

        {detalle && (
            <div style={{ marginTop: "20px", borderTop: "1px solid #ccc", paddingTop: "15px" }}>
            <h3>{detalle.strDrink}</h3>
            <img
                src={detalle.strDrinkThumb}
                alt={detalle.strDrink}
                width={200}
                style={{ borderRadius: "10px" }}
            />
            <p><strong>Categoría:</strong> {detalle.strCategory}</p>
            <p><strong>Tipo:</strong> {detalle.strAlcoholic}</p>
            <p><strong>Instrucciones:</strong> {detalle.strInstructions}</p>
            <p><strong>Ingredientes:</strong></p>
            <ul>
                {[...Array(15)].map((_, i) => {
                const ingrediente = detalle[`strIngredient${i + 1}`];
                const medida = detalle[`strMeasure${i + 1}`];
                return ingrediente ? (
                    <li key={i}>{medida} {ingrediente}</li>
                ) : null;
                })}
            </ul>
            <button onClick={() => setDetalle(null)}>Cerrar</button>
            </div>
        )}
        </div>
    );
    }

    export default CocktailsPorCategoria;