export const initialStore=()=>{
  return{
    message: null,
    listaUsuarios:[]
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'SaveUsers':
      return{
        ...store,
        listaUsers : action.payload
      }

       case 'SaveUsers3':
      return{
        ...store,
        listaUsers : action.payload
      }
       case 'SaveUsers2':
      return{
        ...store,
        listaUsers : action.payload
      }
    default:
      throw Error('Unknown action.');
  }    
}
