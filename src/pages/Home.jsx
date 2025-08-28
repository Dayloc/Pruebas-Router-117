import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../services/obtenerUsuarios.js";

export const Home = () => {

const navigate = useNavigate()

const {store, dispatch} =useGlobalReducer()


const {listaUsers} = store


useEffect(() => {

	getUsers(dispatch)

}, []);

const nombre = "Eduardo";
const id = 1

const navegacion = ()=>{
	navigate(`/prueba1/${nombre}/${id}`)
}

console.log(listaUsers)


	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<button className="btn btn-primary" onClick={()=>navegacion()}>Ir Prueba1</button>

			{
				listaUsers && listaUsers.map((user)=>
				<div key={user.id}>{user.name}</div>
				)
			}
		</div>
	);
}; 