import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUsers } from "../services/obtenerUsuarios.js";

export const Home = () => {

const navigate = useNavigate()

const {store, dispatch} =useGlobalReducer()
const {listaUsers} = store

const navegacion = ()=>{
	navigate("/prueba1")
}
useEffect(() => {

	getUsers(dispatch)

}, [dispatch]);


console.log(listaUsers)


	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<button className="btn btn-primary" onClick={()=>navegacion()}>Ir Prueba1</button>
		</div>
	);
}; 