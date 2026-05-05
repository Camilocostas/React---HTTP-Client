    import { useEffect, useState } from "react";
    import { obtenerTotales } from "../services/api";

    function Totales() {
    const [totales, setTotales] = useState(null);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        cargarTotales();
    }, []);

    const cargarTotales = async () => {
        setCargando(true);
        const [personajes, episodios, ubicaciones] = await obtenerTotales();
        setTotales({
        personajes: personajes.data.info.count,
        episodios: episodios.data.info.count,
        ubicaciones: ubicaciones.data.info.count
        });
        setCargando(false);
    };

    const estiloTarjeta = {
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        width: "150px"
    };

    return (
        <div>
        <h2>Totales de Rick and Morty</h2>
        {cargando && <p>Cargando totales...</p>}
        {totales && (
            <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
            <div style={estiloTarjeta}>
                <h3>Personajes</h3>
                <p style={{ fontSize: "32px", fontWeight: "bold" }}>
                {totales.personajes}
                </p>
            </div>
            <div style={estiloTarjeta}>
                <h3>Episodios</h3>
                <p style={{ fontSize: "32px", fontWeight: "bold" }}>
                {totales.episodios}
                </p>
            </div>
            <div style={estiloTarjeta}>
                <h3>Ubicaciones</h3>
                <p style={{ fontSize: "32px", fontWeight: "bold" }}>
                {totales.ubicaciones}
                </p>
            </div>
            </div>
        )}
        </div>
    );
    }

    export default Totales;