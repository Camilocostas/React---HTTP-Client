import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ChisteAleatorio from "./components/ChisteAleatorio";
import ChistePorCategoria from "./components/ChistePorCategoria";
import BuscarChistes from "./components/BuscarChistes";
import BuscarCocktail from "./components/BuscarCocktail";
import CocktailsPorCategoria from "./components/CocktailsPorCategoria";
import CocktailsPorIngrediente from "./components/CocktailsPorIngrediente";
import CocktailAleatorio from "./components/CocktailAleatorio";
import CocktailsPorTipo from "./components/CocktailsPorTipo";
import ListadoComponent from "./components/ListadoComponent";
import DetalleComponent from "./components/DetalleComponent";
import PersonajesLista from "./components/PersonajesLista";
import BuscarPersonajes from "./components/BuscarPersonajes";
import EpisodiosLista from "./components/EpisodiosLista";
import FiltrarPersonajes from "./components/FiltrarPersonajes";
import PersonajesTabla from "./components/PersonajesTabla";
import DetallePersonaje from "./components/DetallePersonaje";
import EpisodiosVista from "./components/EpisodiosVista";
import EpisodioDetalle from "./components/EpisodioDetalle";
import Totales from "./components/Totales";
import PersonajeAleatorio from "./components/PersonajeAleatorio";
import FiltrarPersonajesRadio from "./components/FiltrarPersonajesRadio";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <ChisteAleatorio />
      <hr />
      <ChistePorCategoria />
      <hr />
      <BuscarChistes />
      <hr />
      <BuscarCocktail />
      <hr />
      <CocktailsPorCategoria />
      <hr />
      <CocktailsPorIngrediente />
      <hr />
      <CocktailAleatorio />
      <hr />
      <CocktailsPorTipo />
      <hr />
      <ListadoComponent />
      <hr />
      <PersonajesLista />
      <hr />
      <BuscarPersonajes />
      <hr />
      <EpisodiosLista />
      <hr />
      <FiltrarPersonajes />
      <hr />
      <PersonajesTabla />
      <hr />
      <Totales />
      <hr />
      <PersonajeAleatorio />
      <hr />
      <FiltrarPersonajesRadio />
      <div>
        <h2>Vistas con Router</h2>
        <button onClick={() => navigate("/personajes")}>
          Ver Personajes
        </button>
        <button onClick={() => navigate("/episodios")} style={{ marginLeft: "10px" }}>
          Ver Episodios
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:id" element={<DetalleComponent />} />
        <Route path="/personaje/:id" element={<DetallePersonaje />} />
        <Route path="/personajes" element={<PersonajesLista />} />
        <Route path="/episodios" element={<EpisodiosVista />} />
        <Route path="/episodios/:id" element={<EpisodioDetalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;