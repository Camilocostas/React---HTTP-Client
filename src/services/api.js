import axios from "axios";

const chuckAPI = axios.create({
    baseURL: "https://api.chucknorris.io/jokes"
});

const cocktailAPI = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1"
});

// Ejercicio 1
export const obtenerChisteAleatorio = async () => {
    const res = await chuckAPI.get("/random");
    return res.data.value;
};

// Ejercicio 2
export const obtenerCategorias = () => chuckAPI.get("/categories");

export const obtenerChistePorCategoria = async (categoria) => {
    const res = await chuckAPI.get("/random", {
    params: { category: categoria }
    });
    return res.data.value;
};

// Ejercicio 3 y 4
export const buscarChistes = async (texto) => {
    const res = await chuckAPI.get("/search", {
    params: { query: texto }
    });
    return res.data.result;
};

// Ejercicio 5
export const buscarCocktail = (nombre) =>
    cocktailAPI.get("/search.php", { params: { s: nombre } });

// Ejercicio 6
export const obtenerCategoriasCocktail = () =>
    cocktailAPI.get("/list.php", { params: { c: "list" } });

export const obtenerCocktailsPorCategoria = (categoria) =>
    cocktailAPI.get("/filter.php", { params: { c: categoria } });

// Ejercicio 7
export const obtenerDetalleCocktail = (id) =>
    cocktailAPI.get("/lookup.php", { params: { i: id } });

// Ejercicio 8
export const obtenerCocktailsPorIngrediente = (ingrediente) =>
    cocktailAPI.get("/filter.php", { params: { i: ingrediente } });

// Ejercicio 9
export const obtenerCocktailAleatorio = () =>
    cocktailAPI.get("/random.php");

// Ejercicio 10
export const obtenerCocktailsPorTipo = (tipo) =>
    cocktailAPI.get("/filter.php", { params: { a: tipo } });

// Ejercicios 12 en adelante
const rickAndMortyAPI = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
});

export const obtenerPersonajes = () => rickAndMortyAPI.get("/character");

// Ejercicio 13
export const buscarPersonajesPorNombre = (nombre) =>
    rickAndMortyAPI.get("/character", { params: { name: nombre } });

// Ejercicio 14
export const obtenerPersonajePorId = (id) =>
    rickAndMortyAPI.get(`/character/${id}`);

// Ejercicio 15
export const obtenerEpisodios = () => rickAndMortyAPI.get("/episode");

export const obtenerPersonajesPorUrls = (urls) =>
    Promise.all(urls.map((url) => axios.get(url)));

// Ejercicio 16
export const filtrarPersonajes = (estado, genero) =>
    rickAndMortyAPI.get("/character", {
    params: { status: estado, gender: genero }
    });

    // Ejercicio 18
export const obtenerEpisodiosPaginados = (page) =>
    rickAndMortyAPI.get("/episode", { params: { page } });

export const obtenerDetalleEpisodio = (id) =>
    rickAndMortyAPI.get(`/episode/${id}`);

// Ejercicio 19
export const obtenerTotales = () =>
    Promise.all([
    rickAndMortyAPI.get("/character"),
    rickAndMortyAPI.get("/episode"),
    rickAndMortyAPI.get("/location")
    ]);

    // Ejercicio 20
export const obtenerPersonajeAleatorio = async () => {
    const res = await rickAndMortyAPI.get("/character");
    const total = res.data.info.count;
  const idAleatorio = Math.floor(Math.random() * total) + 1;
    return rickAndMortyAPI.get(`/character/${idAleatorio}`);
};