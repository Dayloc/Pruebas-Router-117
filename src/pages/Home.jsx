import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getUsers } from "../services/obtenerUsuarios.js";

export const Home = () => {
  const renders = useRef(0);
  
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  const { store, dispatch } = useGlobalReducer();

  const { listaUsers } = store;
  renders.current += 1;

  useEffect(() => {
    getUsers(dispatch);
  }, []);
  const obj = {
    nombre: "Eduardo",
    id: 1,
    curso: 1999,
  };

  const navegacion = () => {
    //navigate(`/prueba1/${obj["nombre"]}/${obj["id"]}`);
    navigate(`/prueba1?nombre=${obj["nombre"]}&id=${obj["id"]}`);
  };

  console.log(listaUsers);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <button className="btn btn-primary" onClick={() => navegacion()}>
        Ir Prueba1
      </button>

      {listaUsers &&
        listaUsers.map((user) => <div key={user.id}>{user.name}</div>)}

      <div className="m-5">
        <p>Contador: {count}</p>
        <p>El componente se renderizó {renders.current} veces</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  );
};
