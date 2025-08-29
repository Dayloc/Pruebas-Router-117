
 //Paso 1
export const initialStore=()=>{
  return{
    message: null,
    listaUsuarios:[]
    
  }
}

//Paso2
export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'SaveUsers':
      return{
        ...store,
        listaUsuarios : action.payload
      }

      
    default:
      throw Error('Unknown action.');
  }    
}
