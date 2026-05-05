    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { obtenerCocktailsPorCategoria } from "../services/api";

    function ListadoComponent() {
    const [cocktails, setCocktails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        cargarCocktails();
    }, []);

    const cargarCocktails = async () => {
        const res = await obtenerCocktailsPorCategoria("Cocktail");
        setCocktails(res.data.drinks);
    };

    return (
        <div>
        <h2>Listado de Cócteles</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            {cocktails.map((cocktail) => (
            <div
                key={cocktail.idDrink}
                onClick={() => navigate(`/detalle/${cocktail.idDrink}`)}
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
        </div>
    );
    }

    export default ListadoComponent;