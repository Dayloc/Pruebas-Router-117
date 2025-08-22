import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
function Prueba1() {
    const {store, dispatch} =useGlobalReducer()

    console.log(store)
    
  return (
    <div>
      Hola, soy Prueba 1
    </div>
  )
}

export default Prueba1
