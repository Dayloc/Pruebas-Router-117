import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Prueba1() {
  //const { nombre, id } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

    const nombre = query.get("nombre");
  const id = query.get("id");
  return (
    <div>
      Hola, soy Prueba 1 y me ha llegado por url {nombre} y {id}
      <div>
        <p>Ruta actual: {location.pathname}</p>
        <p>Query params: {location.search}</p>
      </div>
    </div>
  );
}

export default Prueba1;
