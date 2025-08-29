import React,{useState, useEffect} from "react"; 
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getUsers } from "../services/obtenerUsuarios";

const Victor = ()=>{ 
  const { store, dispatch } = useGlobalReducer();
  const {listaUsuarios} = store
    
     useEffect(() => {

        getUsers(dispatch)
        
      }, [dispatch]);

      console.log(store.listaUsuarios)
    
    const nombre= "Eduardo"
    const  id= 1

    const [contador, setContador] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        if(contador >10){
            alert("Saludos Victor")
            navigate(`/prueba1/${nombre}/${id}`);
        }
        
      }, [contador]);


    return(
        <div>

            <h1>Hola soy componente Victor y funciono bien</h1>

            <p>Soy la variable contador y en estos momentos mi valor es: {contador} y ve al <Link to={`/prueba1/${nombre}/${id}`}>Prueba1</Link></p>
            <button className="btn btn-success m-1"  onClick={()=>setContador(contador +1)}>Incrementa 1</button>
            <button className="btn btn-danger m-1" onClick={()=>setContador(contador - 1)}>Decrementa 1</button>
            <button className="btn btn-primary m-1" onClick={()=>setContador(0)}>Reset</button>
        <div>
        {
            listaUsuarios.length>0 ?  (listaUsuarios.map((user)=>
            <div key={user.id}>{user.name}</div>
            )): <p>No hay usuarios</p>
        }

        </div>
        </div>
    )

}

export default Victor;