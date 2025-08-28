import React from 'react'
import { useParams } from 'react-router-dom'

function Prueba1() {
    const {id,nombre } = useParams()
    
    
  return (
    <div>
      Hola, soy Prueba 1 y me ha llegado por url {nombre} y {id}
    </div>
  )
}

export default Prueba1
