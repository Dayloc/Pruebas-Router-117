import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Prueba1() {
  const { nombre, id } = useParams();
   const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("username");

    if (storedName) {

      setSavedName(storedName);
    }
  }, []);

//Para guardar 
   const handleSave = () => {
    localStorage.setItem("username", name);
    setSavedName(name);
    setName(""); // limpiar input
  };

  const limpiaDatos = ()=>{
    localStorage.clear()
    setSavedName("")
  }
  return (
    <div>
      Hola, soy Prueba 1 y me ha llegado por url {nombre}  con el id: {id}
     

     <div>
      <h2>Nombre guardado: {savedName || "Ninguno"}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <button onClick={handleSave}>Guardar</button>
      <button className="btn btn-danger m-2" onClick={()=>limpiaDatos()}>Limpar LocalStore</button>
    </div>
    </div>
  );
}

export default Prueba1;
